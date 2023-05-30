<?php
/**
 * Plugin Name: Video Lab 360
 * Plugin URI: https://videolab.lt
 * Description: Upload and display 360 / 3D product photos
 * Author: Video Lab
 * Author URI: https://videolab.lt
 * Version: 1.0.8
 * Text Domain: videolab_360
 * Domain Path: /languages/
 * License: All rights reserved: Video Lab comapny
 * License URI: #
 * Slug: videolab_360
 */
global $wpdb;
$upload_dir = wp_upload_dir();
define( 'VLAB360_URL', plugin_dir_url( __FILE__ ) );
define( 'VLAB360_DIR', plugin_dir_path( __FILE__ ) );
define('VLAB360_LANG',"videolab_360");
define('VLAB360_SHORTCODE',"videolab_360");
define('VLAB360_PX',"vl360_");
define('VLAB360_PREFIX',"VIDEOLAB360");
define('VLAB360_UPL_FOLDER_NAME',"videolab_360");
define('VLAB360_UPLOADS_FOLDER',$upload_dir['basedir']."/".VLAB360_UPL_FOLDER_NAME."/");
define('VLAB360_UPLOADS_FOLDER_URL',$upload_dir['baseurl']."/".VLAB360_UPL_FOLDER_NAME."/");

//videolab-360_page_videolab360_options <> videolab360_records_page_videolab360_options
define('VLAB360_ADMIN_PAGE_SLUG',"videolab360_records");
define('VLAB360_ADMIN_OPTIONS_PAGE_SLUG',"videolab360_options");
define('VLAB360_ADMIN_CATEGORIES_PAGE_SLUG',"videolab360_categories");
define('VLAB360_ADMIN_NEW_PAGE_SLUG',"videolab360_new");
define('VLAB360_ADMIN_LOGS_PAGE_SLUG',"videolab360_logs");

define('VLAB360_ADMIN_PAGE',"Video Lab 360");
define('VLAB360_WP_ADMIN_PAGE_SLUG',"video-lab-360");
define('VLAB360_VERSION',"1.0.0");

//db tables
define('VLAB360_DB_PREFIX',$wpdb->prefix."videolab360_");
define('VLAB360_RECORDS_TABLE',VLAB360_DB_PREFIX."records");
define('VLAB360_CATEGORIES_TABLE',VLAB360_DB_PREFIX."categories");
define('VLAB360_LOGS_TABLE',VLAB360_DB_PREFIX."logs");


include_once VLAB360_DIR.'/modules/db_module.php';
include_once VLAB360_DIR.'/modules/db_records_module.php';
include_once VLAB360_DIR.'/modules/db_categories_module.php';
include_once VLAB360_DIR.'/modules/db_logs_module.php';
include_once VLAB360_DIR.'/modules/directory_handler.php';
include_once VLAB360_DIR.'/modules/files_handler.php';

//constants, values 

include_once VLAB360_DIR.'/inc/constants.php';

//functions 

include_once VLAB360_DIR.'/inc/functions.php';

//ajax 

include_once VLAB360_DIR.'/inc/ajax.php';

//hooks 

include_once VLAB360_DIR.'/inc/hooks/woo_rewrite_rules.php';
include_once VLAB360_DIR.'/inc/hooks/cron_jobs.php';


//icons 

include_once VLAB360_DIR.'/inc/icons.php';

//template

include_once VLAB360_DIR.'/inc/templater.php';

//elementor widgets
define( 'ELEMENTOR_VLAB360', __FILE__ );
include_once VLAB360_DIR . '/elementor/functions.php';


class videolab360_class
{
    public function __construct() {

    	add_action('plugins_loaded', array( &$this,'set_language'));
		register_activation_hook(__FILE__, array(&$this, 'install' ));
		add_action('wp_enqueue_scripts', array(&$this,'frontend_scripts'),20);
		add_action('the_posts',  array(&$this,'enqueue_scripts_if_shortcode' ));
		add_shortcode( VLAB360_SHORTCODE, array(&$this,'shortcode' ));
		if(is_admin()){
			//menu item
			add_action('admin_menu', array($this, 'add_menu_items'));
			//backend scripts	
			add_action('admin_enqueue_scripts', array( &$this, 'backend_scripts' ));
			add_action('admin_init', array(&$this,'options_settings') );

		}

    }
    public function options_settings(){
    	include_once VLAB360_DIR.'/modules/admin_options_module.php';
    	$admin_options_fields=VLAB360_ADMIN_options_fields();
    	$admin_options=new videolab_360_admin_options_module($admin_options_fields);
    	$fields=$admin_options->get_fields_keys();

    	foreach($fields as $field) register_setting( 'videolab360_options', $field);
	}
	//checks if shortcode in page content, and only then adds scripts
	
