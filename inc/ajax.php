<?php
// Ajax part
Class woocommerce_videolab360_ajax
{
	public function __construct() {

		
		add_action('wp_ajax_videolab360_upload_files',array(&$this,'upload_files'));
		add_action('wp_ajax_nopriv_videolab360_upload_files',array(&$this,'upload_files'));
		
		add_action('wp_ajax_videolab360_record_update',array(&$this,'record_update'));
		add_action('wp_ajax_nopriv_videolab360_record_update',array(&$this,'record_update'));
		
		add_action('wp_ajax_videolab360_remove_local_file',array(&$this,'remove_local_file'));
		add_action('wp_ajax_nopriv_videolab360_remove_local_file',array(&$this,'remove_local_file'));
		
		add_action('wp_ajax_VLAB360_ADMIN_360_content',array(&$this,'admin_360_content'));
		add_action('wp_ajax_nopriv_VLAB360_ADMIN_360_content',array(&$this,'admin_360_content'));
		
		add_action('wp_ajax_videolab360_parameters_update',array(&$this,'parameters_update'));
		add_action('wp_ajax_nopriv_videolab360_parameters_update',array(&$this,'parameters_update'));
		
		add_action('wp_ajax_videolab360_default_parameters_update',array(&$this,'default_parameters_update'));
		add_action('wp_ajax_nopriv_videolab360_default_parameters_update',array(&$this,'default_parameters_update'));

		add_action('wp_ajax_videolab360_update_category',array(&$this,'update_category'));
		add_action('wp_ajax_nopriv_videolab360_update_category',array(&$this,'update_category'));
		
		add_action('wp_ajax_videolab360_add_category',array(&$this,'add_category'));
		add_action('wp_ajax_nopriv_videolab360_add_category',array(&$this,'add_category'));
		
		add_action('wp_ajax_videolab360_remove_category',array(&$this,'remove_category'));
		add_action('wp_ajax_nopriv_videolab360_remove_category',array(&$this,'remove_category'));
		
	}
	//update parameters
	public function remove_category(){
		$status=2;

		if(isset($_POST['id']) && $_POST['id']!='' && $_POST['id']!=0){
			
			$db_actions=new videolab360_categories_module();
			
			$success=$db_actions->remove_record($_POST['id']);
			$status=($success)?1:2;

	
		}
		else $status=3;
		$message=($status==1)?__('Category was removed.',VLAB360_LANG) : __('Some error occured!',VLAB360_LANG);

		echo json_encode(array('status'=>$status,'message'=>$message));

		die();
	}
	
	//add category
	
	public function add_category(){
		$status=2;
		$table='';
		$options='';
		if(isset($_POST['name']) && $_POST['name']!=''){
			
			$db_actions=new videolab360_categories_module();
			$not_exist=$db_actions->category_not_exist($_POST['name']);
			if($not_exist){
				$inserted_cat_id=$db_actions->insert_row(array('name'=>$_POST['name']));
				$status=($inserted_cat_id)?1:2;
			}
			else $status=4;
	
		}
		else $status=3;
		if($status==4){
			$message= __('A category with that name already exists!',VLAB360_LANG);
		}
		else $message=($status==1)?__('Category was successfully added!',VLAB360_LANG) : __('Some error occured!',VLAB360_LANG);
		if($status==1){
			if(isset($_POST['return_options'])){
				ob_start();
				videolab360_categories_select_options(array(),$inserted_cat_id);
				$options = ob_get_clean();
				
			}
			else if(isset($_POST['return_table'])){
				include_once VLAB360_DIR.'/inc/admin_tables/VLAB360_CATEGORIES_TABLE.php';
				$category_table = new VLAB360_CATEGORIES_TABLE();
			    $category_table->prepare_items();
				ob_start();
				$category_table->display();
				$table = ob_get_clean();
			}
		}
		
		echo json_encode(array('status'=>$status,'message'=>$message,'table'=>$table,'options'=>$options));

		die();
	}
	//update category
	
	public function update_category(){
		$status=1;
		
		if(isset($_POST['id']) && $_POST['id']!='' && isset($_POST['name']) && $_POST['name']!=''){
			$db_actions=new videolab360_categories_module();
			$not_exist=$db_actions->category_not_exist($_POST['name']);
			$success=true;;
			if($not_exist){
				
				$success=$db_actions->update((int)$_POST['id'],array('name'=>$_POST['name']));
				$status=($success)?1:2;
			}
			else $status=4;
			
			
		}
		else $status=3;
		if($status==4){
			$message= __('A category with that name already exists!',VLAB360_LANG);
		}
		else $message=($status==1)?__('Category was successfully updated!',VLAB360_LANG) : __('Some error occured!',VLAB360_LANG);

		echo json_encode(array('status'=>$status,'message'=>$message));

		die();
	}
	
	//update parameters
	public function parameters_update(){
		$status=1;
		$serialized=maybe_serialize($_REQUEST['attributes']);
		if(isset($_REQUEST['videolab360_id']) && isset($_REQUEST['attributes'])){
			$id=(int)$_REQUEST['videolab360_id'];
			$db_actions=new videolab360_records_module();
			$db_actions->update($id,array('attributes'=>$serialized));
		}
		else $status=3;

		echo json_encode(array('status'=>$status));

		die();
	}	
	
	//default params update
	public function default_parameters_update(){
		$status=1;
		
		if(isset($_POST['attributes'])){
			update_option('videolab360_default_parameters',$_POST['attributes']);
			
		}
		else $status=3;

		echo json_encode(array('status'=>$status));

		die();
	}
	
	//in admin - 360 preview content 
	public function admin_360_content(){
		if(isset($_POST['videolab360_id']) && $_POST['videolab360_id']!=0){
			$videolab360_id=(int)$_POST['videolab360_id'];
        	$db_actions=new videolab360_records_module();
			if($videolab360_id!=0) $results=$db_actions->get_where(array('id'=>$videolab360_id));		

			if(isset($results) && !empty($results)){
				
				$record=$results[0];
				$folder_name=$record['folder_name'];
				$files=videolab360_photos_directory_handler::get_folder_content_list($folder_name);
				
				if(!empty($files)){
					$attributes=videolab360_get_primary_atributes($files);
					$attributes=videolab360_add_custom_attributes($attributes,$record['attributes']);

					include VLAB360_DIR.'/views/admin/parts/image_360.php';
				}
				else _e('No files found.',VLAB360_LANG); 

				
			}
			else _e('No files found.',VLAB360_LANG); 


		}
		else _e('No files found.',VLAB360_LANG); 
		die();
	}
	//remove_local_file
	public function remove_local_file(){

		$status=1;
		$file='';
		if(isset($_REQUEST['folder_name']) && isset($_REQUEST['file_name'])){
			$output_dir=(isset($_REQUEST['folder_name']))?VLAB360_UPLOADS_FOLDER.$_REQUEST['folder_name'].'/' : VLAB360_UPLOADS_FOLDER;
			$file=$output_dir.$_REQUEST['file_name'];

			if(!is_dir($output_dir) || !file_exists($file)){
				$status=2;
			}
			else{
				unlink($file);
			}

		}
		else $status=3;

		echo json_encode(array('status'=>$status));

		die();
	}
	//upload files localy
	public function upload_files(){
		
		include_once VLAB360_DIR.'/modules/upload_handler.php';
		$status=1;
		$first_upload=false;
		$dir_handler=new videolab360_photos_directory_handler();
		//file_put_contents(dirname(__FILE__).'/testas_ajax.txt', var_export($_POST,true));
		if(isset($_POST['zip_only'])){
			$folder_name = videolab360_photos_directory_handler::generate_random_string();
			$output_dir=VLAB360_UPLOADS_FOLDER.$folder_name.'/';
			$created=$dir_handler->create_dir($output_dir);
			
			$input_name=(isset($_REQUEST['filename']))?$_REQUEST['filename'] : 'myfile';
			if(isset($_FILES[$input_name]))
			{
				$upload_handler=new videolab360_upload_handler($output_dir,$input_name);
				$upload_handler->handle_file_upload();
			}

			$db_actions=new videolab360_records_module();
			$col_data=$_POST;
			$col_data['folder_name']=$folder_name;
			$col_data['label']=videolab360_get_file_name($col_data);
			$col_data['attributes']=videolab360_get_default_attributes();

			$inserted=$db_actions->insert_row($col_data);
			
			$status=(!$inserted)?3:1;
			
			$edit_url='';
			if(isset($inserted)) $edit_url=admin_url( 'admin.php?page='.VLAB360_ADMIN_PAGE_SLUG.'&record='.$inserted);
		}
		else{
			
			$output_dir=(isset($_REQUEST['folder_name']))?VLAB360_UPLOADS_FOLDER.$_REQUEST['folder_name'].'/' : VLAB360_UPLOADS_FOLDER;
			if(!is_dir($output_dir)){
				$created=$dir_handler->create_dir($output_dir);
				$first_upload=true;
			}
			else $created=true;
			

			if($created){
				$input_name=(isset($_REQUEST['filename']))?$_REQUEST['filename'] : 'myfile';
				if(isset($_FILES[$input_name]))
				{
					$upload_handler=new videolab360_upload_handler($output_dir,$input_name);
					$upload_handler->handle_file_upload();
				}
			}
			else $status=2;
			
			if($first_upload){
				$db_actions=new videolab360_records_module();
			
				$inserted=$db_actions->insert_row($_POST);
				
				$status=(!$inserted)?3:1;
			}
			$edit_url='';
			if(isset($inserted)) $edit_url=admin_url( 'admin.php?page='.VLAB360_ADMIN_PAGE_SLUG.'&record='.$inserted);
		}

		echo json_encode(array('status'=>$status,'items'=>$input_name,'output_dir'=>$output_dir,'redir'=>$edit_url));

		die();
	}
	//update record
	public function record_update(){
		$status=1;

		if(isset($_REQUEST['videolab360_id'])){
			$id=(int)$_REQUEST['videolab360_id'];
			$db_actions=new videolab360_records_module();
			$db_actions->update($id,$_POST);

		}
		else $status=3;

		echo json_encode(array('status'=>$status));

		die();
	}
	
}
new woocommerce_videolab360_ajax();