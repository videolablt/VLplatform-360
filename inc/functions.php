<?php
//datetime 
function videolab360_get_datetime($date='',$format='Y-m-d H:i:s',$add=''){
	if($date!='') $datetime = new DateTime($date);
	else $datetime = new DateTime();
	$tzone = new DateTimeZone('Europe/Vilnius');
	$datetime->setTimezone($tzone); 
	if($add!=''){
		$datetime = $datetime->modify( $add );
	}
    return $datetime->format($format);
}
//days difference
function videolab360_get_days_difference($today,$later){
	$datetime1 = new DateTime($today);

	$datetime2 = new DateTime($later);

	$difference = $datetime1->diff($datetime2);

	return ((int)$difference->d);

}
//log value by type 
function videolab360_get_label_by_log_field($type,$values){
	$val=$values[$type];
	if($type=='type'){
		if($val=='report') return __('System',VLAB360_LANG);
		else return __('Administrator',VLAB360_LANG);
	}
	else return $val;

}
//remove invalid images
function videolab360_remove_invalid_images($files){
	$result=array();
	foreach($files as $file){
		list($width, $height, $type, $attr) = getimagesize($file);
		if($width && $height) $result[]=$file;	
	}
	return $result;
}

//check file 

function videolab360_valid_image($file){

	list($width, $height, $type, $attr) = getimagesize($file);
	if($width && $height) return $file;	
	else return false;
	

}

function videolab360_item_thumbnail_attrs($record,$file=''){
	$class="it-inner";

	$is_archyve=($file=='')?false : (videolab360_get_file_extension($file)=='zip');
	$class.=($is_archyve)?' archyve' : ' image_360';
	$attrs='';
	if($file==''){
		 $thumbnail='';
	}
	else $thumbnail=$file;

	$class.=($thumbnail=='' || $is_archyve)?' no-thumb':'';
	if($thumbnail!='' && !$is_archyve){
		$attrs=" style=\"background-image:url('".$thumbnail."');\" title=\"".videolab360_filename_only($file)."\"";
	}
	$attrs.=' data-file="'.videolab360_filename_only($file).'"';

	
	echo 'class="'.$class.'"'.$attrs;
}
//info for js
function videolab360_output_file_info_for_js($files){
	foreach($files as $key=>$file){
		list($width, $height, $type, $attr) = getimagesize($file);
		if($key>0) echo ',';
		echo '{src:"'.$file.'", w:'.$width.',h:'.$height.'}';
	} 
}
//meta 

function videolab360_get_meta($post_id,$field,$alt='')
{
	$opt=get_post_meta( $post_id, $field, true );
	return (! empty($opt))? $opt: $alt;
}


//orders 
function videolab360_get_table_orders(){
	$result=array();
	$db_actions=new videolab360_records_module();
	$orders=$db_actions->get_table_orders();

	return $orders;
}

//output orders 
function videolab360_output_orders_options(){
	$args = array(
	    'status' => array('wc-processing', 'wc-on-hold','wc-pending','wc-completed'),
	);
	$field_name='order_id';
	$orders=wc_get_orders($args);
	if(!empty($orders)){
			?>
			<div class="option" data-value="0">
				<div class="check"><?php videolab360_output_icon('check');?></div>
				<div class="text"><?php _e('Not link to any order/user',VLAB360_LANG);?></div>
			</div><?php
		foreach($orders as $order){
			?>
			<div class="option<?php videolab360_selected($field_name,$order->ID);?>" data-value="<?php echo $order->ID;?>">
				<div class="check"><?php videolab360_output_icon('check');?></div>
				<div class="text"><?php echo '#'.$order->ID.' '.$order->get_billing_first_name().' ('.videolab360_get_datetime($order->get_date_created()).')';?></div>
			</div><?php
		}

	}
}



//if selected
function videolab360_selected($key,$val){
	echo (isset($_GET[$key]) && $_GET[$key]!='' && $_GET[$key]==$val)?' selected':'';
}




//output icon 
function videolab360_output_icon($icon,$title='',$echo=true){
	if(!$echo) return Woostify_Icon::fetch_svg_icon( $icon,$echo,$title );
	else Woostify_Icon::fetch_svg_icon( $icon,$echo,$title );
}





//get file url 
function videolab360_get_single_file_url($record){

	$url=VLAB360_UPLOADS_FOLDER_URL.$record['folder_name'].'/'.$record['file_name'];
	return $url;
}

//preview url 