	public function enqueue_scripts_if_shortcode($posts)
	{
		$found = false;
		foreach ($posts as $post) 
		{
			$pos=stripos( $post->post_content, '[' . VLAB360_SHORTCODE );
			if ( $pos !== false ) 
			{
			      $found = true;
			      break;
			}
		}
		if($found) add_action('wp_enqueue_scripts', array(&$this,'shortcode_frontend_scripts'));
		return $posts;
	}


	//modals
	
    public function my_acc_modals(){
    	include_once VLAB360_DIR.'views/modals.php';

	}

	//admin notice
	
	public static function admin_notice() {
		global $pagenow;
		if ( 'plugins.php' == $pagenow ) {
			$class = esc_attr( 'notice notice-error is-dismissible' );
			$message = esc_html__('woocommerce_ordf For WooCommerce Plugin needs WooCommerce to be installed and active.', VLAB360_LANG);
			printf('<div class="%1$s"><p>%2$s</p></div>', esc_html($class), esc_html($message));
		}
	}
/*-------------------------------------  install ----------------------------------------->*/
	public function install()
	{
		require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
		$sql = "CREATE TABLE IF NOT EXISTS " . VLAB360_RECORDS_TABLE . " (
				id int(11) NOT NULL AUTO_INCREMENT,
				user_id int(11),
				category int(11),
				folder_name VARCHAR(100),
				label VARCHAR(255),
				attributes LONGTEXT,
				expires datetime,
				expire_enabled int(1),
				updated datetime,
				created datetime,
				PRIMARY KEY (id)
			) CHARACTER SET utf8 COLLATE utf8_general_ci";

