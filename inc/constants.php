<?php
function VLAB360_ADMIN_options_fields(){
	$options=array();
	
	//group - main options
	
	$options[]=array(
		'name'=>'main',
		'label'=>__('Main options', VLAB360_LANG),
		'type'=>'group'
		
    );
    //--fields
	$options[]=array(
		'name'=>VLAB360_PREFIX.'records_per_page',
		'label'=>__('How many records show per page', VLAB360_LANG),
		'type'=>'number',
		'default'=>20,
		'group'=>'main'
    );
	$options[]=array(
		'name'=>VLAB360_PREFIX.'categories_per_page',
		'label'=>__('How many categories show per page', VLAB360_LANG),
		'type'=>'number',
		'default'=>20,
		'group'=>'main'
    ); 
    //group -- E-mail automatic notifiacations
    
	$options[]=array(
		'name'=>'notifiacations',
		'label'=>__('E-mail automatic notifiacations', VLAB360_LANG),
		'type'=>'group'
		
    );
	$options[]=array(
		'name'=>VLAB360_PREFIX.'admin_email',
		'label'=>__('E-mail address to which letters will be sent to the administrator', VLAB360_LANG),
		'type'=>'text',
		'default'=>get_option('admin_email'),
		'group'=>'notifiacations'
		
    );
    //--fields
	$options[]=array(
		'name'=>VLAB360_PREFIX.'report_days_before',
		'label'=>__('Specify the number of days until expiration (will be used for emails)', VLAB360_LANG),
		'type'=>'number',
		'default'=>3,
		'group'=>'notifiacations'
		
    );


	$options[]=array(
		'name'=>VLAB360_PREFIX.'email_admin_days_before_enabled',
		'label'=>__('Send e-mail a letter to the administrator when the specified number of days remain before the expiration date', VLAB360_LANG),
		'type'=>'checkbox',
		'default'=>1,
		'group'=>'notifiacations'
		
    );

	$options[]=array(
		'name'=>VLAB360_PREFIX.'email_admin_after_remove_enabled',
		'label'=>__('Send email to administrator, when files storing deadline expires', VLAB360_LANG),
		'type'=>'checkbox',
		'default'=>1,
		'group'=>'notifiacations'
		
    );
    //templates

	$options[]=array(
		'name'=>VLAB360_PREFIX.'email_admin_days_before_content',
		'label'=>__('The content of the email when the message is sent to the administrator, when the specified number of days remain before the expiration date', VLAB360_LANG),
		'type'=>'textarea',
		'default'=>__("We would like to inform you that in {days} days the storage term for the record {record} files will expire!",VLAB360_LANG),
		'tips'=>sprintf(__('Keywords you can use in content: %s - %s, %s - %s', VLAB360_LANG), '{days}',__('day count until expire date.', VLAB360_LANG), '{record}',__('record information', VLAB360_LANG)),
		'group'=>'notifiacations'
    );

	$options[]=array(
		'name'=>VLAB360_PREFIX.'email_admin_after_remove_content',
		'label'=>__('The content of the email when the message is sent to the administrator, when files storing deadline expires', VLAB360_LANG),
		'type'=>'textarea',
		'default'=>__("We would like to inform you that record {record} files on the server have expired and have been removed!",VLAB360_LANG),
		'tips'=>sprintf(__('Keywords you can use in content: %s - %s, %s - %s', VLAB360_LANG), '{days}',__('day count until expire date.', VLAB360_LANG), '{record}',__('record information', VLAB360_LANG)),
		'group'=>'notifiacations'
    );
	return $options;
}

//output_admin_options_field_by_type

function videolab360_output_admin_options_field_by_type($key,$field){
	$value = get_option($key);
	$value=($value!='')?$value:$field['default'];
	$type=$field['type'];
	switch ($type) {
	    case 'number':
	    case 'text':
	        ?><input type="<?= $type;?>" name="<?= $key;?>" value="<?= $value;?>" /><?php
	        break;
	    case 'select':
	    	if(isset($field['options']) && !empty($field['options'])):
	       ?>
	       <select  name="<?= $key;?>">
	       <?php 
	       		foreach($field['options'] as $option_val=>$option_label){
					?><option value="<?= $option_val;?>"<?php echo ($value==$option_val)?' selected':'';?>><?=$option_label;?></option><?php
				}
	       ?>
	       </select>
	       <?php
	        endif;
	        break;
		default:
			echo '';
	}
}

//admin records labels
function videolab360_admmin_records_columns(){
	return array(
        'id'         => __('ID',VLAB360_LANG),
        'label'=> __('Label',VLAB360_LANG),
        'category'=> __('Category',VLAB360_LANG),
        'user_id'=> __('Author',VLAB360_LANG),
        'shortcode'  => __('Using',VLAB360_LANG),
	    'expires'=> __('Expires',VLAB360_LANG),
        'updated'       => __('Updated',VLAB360_LANG),
        'created'       => __('Created',VLAB360_LANG),
        'colactions'       => __('Actions',VLAB360_LANG)
        
    );
}
//admin categories columns
function videolab_admin_categories_columns(){
	return array(
        'id'         => __('ID',VLAB360_LANG),
        'name'=> __('Category name',VLAB360_LANG),
        'colactions'       => __('Actions',VLAB360_LANG)

        
    );
}
//admin logs collumns
function videolab360_admin_logs_columns(){
	return array(
        'id'         => __('Record',VLAB360_LANG),
        'type'       => __('Comment author',VLAB360_LANG), 
        'comment'       => __('Comment',VLAB360_LANG),
        'created'       => __('Created',VLAB360_LANG),
    );
}
//360 photo options

