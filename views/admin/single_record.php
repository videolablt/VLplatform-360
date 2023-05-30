<?php
$folder_name=$record['folder_name'];
$files=videolab360_photos_directory_handler::get_folder_content_list($folder_name);
$clipboard_icons=videolab360_output_icon('files',__('Copy to clipboard', VLAB360_LANG),false);
?>
<div id="videolab360_admin_preview" class="photos360-wrapper">
	<?php videolab360_output_styled_success_checkmark();?>
	<h1><?php _e('Edit 360 photo',VLAB360_LANG);?></h1>
	<div class="irow ltop">
		<a href="<?php echo admin_url( 'admin.php?page='.VLAB360_ADMIN_PAGE_SLUG); ?>" class="button button-primary back"><?php videolab360_output_icon('angle-left');_e('Back to list',VLAB360_LANG);?></a>
	</div>
	<div id="videolab360_form">
		<?php
		$folder_name=$record['folder_name'];
		$files=videolab360_photos_directory_handler::get_folder_content_list($folder_name);
		$files_size=videolab360_photos_directory_handler::get_dir_size($folder_name);
		
		if(!empty($files)){
			$attributes=videolab360_get_primary_atributes($files);
			$attributes=videolab360_add_custom_attributes($attributes,$record['attributes']);

			include VLAB360_DIR.'/views/admin/parts/image_360.php';
		}
		else _e('No 360 photos was found.',VLAB360_LANG); 


?>
<br />
<hr />
		<div class="folder_space" title="<?php _e('Folder contents size',VLAB360_LANG);?>"><?php videolab360_output_icon('harddrives'); echo ' '.$files_size;?></div>
		<div class="irow md using-wrap">
			<div class="coll">
				<label><?php _e('Preview url:',VLAB360_LANG);?></label>
				<textarea class="content"><?php echo videolab360_get_file_embed_url($folder_name);?></textarea>
				<?php 
				?><a href="<?php echo videolab360_get_file_embed_url($folder_name);?>" target="_blank"><?php echo videolab360_get_file_embed_url($folder_name);?></a>
				<?=$clipboard_icons; ?><span class="msg" style="display:none"><?=__('Copyed!', VLAB360_LANG); ?></span>
			</div>
			<div class="coll">
				<label><?php _e('Shortcode',VLAB360_LANG);?></label>
				<textarea class="content">[<?php echo VLAB360_SHORTCODE;?> id="<?=$record['id']; ?>"]</textarea>[<?=VLAB360_SHORTCODE; ?> id="<?=$record['id']; ?>"]<?=$clipboard_icons; ?><span class="msg" style="display:none"><?=__('Copyed!', VLAB360_LANG); ?></span>



			</div>
		</div>
<hr />
		<h1><?php _e('Edit record data',VLAB360_LANG);?></h1>

		<div class="irow">
			<label><?php _e('Label',VLAB360_LANG);?></label>
			<input type="text" id="record_label" data-attr="label" class="input" value="<?php echo $record['label'];?>" autocomplete="off" />
		</div>
		<div id="enable_expiration_toogler" class="irow wcheckbox">
			<label class="title"><?php _e('Remove the post and its associated files after the expiration date',VLAB360_LANG);?></label>
			<div class="styled-toogler"><input type="checkbox" id="enable_expiration" autocomplete="off" <?php echo ($record['expire_enabled'])?' checked':'';?> /><label for="enable_expiration"></label></div>
		</div>
		<div id="expiration_date_wrapper" class="irow expires"<?php echo (!$record['expire_enabled'])?'style="display:none;"':'';?>>
			<label><?php _e('Expires date',VLAB360_LANG);?></label>
			<input type="text" id="record_expires" class="date-picker req-field input" value="<?php echo videolab360_get_datetime($record['expires'],'Y-m-d')?>" placeholder="" data-default="<?php echo videolab360_get_datetime('','Y-m-d','+30 day');?>" data-attr="expires"/>	
		</div>
		<div class="irow categories">
			<label><?php _e('Category',VLAB360_LANG);?></label>
			<?php videolab360_categories_select($record['category']);?>
			<?php videolab360_create_new_category_element();?>
		</div>

		<div class="photos360-row-wrapper sm">
			<div class="response_message"></div>
			<a href="#" class="button button-primary update"><?php videolab360_output_icon('save');_e('Update',VLAB360_LANG);?></a>
		</div>
	</div>