function videolab360_get_file_embed_url($id){
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
	//return esc_url( wc_get_account_endpoint_url( $endpoint ).'?id='.$id );
	return esc_url( get_site_url().'/'.$preview_post[0]->post_name.'/'.$id.'/' );
}



function videolab360_get_version(){
	return '1.0.0'.date("Y_m_h_i_s");
}



//current page url 
function videolab360_current_page_url(){
	global $wp;
	$current_url = home_url(add_query_arg(array(), $wp->request));
	return $current_url;
}




//last parrt of file path 
function videolab360_filename_only($file){
	$fname_parts=explode("/",$file);
	return $fname_parts[count($fname_parts)-1];
}

//file extension 

function videolab360_get_file_extension($file){
	$fname_parts=explode(".",$file);
	return $fname_parts[count($fname_parts)-1];
}

//file name 

function videolab360_get_file_name($col_data){
	$file_key=$col_data['filename'];
	$filename=((isset($_FILES[$file_key]["name"]) && $_FILES[$file_key]["name"]!=''))?$_FILES[$file_key]["name"]:'';
	$fname_parts=explode(".",$filename);
	return $fname_parts[0];
}

//file extension 

function videolab360_output_photo_360_options($attrs='',$with_title=true){
	$attributes=($attrs!='')?maybe_unserialize($attrs):'';
	//echo var_export($attributes,true);
	$field_data=(isset($attributes['fields']))?$attributes['fields'] : array();
	$photo_360_options=videolab360_get_360photo_options();
	if($with_title):?><p class="lg"><?php _e('Configure 360 photo parameters',VLAB360_LANG);?></p><?php endif;
	foreach($photo_360_options as $option){
		$fild_data=(isset($field_data[$option['key']]))?$field_data[$option['key']] : '';
		videolab360_output_photo_360_option_by_type($option,$fild_data);
	}

	?><a href="#" class="button button-primary update_options"><?php videolab360_output_icon('save');_e('Update options',VLAB360_LANG);?></a><?php
}

//output_photo_360_option_by_type

function videolab360_output_photo_360_option_by_type($option,$val=''){

	$type=$option['type'];
	$default_value=(isset($option['default']))?$option['default']:'';
	$value=($val!='')?$val:$default_value;
	$key=$option['key'];
	$class=' '.$type.((isset($option['class']))?' '.$option['class']:'');

	?><div class="item<?= $class;?>"><?php
	$has_attr=(isset($option['attribute']) && $option['attribute']!='');
	$attrs=(isset($option['attribute_value_target']) && $option['attribute_value_target']!='')?' data-target="#'.$option['attribute_value_target'].'"':'';
	$attrs.=$has_attr ? ' data-attribute="'.$option['attribute'].'"':'';
	$attrs.=(isset($option['static_value'])) ? ' data-static_value="'.$option['static_value'].'"':'';
	$attrs.=(isset($option['element_show'])) ? ' data-element_show="'.$option['element_show'].'"':'';
	switch ($type) {
	    case 'number':
	    case 'text':

	    	?><label for="<?= $key;?>"><?=$option['label'] ?></label><?php
	        ?><input type="<?= $type;?>" name="<?= $key;?>" id="<?= $key;?>" value="<?= $value;?>" class="attr-input number_text"<?php echo $attrs;?> /><?php
	        break;
	    case 'checkbox':
	    	$checked=($value)?' checked':'';
	    	$value=1;

	    	?><label for="<?= $key;?>"><?=$option['label'] ?></label><?php
	        ?><input<?=$checked ?> class="attr-input <?=$type;?>" type="<?= $type;?>" name="<?= $key;?>" id="<?= $key;?>" value="<?= $value;?>"<?php echo $attrs;?> /><?php
	        break;
	    case 'select':
	    	if(isset($option['options']) && !empty($option['options'])):

		    	$attrs.=(isset($option['if_checked']) && $option['if_checked']!='') ? ' data-ifchecked="#'.$option['if_checked'].'"':'';
	       ?>
	       <label for="<?= $key;?>"><?=$option['label'] ?></label>
	       <select class="attr-input <?=$type;?>" name="<?= $key;?>" id="<?= $key;?>"<?php echo $attrs;?>>
	       <?php 
	       if(isset($option['options_labels']) && $option['options_labels']){
	       		foreach($option['options'] as $option_val=>$option_label){
					?><option value="<?= $option_val;?>"<?php echo ($value==$option_val)?' selected':'';?>><?=$option_label;?></option><?php
				}
		   }
		   else{
	       		foreach($option['options'] as $option_val){
					?><option value="<?= $option_val;?>"<?php echo ($value==$option_val)?' selected':'';?>><?=$option_val;?></option><?php
				}
		   }

	       ?>
	       </select>
	       <?php
	        endif;
	        break;
		default:
			echo '';
	}
	?></div><?php
}