		dbDelta($sql);
		//categories
		$sql = "CREATE TABLE IF NOT EXISTS " . VLAB360_CATEGORIES_TABLE . " (
				id int(11) NOT NULL AUTO_INCREMENT,
				name VARCHAR(255),
				PRIMARY KEY (id)
			) CHARACTER SET utf8 COLLATE utf8_general_ci";

		dbDelta($sql);
		//logs table 
		$sql = "CREATE TABLE IF NOT EXISTS " . VLAB360_LOGS_TABLE . " (
				id int(11) NOT NULL AUTO_INCREMENT,
				record_id int(11),
				type VARCHAR(255),
				value int(1),
				expires VARCHAR(100),
				comment LONGTEXT,
				created datetime,
				PRIMARY KEY (id)
			) CHARACTER SET utf8 COLLATE utf8_general_ci";
		dbDelta($sql);	
			
		$db_actions=new videolab360_categories_module();
		$db_actions->insert_default_category();
		update_option('VLAB360_VERSION', VLAB360_VERSION);
		update_option('videolab360_options','');
		update_option('videolab360_default_parameters','');
		
		if(!is_dir(VLAB360_UPLOADS_FOLDER)){
			mkdir(VLAB360_UPLOADS_FOLDER);
		}

	}
	
	//menu items 
	
	public function add_menu_items()
	{
		add_menu_page(VLAB360_ADMIN_PAGE_SLUG,VLAB360_ADMIN_PAGE,'edit_posts',"videolab360_records",array(&$this, 'videolab360_records'),VLAB360_URL.'assets/img/menu-icon.svg',57);
		add_submenu_page(VLAB360_ADMIN_PAGE_SLUG, __('360 photos',VLAB360_LANG), __('360 photos',VLAB360_LANG), 'edit_posts',VLAB360_ADMIN_PAGE_SLUG, array(&$this,'videolab360_records'));
		add_submenu_page(VLAB360_ADMIN_PAGE_SLUG, __('Upload new files',VLAB360_LANG), __('Upload new',VLAB360_LANG), 'edit_posts',VLAB360_ADMIN_NEW_PAGE_SLUG, array(&$this,'videolab360_new'));
		add_submenu_page(VLAB360_ADMIN_PAGE_SLUG, __('Categories',VLAB360_LANG), __('Categories',VLAB360_LANG), 'edit_posts',VLAB360_ADMIN_CATEGORIES_PAGE_SLUG, array(&$this,'videolab360_categories'));
		add_submenu_page(VLAB360_ADMIN_PAGE_SLUG, __('Options page',VLAB360_LANG), __('Options page',VLAB360_LANG), 'edit_posts',VLAB360_ADMIN_OPTIONS_PAGE_SLUG, array(&$this,'videolab360_options'));
		add_submenu_page(VLAB360_ADMIN_PAGE_SLUG, __('Logs',VLAB360_LANG), __('Logs',VLAB360_LANG), 'edit_posts',VLAB360_ADMIN_LOGS_PAGE_SLUG, array(&$this,'videolab360_logs'));
	}

	//logs page 
	
	public function videolab360_logs(){
		videolab360_remove_expired_data_manual();
		include_once VLAB360_DIR.'/inc/admin_tables/videolab360_logs_table.php';
		$table = new videolab360_logs_table();
	    $table->prepare_items();
		include_once VLAB360_DIR.'/views/admin/logs.php';
	}
	//new  
	
	public function videolab360_new(){
		include_once VLAB360_DIR.'/views/admin/new.php';
	}
	//categories page 
	
	public function videolab360_categories(){
		include_once VLAB360_DIR.'/inc/admin_tables/videolab360_categories_table.php';
		$table = new videolab360_categories_table();
	    $table->prepare_items();
		include_once VLAB360_DIR.'/views/admin/categories.php';
	}
	
	//options page 
	
	public function videolab360_options(){
		include_once VLAB360_DIR.'/modules/admin_options_module.php';
		include_once VLAB360_DIR.'/views/admin/options.php';
	}
	
	//admin page 
	
	public function videolab360_records(){

		if(!isset($_GET['record'])):
			//view
			include_once VLAB360_DIR.'/inc/admin_tables/videolab360_table.php';
			$table = new videolab360_table();
	        $table->prepare_items();

			
			include_once VLAB360_DIR.'/views/admin/records.php';
			
        else:
        	//edit record
        	$db_actions=new videolab360_records_module();
	    	$videolab360_id=(isset($_GET['record']))?(int)$_GET['record']:0;
			if($videolab360_id!=0) $results=$db_actions->get_where(array('id'=>$videolab360_id));		
			if(isset($results) && !empty($results)){
				$record=$results[0];
			}

        	include_once VLAB360_DIR.'/views/admin/single_record.php';
        	
        endif;
	}

	//-------------------------------------  uninstall ----------------------------------------->
	public function uninstall() {
		global $wpdb;
		$wpdb->query("DROP TABLE IF EXISTS " . VLAB360_RECORDS_TABLE);
		$wpdb->query("DROP TABLE IF EXISTS " . VLAB360_LOGS_TABLE);
		$wpdb->query("DROP TABLE IF EXISTS " . VLAB360_CATEGORIES_TABLE);

	}
	//language set
	public function set_language()
	{
		load_plugin_textdomain(VLAB360_LANG, false, basename(dirname( __FILE__ )) . '/languages/');
	}
	
	//-- shortcode_frontend_scripts

	public function shortcode_frontend_scripts()
	{

		if (!wp_script_is( 'jquery' ) ) {
        	wp_enqueue_script('jquery');
   		}
		wp_register_script(VLAB360_PREFIX.'_cloudimage360_js', VLAB360_URL . 'libs/image360/cloudimage360.js',array('jquery'),'3.0.4',false);
		wp_enqueue_script(VLAB360_PREFIX.'_cloudimage360_js');



	}
	//-- front-end scripts
	
	public function frontend_scripts()
	{
		global $post;
		$version=videolab360_get_version();
		if(isset($post) && isset($post->ID)){
			$template_name = get_post_meta( $post->ID, '_wp_page_template', true );
			if($template_name == 'embedphotos360.php'){
				wp_register_style( 'bootstrap_css', VLAB360_URL.'assets/css/bootstrap-part.css',array(),'1.1.1');
				wp_enqueue_style('bootstrap_css');
			}
		}
		





	}
	
	//-- back-end scripts

	public function backend_scripts($hook)
	{

		$screen = get_current_screen();
		$version=videolab360_get_version();
		global $post_type;


		if($hook==VLAB360_WP_ADMIN_PAGE_SLUG.'_page_'.VLAB360_ADMIN_NEW_PAGE_SLUG || ($hook=='toplevel_page_'.VLAB360_ADMIN_PAGE_SLUG && isset($_GET['record']))){
			if (!wp_script_is( 'jquery' ) ) {
	        	wp_enqueue_script('jquery');
	   		}
			wp_register_script(VLAB360_PREFIX.'_jquery_uploader_js', VLAB360_URL . 'libs/jquery_uploader/jquery.uploadfile.min.js',array('jquery'),'4.0.11',false);
			wp_enqueue_script(VLAB360_PREFIX.'_jquery_uploader_js');
			wp_register_style( VLAB360_PREFIX.'_jquery_uploader_css', VLAB360_URL.'libs/jquery_uploader/jquery-file-upload.css',array(),'4.0.11');
			wp_enqueue_style(VLAB360_PREFIX.'_jquery_uploader_css');
			
			
			wp_enqueue_script( 'jquery-ui-datepicker' );
			wp_enqueue_style('jquery-ui-datepicker_css', 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.2/themes/smoothness/jquery-ui.css');
			
			
			//bootstrap 

			//js
			wp_register_script(VLAB360_PREFIX.'_bootstrap_js', VLAB360_URL.'libs/bootstrap/js/bootstrap.min.js',array('jquery'),'3.4.1',false);
			wp_enqueue_script(VLAB360_PREFIX.'_bootstrap_js');
			

		}
		if($hook=='toplevel_page_'.VLAB360_ADMIN_PAGE_SLUG || $hook==VLAB360_WP_ADMIN_PAGE_SLUG.'_page_'.VLAB360_ADMIN_OPTIONS_PAGE_SLUG || $hook==VLAB360_WP_ADMIN_PAGE_SLUG.'_page_'.VLAB360_ADMIN_NEW_PAGE_SLUG || ($hook=='toplevel_page_'.VLAB360_ADMIN_PAGE_SLUG && isset($_GET['record'])) || $hook==VLAB360_WP_ADMIN_PAGE_SLUG.'_page_'.VLAB360_ADMIN_CATEGORIES_PAGE_SLUG || $hook==VLAB360_WP_ADMIN_PAGE_SLUG.'_page_'.VLAB360_ADMIN_LOGS_PAGE_SLUG){
			//bootstrap css 
			wp_register_style( 'bootstrap_css', VLAB360_URL.'assets/css/bootstrap-part.css',array(),'1.1.1');
			wp_enqueue_style('bootstrap_css');
			
			if($hook==VLAB360_WP_ADMIN_PAGE_SLUG.'_page_'.VLAB360_ADMIN_OPTIONS_PAGE_SLUG){

	        	wp_enqueue_script( 'jquery-ui-core');
				wp_enqueue_style( 'jquery-ui-theme-smoothness','//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css');
				
				wp_register_script(VLAB360_PREFIX.'_jquery_ui_js','https://code.jquery.com/ui/1.10.4/jquery-ui.js',array(),'1.10.4',true);
				wp_enqueue_script( VLAB360_PREFIX.'_jquery_ui_js');
			}
			if($hook==VLAB360_WP_ADMIN_PAGE_SLUG.'_page_'.VLAB360_ADMIN_LOGS_PAGE_SLUG){
				wp_enqueue_script( 'jquery-ui-datepicker' );
				wp_enqueue_style('jquery-ui-datepicker_css', 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.2/themes/smoothness/jquery-ui.css');
			}
			wp_register_style( VLAB360_PREFIX.'_admin_style', VLAB360_URL.'assets/css/admin_style.css',array(),$version);
			wp_enqueue_style(VLAB360_PREFIX.'_admin_style');
			

		}

	}
	//-------------------------------------  shortcode ----------------------------------------->
	public function shortcode($atts)
	{

		$attrs = shortcode_atts( array(
		'id' => 0,
		'max_width'=>0,
		), $atts );
		ob_start();
		if($attrs['id']!=0){
			$videolab360_id=(int)$attrs['id'];
        	$db_actions=new videolab360_records_module();
			if($videolab360_id!=0) $results=$db_actions->get_where(array('id'=>$videolab360_id));		

			if(isset($results) && !empty($results)){
				
				$record=$results[0];
				$folder_name=$record['folder_name'];
				$files=videolab360_photos_directory_handler::get_folder_content_list($folder_name);
				
				if(!empty($files)){

					$attributes=videolab360_get_primary_atributes($files);
					$attributes=videolab360_add_custom_attributes($attributes,$record['attributes']);
					$style='';
					if($attrs['max_width']!=0){
						$style.=' max-width:'.$attrs['max_width'];
					}
					if($style!=''){
						$attributes[]='style="'.$style.'"';
					}
					include VLAB360_DIR.'/views/parts/image_360_short.php';
				}
				else _e('No files found.',VLAB360_LANG); 

				
			}
			else _e('No files found.',VLAB360_LANG); 
		}
		$content= ob_get_clean();

		return $content;
		
	}
}
//-----------------------------------------initiation ----------------------------
if(class_exists('videolab360_class')){
		new videolab360_class();
		register_uninstall_hook(__FILE__, array('videolab360_class', 'uninstall' ));
}

