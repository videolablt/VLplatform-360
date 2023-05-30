<?php
//-------------========================================    table class for player statistics "bigcinema_List_Table_statistics" =========================---------------------------------
if( ! class_exists( 'WP_List_Table' ) ) {
    require_once( ABSPATH . 'wp-admin/includes/class-wp-list-table.php' );
}
class videolab360_table extends WP_List_Table
{
	public function __construct() {

        parent::__construct(
            array(
                'singular' => 'singular_form',
                'plural'   => 'plural_form',
                'ajax'     => false
            )
        );

    }
 // bulk actions
   public function get_bulk_actions() {
	   	
		$actions = array(
			  'delete'    => __('Remove',VLAB360_LANG),

		);
		
	  	return $actions;
	}
		//actions to collumn
	function column_actions($item) {
	  	$actions = array(
	            'view'    => sprintf('<a href="?page=%s&record=%s">%s</a>',$_REQUEST['page'],$item['id'],__('Edit',VLAB360_LANG)),
	            'delete'    => sprintf('<a href="?page=%s&id=%s&action=delete">%s</a>',$_REQUEST['page'],$item['id'],__('Remove',VLAB360_LANG)),
	     );
	     

	  return sprintf('%1$s', $this->row_actions($actions) );
	}
	private function nonce_field($content,$error)
	{
		if($error) $cl='notice notice-error is-dismissible';
		else $cl='notice notice-success is-dismissible';
		return '<div style="min-height:30px;line-height:25px;font-size:24px;margin-left:0;margin-top:10px;padding:7px 5px 3px 5px" class="'.$cl.'">'.$content.'</div>';
	}
	public function process_row_action() {
		  global $wpdb;
		  $action = $this->current_action();
		  if (isset($_GET['id']))
		  {
			 switch ( $action ) {
	            case 'delete':
	            	$db_actions=new videolab360_records_module();
	            	$db_actions->remove($_GET['id']);
	                echo $this->nonce_field(__('Record was removed!',VLAB360_LANG),false);
	                break;

	            default:
	                // do nothing or something else
	                return;
	                break;
	        }
		  }

	 }
	public function process_bulk_action() {
		global $wpdb;
        // security check!
        if ( isset( $_POST['_wpnonce'] ) && ! empty( $_POST['_wpnonce'] ) ) {

            $nonce  = filter_input( INPUT_POST, '_wpnonce', FILTER_SANITIZE_STRING );
            $action = 'bulk-' . $this->_args['plural'];

            if ( ! wp_verify_nonce( $nonce, $action ) )
                wp_die( 'Nope! Security check failed!' );

        }

        $action = $this->current_action();
		
	        switch ( $action ) {

	            case 'delete':
	                if (isset($_POST['id']))
	                {
	                	$db_actions=new videolab360_records_module();
						foreach($_POST['id'] as $id){
							
							$db_actions->remove($id);
						}
						echo $this->nonce_field(count($_POST['id']).' '.__('Record(-s) was removed!',VLAB360_LANG),false);
					}
	                break;    
     
	            default:
	                // do nothing or something else
	                return;
	                break;
	        }


        return;
    }

	//adding checkbox for bulk actions
	/*
	public function column_id($item) {
		
        return sprintf(
            '<input type="checkbox" name="id[]" value="%s" /><i>%s</i>%s', $item['id'],$item['id']
        );

        
        return '';    
    }
    */
   
    public function prepare_items()
    {
    	$this->process_bulk_action();
    	$this->process_row_action();
        $columns = $this->get_columns();
        $hidden = $this->get_hidden_columns();
        $sortable = $this->get_sortable_columns();
        $data = $this->table_data();
        if(!empty($_GET['orderby'])) usort( $data, array( &$this, 'sort_data' ) );

        $per_page_default = 20;
        $perPage=get_option(VLAB360_PREFIX.'records_per_page');
        $perPage=($perPage!='')?$perPage:$per_page_default;
        
        $currentPage = $this->get_pagenum();
        $totalItems = count($data);

        $this->set_pagination_args( array(
            'total_items' => $totalItems,
            'per_page'    => $perPage
        ) );

        $data = array_slice($data,(($currentPage-1)*$perPage),$perPage);

        $this->_column_headers = array($columns, $hidden, $sortable);
        $this->items = $data;
        
    }


    /**
     * Override the parent columns method. Defines the columns to use in your listing table
     *
     * @return Array
     */
    public function get_columns()
    {
        $columns = videolab360_admmin_records_columns();

  			
        return $columns;
    }

    /**
     * Define which columns are hidden
     *
     * @return Array
     */
    public function get_hidden_columns()
    {
        return array();
    }

    /**
     * Define the sortable columns
     *
     * @return Array
     */
    public function get_sortable_columns()
    {
         $sortable_columns = array(
         	'created' => array('created',false),
         	'label' => array('label',false),
         	'category' => array('category',false),
         	'user_id' => array('user_id',false),
  		);

  		return $sortable_columns;
    }