//aditional attributes

function videolab360_add_custom_attributes($attrs,$db_attrs){
	$attributes=$attrs;
	$saved_attributes=($db_attrs!='')?maybe_unserialize($db_attrs):'';
	$field_data=(isset($saved_attributes['attrs']))?$saved_attributes['attrs'] : array();
	if(!empty($field_data)){
		foreach($field_data as $key=>$val) $attributes[]=$key.'="'.$val.'"';
	}
	return $attributes;
}

//add default 

function videolab360_add_default_attributes($attrs){
	$attributes=$attrs;
	$default_attributes=videolab360_get_default_attributes(false);
	$field_data=(isset($default_attributes['attrs']))?$default_attributes['attrs'] : array();
	if(!empty($field_data)){
		foreach($field_data as $key=>$val) $attributes[]=$key.'="'.$val.'"';
	}
	return $attributes;
}

//primary attrs

function videolab360_get_primary_atributes($files){
	$files_handler=new videolab360_files_handler($files);
	$y_axis_enabled=$files_handler->y_axis_exist($files);
	$filename=$files_handler->get_filename('x');
	$files_count=$files_handler->get_files_count('x');
	$attributes=array();
	$attributes[]='data-filename-x="'.$filename.'"';
	$attributes[]='data-amount-x="'.$files_count.'"';
	//y axis
	if($y_axis_enabled){
		$filename=$files_handler->get_filename('y');
		$files_count=$files_handler->get_files_count('y');
		$attributes[]='data-filename-y="'.$filename.'"';//nike-y-{index}.jpg
		$attributes[]='data-amount-y="'.$files_count.'"';
		$attributes[]='data-autoplay-behavior="spin-xy"';
	}
	
	return $attributes;
}
//users 
function videolab360_user_select(){
	$users=videolab360_get_table_users();
	$user_id=(isset($_GET['user_id']) && $_GET['user_id']!='')? (int)$_GET['user_id']:'';
	?><select id="user_id" class="input" name="user_id" autocomplete="off"><?php
		?><option value=""><?php _e('Choose user',VLAB360_LANG)?></option><?php

		if(!empty($users)){
			foreach($users as $key=>$user){
				?><option<?php echo ($user_id==$key)?' selected':'';?> value="<?php echo $key?>"><?php echo $user;?></option><?php
			}
		}
	?></select><?php
}
function videolab360_get_table_users(){
	$result=array();
	$db_actions=new videolab360_records_module();
	$users=$db_actions->get_table_users();
	if(!empty($users)){
		foreach($users as $user){
			$user_info = get_userdata($user['user_id']);
			$result[$user['user_id']]=($user_info)?$user_info->user_login:'-';
		}
	}
	return $result;
}
//categories 
function videolab360_categories_select($cat_id=0,$show_empty_option=false,$hide_empty=false){
	$db_actions=new videolab360_categories_module();
	if($cat_id==0){
		$cat_id=(isset($_GET['category']) && $_GET['category']!='')? (int)$_GET['category']:$cat_id;
	}

	$results=$db_actions->get_table_data(array('id'=>'ASC'));
	?><select id="category" class="input" data-attr="category" name="category" autocomplete="off"><?php
		if($show_empty_option){
			?><option value=""><?php _e('Choose category',VLAB360_LANG)?></option><?php
		}
		if(!empty($results)){
			videolab360_categories_select_options($results,$cat_id,$hide_empty);
		}
	?></select><?php
}
function videolab360_categories_select_options($results=array(),$cat_id=0,$hide_empty=false){
	if(empty($results)){
		$db_actions=new videolab360_categories_module();
		$results=$db_actions->get_table_data(array('id'=>'ASC'));
	}
	if($hide_empty){
		$db_actions_records=new videolab360_records_module();
		$using_cats=$db_actions_records->get_by_field_unique('category');
	}
	if(!empty($results)){
		foreach($results as $category){
			if($hide_empty && isset($using_cats)){
				if(in_array($category['id'],$using_cats)){
					?><option<?php echo ($cat_id==$category['id'])?' selected':'';?> value="<?php echo $category['id'];?>"><?php echo $category['name'];?></option><?php
				}
			}
			else{
				?><option<?php echo ($cat_id==$category['id'])?' selected':'';?> value="<?php echo $category['id'];?>"><?php echo $category['name'];?></option><?php
			}
			
		}
	}

}
//create new 
function videolab360_create_new_category_element(){
	?><br /><a href="#" class="create-new-category"><?php _e('Create new category',VLAB360_LANG)?></a><?php
	?><div id="new_cat_wrapper" class="add-category" style="display:none">
		<input type="text" id="new_category" placeholder="<?php _e('New category name',VLAB360_LANG)?>" autocomplete="off" /><div id="add_category" class="btn"><?php videolab360_output_icon('plus');echo '<span>'.__('Add',VLAB360_LANG).'</span>'; ?></div>
	</div><?php
}
//send mails 
function videolab360_send_from_email(){
	$from_mail = site_url();
	$from_mail = preg_replace('#^https?://#i', '', $from_mail);
	$from_mail = preg_replace('#^http?://#i', '', $from_mail);
	$pos = strrpos($from_mail, "/");
	if($pos!==false){
		$parts=explode("/",$from_mail);
		$from_mail=$parts[0];
	}
	
	$from_mail=get_bloginfo( 'name' ).'<info@'.$from_mail.'>';
	return $from_mail;
}
//send mail 