</div>
<script>
jQuery(function($){
      $.datepicker.regional['lt'] = {
      			clearText: 'Išvalyti', clearStatus: '',
                closeText: 'UŽdaryti', closeStatus: '',
                prevText: '&lt;Atgal',  prevStatus: '',
                nextText: 'Pirmyn&gt;', nextStatus: '',
                currentText: "&#352;iandien", currentStatus: '',
                monthNames: ['Sausis','Vasaris','Kovas','Balandis','Gegu&#382;&#279;','Bir&#382;elis','Liepa','Rugpj&#363;tis','Rugs&#279;jis','Spalis','Lapkritis','Gruodis'],
                monthNamesShort: ['Sau','Vas','Kov','Bal','Geg','Bir',
                'Lie','Rugp','Rugs','Spa','Lap','Gru'],
                monthStatus: '', yearStatus: '',
                weekHeader: '', weekStatus: '',
                dayNames: ['sekmadienis','pirmadienis','antradienis','tre&#269;iadienis','ketvirtadienis','penktadienis','&#353;e&#353;tadienis'],
                dayNamesShort: ['sek','pir','ant','tre','ket','pen','&#353;e&#353;'],
                dayNamesMin: ['Sk','Pr','An','Tr','Kt','Pn','&#352;t'],
                dayStatus: 'DD', dateStatus: 'D, M d',
                dateFormat: 'yy-mm-dd', firstDay: 1,
				timeOnlyTitle: 'Pasirinkite laiką',
				timeText: 'Laikas',
				hourText: 'Valanda',
				minuteText: 'Minutė',
				secondText: 'Sekundė',
				timezoneText: 'Laiko juosta',
                initStatus: '', isRTL: false};
        $.datepicker.setDefaults($.datepicker.regional['lt']);
});
(function($){
	var output_dir="<?php echo $folder_name;?>";
	var paramaters_updated=false;
	var expire_enabled_value=0;
	var attrs={};
	
	function videolab360_is_future_date(date){
		var today = new Date().getTime();
		var entered = new Date(date).getTime();
		return (today < entered);
	}
	
	
	function add360_view_update() {
		const viewId='image360';
		const el=$('#'+viewId);
		el.removeAttr('class');
		el.html('');
		el.addClass('cloudimage-360');


		var obj={};
		$( '#videolab360_admin_preview .attr-input' ).each(function() {
			var th=$(this);
			var attribute_name=th.attr('data-attribute');
			var target=th.attr('data-target');
			var static_value=th.attr('data-static_value');
			var val;
			if(attribute_name && attribute_name!=''){
				attribute_name=attribute_name.replace(/"|'/g, '');
				if(target && $(target).length) val=$(target).val()
				else val=(static_value)?static_value : attribute_name;

				if(th.hasClass('checkbox')){
					if(th.is( ":checked" )){
						el.attr(attribute_name,val);
					}
					else{
						el.removeAttr(attribute_name);
					}
				}
				else{
					val=th.val();
					if(!th.parent().hasClass('inv')){
						el.attr(attribute_name,val);
					}
					else{
						el.removeAttr(attribute_name);
						
					}
				}
			}
		});

		window.CI360.add(viewId);
	}
	
	//get parameters 
	
	function add360_get_parameters() {

		var obj={};
		var fields_data={};
		var pr_attrs={};
		$( '#videolab360_admin_preview .attr-input' ).each(function() {
			var th=$(this);
			var attribute_name=th.attr('data-attribute');
			var target=th.attr('data-target');
			var static_value=th.attr('data-static_value');
			var val;
			var field_val=th.val();
			var checked=false;
			if(th.hasClass('checkbox')){
				checked=th.is( ":checked" );
				field_val=(checked)? 1 : 0;
			}

			fields_data[th.attr('id')]=field_val;

			if(attribute_name && attribute_name!=''){
				attribute_name=attribute_name.replace(/"|'/g, '');
				if(target && $(target).length) val=$(target).val()
				else val=(static_value)?static_value : attribute_name;

				if(th.hasClass('checkbox')){
					if(checked && !th.parent().hasClass('inv')){
						pr_attrs[attribute_name]=val;
					}
				}
				else{
					val=th.val();
					if(!th.parent().hasClass('inv')){
						pr_attrs[attribute_name]=val;
					}
				}
			}
		});

		return {'attrs':pr_attrs,'fields':fields_data};
	}
	
	//update hidden
	
	function add360_update_hidden(){
		$( '#videolab360_admin_preview .attr-input' ).each(function() {
			var th=$(this);
			var target=th.attr('data-target');
			var checked=th.is( ":checked" );
			if(target && $(target).length){
				if(th.hasClass('checkbox')){
					var element_show=th.attr('data-element_show');
					if(checked){
						if($(target).parent().hasClass('inv')) $(target).parent().removeClass('inv');
						if($(element_show).length && $(element_show).hasClass('inv')) $(element_show).removeClass('inv');
				
					}
				}
			}
			var element_show=th.attr('data-element_show');
			if(element_show && th.hasClass('checkbox')){
				if(checked){
					if($(element_show).length){
						$(element_show).each(function() {
							if($(this).hasClass('inv')) $(this).removeClass('inv');
						});	
					}

				}
				else{
					if($(element_show).length){
						$(element_show).each(function() {
							if(!$(this).hasClass('inv')) $(this).addClass('inv');

						});	
					}
				}

			}
		});
	}

	


	//update
	$(document).on('click tap', ".photos360-wrapper .update", function(event) {//photos360-wrapper .save
		event.preventDefault();
		var th=$(this);
		th.hide();
		var wrapper=$('.photos360-wrapper');
		wrapper.addClass('loading');
		attr_data={
			action:'videolab360_record_update',
			videolab360_id:<?php echo $record['id'];?>,
			expire_enabled: expire_enabled_value,
		}
		$.each(attrs , function(i, val) { 
	  		attr_data[i]=val;
		});

        $.ajax({
            type: 'POST',
            url: "<?php echo admin_url('admin-ajax.php')?>",
            data: attr_data,
            success: function(resp) {
            	data = JSON.parse(resp);
            	//console.log(data);
 				th.show();
            	wrapper.removeClass('loading').addClass('success');
            	wrapper.find('.success_message').html("<span><?php _e('Record was updated successfully!',VLAB360_LANG);?></span>");
            	setTimeout(function(){location.reload()},800);

            },
            error: function(err) {
                console.log(err);
                parent.removeClass('loading');
                th.show();
            }
        });
    });
	//update 360 photos parameters
	
	$(document).on('click tap', ".update_options", function(event) {//photos360-wrapper .save
		event.preventDefault();
		var th=$(this);
		var parent=$("#videolab360_admin_preview");
		paramaters_updated=true;
		parent.addClass('loading');
		attr_data={
			action:'videolab360_parameters_update',
			videolab360_id:<?php echo $record['id'];?>,
			attributes:add360_get_parameters()
		}


        $.ajax({
            type: 'POST',
            url: "<?php echo admin_url('admin-ajax.php')?>",
            data: attr_data,
            success: function(resp) {
            	data = JSON.parse(resp);
            	//console.log(data);
            	parent.removeClass('loading');
            	$('.after_update').addClass('photos360-message photos360-success').fadeIn(300);

            	setTimeout(function(){
            		$('.after_update').fadeOut(300);
            	},4000);

 				//setTimeout(function(){location.reload()},800);

            },
            error: function(err) {
                console.log(err);

            }
        });
    });
	//in pop-up 

	$(document).on('click tap', '#videolab360_admin_preview .attr-input', function(event) {
		var th=$(this);
		var target=th.attr('data-target');
		var ifchecked=th.attr('data-ifchecked'); 
		
		var checked=th.is( ":checked" );
		if(target && $(target).length){
			if(th.hasClass('checkbox')){
				if(checked){
					if($(target).parent().hasClass('inv')) $(target).parent().removeClass('inv');
				}
				else{
					if(!$(target).parent().hasClass('inv')) $(target).parent().addClass('inv');

				}
				
			}
			add360_view_update();
			
		}
		else{
			add360_view_update();
		}
		var element_show=th.attr('data-element_show');
		if(element_show && th.hasClass('checkbox')){
			if(checked){
				if($(element_show).length){
					$(element_show).each(function() {
						if($(this).hasClass('inv')) $(this).removeClass('inv');
					});	
				}

			}
			else{
				if($(element_show).length){
					$(element_show).each(function() {
						if(!$(this).hasClass('inv')) $(this).addClass('inv');

					});	
				}
			}

		}
		if(ifchecked && $(ifchecked).length){
			add360_view_update();
		}
		

	});	
	
	// on change 
	$(document).on('change', '#videolab360_admin_preview .attr-input.select', function(event) {
		var th=$(this);
		var target=th.attr('data-target');
		var ifchecked=th.attr('data-ifchecked'); 

		if(ifchecked && $(ifchecked).length){
			add360_view_update();
		}
		

	});	
	$(document).on('change', '#videolab360_admin_preview .attr-input.number_text', function(event) {
		add360_view_update();
	});	
	
    //check date
    
	$(document).on('change', '#record_expires', function(event) {
		event.preventDefault();
		var is_future=videolab360_is_future_date($(this).val());
		if(!is_future){
			alert("<?php _e('Please enter future date!',VLAB360_LANG);?>");
			$(this).val($(this).attr('data-default'));
		}

    });
    
    //enable_expiration
    
	$(document).on('click tap', '#enable_expiration_toogler .styled-toogler', function(event) {   	
		var checked = $('#enable_expiration').prop('checked');
		var target=$('#expiration_date_wrapper');

		expire_enabled_value=(checked)?1:0;
		
		if(checked){
			target.fadeIn(300);
			$('#record_expires').trigger('change');
		}
		else{
			target.fadeOut(300);
		}
    });
	$(document).on('change', '.photos360-wrapper .input', function(event) {
		event.preventDefault();
		attrs={	};
		$( '.photos360-wrapper .input' ).each(function() {
			var th=$(this);
			var attr=th.attr('data-attr');
			attrs[attr]=th.val();
		});
    });
    
	$(document).on('click tap', '.create-new-category', function(event) {
		event.preventDefault();
		var th=$(this);
		th.hide();
		$('#new_cat_wrapper').show();
    });
    //add category 
	$(document).on('click tap', "#add_category", function(event) {
		event.preventDefault();
		var th=$(this);
		var parent=$(".photos360-wrapper");
		var input_field=$("#new_category");
		var val=input_field.val();
		
		if(val!=''){
			if(input_field.hasClass('error')) input_field.removeClass('error');
			parent.addClass('loading');
			attr_data={
				action:'videolab360_add_category',
				name: val,
				return_options:1,
			}


	        $.ajax({
	            type: 'POST',
	            url: "<?php echo admin_url('admin-ajax.php')?>",
	            data: attr_data,
	            success: function(resp) {
	            	data = JSON.parse(resp);
					if(data.status==1){
						parent.removeClass('loading');
						input_field.val('');
						$("#category").html(data.options).trigger('change');
						$('#new_cat_wrapper').fadeOut(300,function(){$('.create-new-category').show()});
					}

	            },
	            error: function(err) {
	                console.log(err);
	            }
	        });
		}
		else input_field.addClass('error');

    });
    
    
	$(document).on('click tap', '.ui-datepicker-calendar a', function(event) {
		event.preventDefault();
    });
    //to clipboard
	function videolab360_copy_to_clipboard(element){
		element.select();
		document.execCommand("copy");
	}
	$(document).on('click tap', '.coll .icon-files', function(event) {
		event.preventDefault();
		var th=$(this).parent();
		var textarea=th.find('.content');

		videolab360_copy_to_clipboard(textarea);

		th.find('span.msg').fadeIn(300).addClass('active');
		setTimeout(function(){th.find('span.msg').fadeOut(300).removeClass('active')},2000);
    });
	$(document).ready(function()
	{
		add360_update_hidden()
		expire_enabled_value=($('#enable_expiration').prop('checked'))?1:0;
		$('.date-picker').datepicker($.extend({}, $.datepicker.regional['lt'], {
			dateFormat: 'yy-mm-dd'
		}));
	});
})(jQuery);	
</script>