function videolab360_get_360photo_options(){
	$options=array();
	$options[]=array(
		'type'=>'checkbox',
		'key'=>'pointer_zoom_enabled',
		'label'=>__('Pointer zoom enabled'),
		'attribute'=>'data-pointer-zoom',
		'attribute_value_target'=>'zoom_scale',
		'static_value'=>'true',
		'class'=>''
	);
	$options[]=array(
		'type'=>'select',
		'options'=>array('1.5','2','2.5','3','3.5','4'),
		'option_labels'=>false,
		'key'=>'zoom_scale',
		'label'=>__('Zoom scale'),
		'attribute'=>'',
		'if_checked'=>'pointer_zoom_enabled',
		'attribute_value_target'=>'',
		'class'=>'inv'
	);
	$options[]=array(
		'type'=>'number',
		'key'=>'drag_speed',
		'label'=>__('Drag speed(milliseconds)'),
		'attribute'=>'data-drag-speed',
		'attribute_value_target'=>'',
		'default'=>120,
		'class'=>''
	);
	$options[]=array(
		'type'=>'number',
		'key'=>'autoplay_speed',
		'label'=>__('Auto play speed(milliseconds)'),
		'attribute'=>'data-speed',
		'attribute_value_target'=>'',
		'default'=>120,
		'class'=>'inv autoplay_elements'
	);
	$options[]=array(
		'type'=>'checkbox',
		'key'=>'autoplay_enabled',
		'label'=>__('Autoplay','any'),
		'attribute'=>'data-autoplay',
		'attribute_value_target'=>'',
		'static_value'=>'true',
		'element_show'=>'.autoplay_elements',
		'class'=>''
	);
	$options[]=array(
		'type'=>'checkbox',
		'key'=>'autoplay_reversed',
		'label'=>__('Autoplay reversed'),
		'attribute'=>'data-autoplay-reverse',
		'attribute_value_target'=>'',
		'static_value'=>'true',
		'class'=>'inv autoplay_elements'
	);
	$options[]=array(
		'type'=>'checkbox',
		'key'=>'play_once',
		'label'=>__('Play once'),
		'attribute'=>'data-play-once',
		'attribute_value_target'=>'',
		'static_value'=>'true',
		'class'=>'inv autoplay_elements'
	);

	$options[]=array(
		'type'=>'checkbox',
		'key'=>'full_screen',
		'label'=>__('Full screen'),
		'attribute'=>'data-fullscreen',
		'attribute_value_target'=>'',
		'static_value'=>'true',
		'class'=>''
	);
	$options[]=array(
		'type'=>'checkbox',
		'key'=>'disable_drag',
		'label'=>__('Disable drag'),
		'attribute'=>'disable-drag',
		'attribute_value_target'=>'',
		'static_value'=>'true',
		'class'=>''
	);
	$options[]=array(
		'type'=>'checkbox',
		'key'=>'drag_reverse',
		'label'=>__('Drag reverse'),
		'attribute'=>'data-spin-reverse',
		'attribute_value_target'=>'',
		'static_value'=>'true',
		'class'=>''
	);
	$options[]=array(
		'type'=>'checkbox',
		'key'=>'hide_logo',
		'label'=>__('Hide 360 logo'),
		'attribute'=>'hide-360-logo',
		'attribute_value_target'=>'',
		'static_value'=>'true',
		'class'=>''
	);
	$options[]=array(
		'type'=>'checkbox',
		'key'=>'keys_controll',
		'label'=>__('Control by keyboard'),
		'attribute'=>'data-keys',
		'attribute_value_target'=>'',
		'static_value'=>'true',
		'class'=>''
	);
	/*
	$options[]=array(
		'type'=>'checkbox',
		'key'=>'keys_controll_reverse',
		'label'=>__('Control by keyboard reverse'),
		'attribute'=>'data-control-reverse',
		'attribute_value_target'=>'',
		'static_value'=>'true',
		'class'=>''
	);
	*/
	$options[]=array(
		'type'=>'checkbox',
		'key'=>'stop_at_edges',
		'label'=>__('Stop at edges'),
		'attribute'=>'stop-at-edges',
		'attribute_value_target'=>'',
		'static_value'=>'true',
		'class'=>''
	);
	$options[]=array(
		'type'=>'checkbox',
		'key'=>'bottom_circle',
		'label'=>__('Bottom circle'),
		'attribute'=>'data-bottom-circle',
		'static_value'=>'true',
		'attribute_value_target'=>'',
		'class'=>''
	);

	$options[]=array(
		'type'=>'checkbox',
		'key'=>'magnifyer',
		'label'=>__('Magnifyer'),
		'attribute'=>'data-magnifier',
		'attribute_value_target'=>'',
		'static_value'=>2,
		'class'=>''
	);

	return $options;
}

//default attributes
function videolab360_get_default_attributes($serialized=true){
	$default_parameters=get_option('videolab360_default_parameters');
	$default_parameters= (!$default_parameters || $default_parameters=='')?array('attrs'=>array('data-drag-speed'=>'120'),'fields'=>array('drag_speed'=>'120')):$default_parameters;
	if($serialized) return maybe_serialize($default_parameters);
	else return $default_parameters;
}
?>