function videolab360_send_mail($event='expired',$data){
	$admin_email=get_option(VLAB360_PREFIX.'admin_email');
	$admin_email=($admin_email=='')?get_option('admin_email'):$admin_email;

	$from_mail=videolab360_send_from_email();
	$email_admin_days_before_content = get_option(VLAB360_PREFIX.'email_admin_days_before_content');
	$email_admin_after_remove_content = get_option(VLAB360_PREFIX.'email_admin_after_remove_content');
	$log_report_days_before = get_option(VLAB360_PREFIX.'log_report_days_before');
	$subject = "Nauja žinutė";
	$today=videolab360_get_datetime('','Y-m-d');
	if(isset($data['expires'])) $expires=videolab360_get_datetime($data['expires'],'Y-m-d');
	if(isset($expires)) $days_difference=videolab360_get_days_difference($today,$expires);
	else $days_difference=$log_report_days_before;
	
	$to=($admin_email && $admin_email!='')?$admin_email:'';
	if($event==='expired'){
		$subject=__('Administrator, record {record} expired and was removed.', VLAB360_LANG);
		$content=$email_admin_after_remove_content;
	}
	else{
		$subject=__('Administrator, record {record} will expire after {days} days.', VLAB360_LANG);
		$content=$email_admin_days_before_content;
		
	}
	



	
	if(isset($content) && $content!='' && isset($to) && $to!=''){
		$keywords = array("{days}", "{record}");
		$replacement   = array($days_difference, '#'.$data['record_id'].$data['label']);
		$subject = str_replace($keywords, $replacement, $subject);
		$content = str_replace($keywords, $replacement, $content);
		$headers = array('Content-Type: text/html; charset=UTF-8','From: '.$from_mail);
		$body=$content.'<br><hr />'.__('Letter was generated automatically by ', VLAB360_LANG).get_bloginfo( 'name' );
		
		wp_mail( $to, $subject, $body, $headers );
		//$sent='yes';
	}
}

//styled checkmark 

function videolab360_output_styled_success_checkmark($new=false){
	?>
	<div class="styled_success_mark">
		<div class="inner">
			<div class="element">
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
				  <circle class="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
				  <polyline class="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
				</svg>
				<p class="success success_message"><?php _e('Record was updated successfully!',VLAB360_LANG);?></p>
				<?php if($new):?>
					<span class="title"><?php _e('List of files',VLAB360_LANG);?>:</span>
					<div id="files_output"></div>
					<div class="centered"><a href="<?php echo admin_url( 'admin.php?page='.WORDF_ADMIN_PAGE_SLUG);?>" class="button button-primary photos360-go-edit" style="display:none;"><?php videolab360_output_icon('edit');_e('Edit last record',VLAB360_LANG);?></a></div>
				<?php endif;?>
			</div>
		</div>

	</div>
	<?php
}

function videolab360_get_records(){
		$db_actions=new videolab360_records_module();
		$results=$db_actions->get_table_data();
		$shortcodes=array();
		if(!empty($results)) {
			foreach($results as $result){
				$id=$result['id'];
				$shortcodes[$id]=$result['label'];
			}
		}
		return $shortcodes;
}
function videolab360_get_singe($id){
	$db_actions=new videolab360_records_module();
	if($videolab360_id!=0) $results=$db_actions->get_where(array('id'=>$id));		
	if(isset($results) && !empty($results)){
		return $results[0]['label'];
	}
	return $id;
}


?>