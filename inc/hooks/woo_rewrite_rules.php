<?php

function videolab360Admin_user_id(){
    global $wpdb;
    $wp_user_search = $wpdb->get_results("SELECT ID, display_name FROM $wpdb->users ORDER BY ID");

    $admin_id=0;
    foreach ( $wp_user_search as $userid ) {
        $curID = $userid->ID;
        $curuser = get_userdata($curID);
        $user_level = $curuser->user_level;
        if($user_level >= 8){
           $admin_id= $curID;
           break;
        }
    }
    return $admin_id;
}
add_action( 'init', 'videolab360_rewrite_rules' );
function videolab360_rewrite_rules()
{
	$args = array(
	    'post_type'  => 'page', 
	    'meta_query' => array( 
	        array(
	            'key'   => '_wp_page_template', 
	            'value' => 'embedphotos360.php'
	        )
	    )
	);
	$preview_post=get_posts($args);
	if(empty($preview_post)){
			$post = array();
			$post['post_status']   = 'publish';
			$post['post_type']     = 'page'; 
			$post['post_name']     = 'photo360'; 
			$post['post_title']    = __('Video Lab 360', VLAB360_LANG);
			$post['post_content']  = '';
			$post['post_excerpt']  = '';
			$post['post_author']   = videolab360Admin_user_id();


			$post_id = wp_insert_post( $post );
			update_post_meta( $post_id, '_wp_page_template', 'embedphotos360.php');
	}
	$preview_post=get_posts($args);
	$post_id=$preview_post[0]->ID;

    add_rewrite_rule(
        '^'.$preview_post[0]->post_name.'/([^/]*)/?',
        'index.php?page_id='.$post_id.'&videolab360_id=$matches[1]',
       'top'
    );	
	


	

}
add_filter('query_vars', 'videolab360_menu_query_var' );

function videolab360_menu_query_var($vars) {
	$vars[] = 'videolab360_id';
	return $vars;
}


?>