    /**
     * Get the table data
     *
     * @return Array
     */
    private function table_data()
    {
    	global $wpdb;

		$data=array();
		$db_actions=new videolab360_records_module();
		$db_categories_actions=new videolab360_categories_module();
		$results=array();
		$show_all=true;
		$fields=array('category','user_id');
		$where=array();
		foreach($fields as $field){
			if(isset($_GET[$field]) && $_GET[$field]!=''){
				$where[$field]=(int)$_GET[$field];
			}
		}

		$search=(isset($_GET['slabel']) && $_GET['slabel']!='')?array('label'=>$_GET['slabel']):array();
		if((!empty($search)) || (!empty($where))){
			$results=$db_actions->get_table_data_with_search($search,$where);
		}
		else $results=$db_actions->get_table_data();
		
		if(!empty($results)) {

			foreach($results as $result)
			{	
				$files=videolab360_photos_directory_handler::get_folder_content_list($result['folder_name']);
				$folder_name=$result['folder_name'];
				if(!empty($files)){
					$files_handler=new videolab360_files_handler($files);
				}
				if($result['user_id']!=0){
					$user_info = get_userdata($result['user_id']);
					$user_name=($user_info)?$user_info->user_login:'-';
				}
				$id=$result['id'];
				$shortcode_icon=videolab360_output_icon('shortcode',__('Shortcode', VLAB360_LANG),false);
				$url_icon=videolab360_output_icon('link',__('URL', VLAB360_LANG),false);
				$thumb_src=(!empty($files))?$files_handler->get_thumbnail_src(VLAB360_UPLOADS_FOLDER_URL.$result['folder_name'].'/'):'';
				$shortcode_col_content='<textarea class="content shortcode-content">['.VLAB360_SHORTCODE.' id="'.$id.'"]</textarea>';
				$shortcode_col_content.='<textarea class="content url-content">'.videolab360_get_file_embed_url($folder_name).'</textarea>';
				$shortcode_col_content.=$shortcode_icon.$url_icon.'<span class="msg" style="display:none">'.__('Copyed!', VLAB360_LANG).'</span>';
				$label_el='<div class="mobile-label"><div class="inner"><span class="thumb" style="background-image:url('.$thumb_src.')"></span><span class="label">'.$result['label'].'</span></div></div>';
		        $data[] = array(
		                    'id'        => '<div class="id-wrapper"><div class="flex-center"><div><input type="checkbox" name="id[]" value="'.$id.'" /><i>'.$id.'</i></div></div></div>'.$label_el,
		                    'shortcode' =>$shortcode_col_content,
		    				'label'=>'<div class="inner"><span class="thumb" style="background-image:url('.$thumb_src.')"></span><span class="label">'.$result['label'].'</span></div>',
		    				'user_id'=>'<a href="'.admin_url( 'admin.php?page=').VLAB360_ADMIN_PAGE_SLUG.'&user_id='.$result['user_id'].'">'.$user_name.'</a>',
		    				'category'=>$db_categories_actions->get_field_where(array('id'=>$result['category']),'name'),
		    				'expires'=>($result['expire_enabled'])?videolab360_get_datetime($result['expires'],'Y-m-d'):__('Not expires', VLAB360_LANG),
		    				'updated'   => videolab360_get_datetime($result['updated'],'Y-m-d H:i:s'),
		    				'created'   => videolab360_get_datetime($result['created'],'Y-m-d H:i:s'),
		    				'colactions'	=>sprintf('<a href="?page=%s&record=%s">%s</a>',$_REQUEST['page'],$id,__('Edit',VLAB360_LANG)).' | '.sprintf('<a href="?page=%s&id=%s&action=delete">%s</a>',$_REQUEST['page'],$id,__('Remove',VLAB360_LANG)),
		                    );

				
        
		    }
		}

        return $data;
    }


    /**
     * Define what data to show on each column of the table
     *
     * @param  Array $item        Data
     * @param  String $column_name - Current column name
     *
     * @return Mixed
     */
    public function column_default( $item, $column_name )
    {

       return $item[ $column_name ];

    }

    /**
     * Allows you to sort the data by the variables set in the $_GET
     *
     * @return Mixed
     */
    private function sort_data( $a, $b )
    {
        // Set defaults
        $orderby = 'id';
        $order = 'DESC';

        // If orderby is set, use this as the sort column
        if(!empty($_GET['orderby']))
        {
            $orderby = $_GET['orderby'];
        }

        // If order is set use this as the order
        if(!empty($_GET['order']))
        {
            $order = $_GET['order'];
        }


        $result = strcmp( $a[$orderby], $b[$orderby] );

        if($order === 'asc')
        {
            return $result;
        }

        return -$result;
    }
}
?>