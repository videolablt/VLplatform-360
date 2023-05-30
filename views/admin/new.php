<?php


$folder_name = videolab360_photos_directory_handler::generate_random_string();


?>
<div id="videolab360_new" class="wrap wrapper photos360-wrapper">
	<?php videolab360_output_styled_success_checkmark(true);?>
	<h1><?php _e('Upload new 360 photo(-s)',VLAB360_LANG);?></h1>


	<div class="photos360-message" style="display:none;"></div>
	<div id="edit_record_wrapper" class="irow" style="display:none;">
		<a href="<?php echo admin_url( 'admin.php?page='.VLAB360_ADMIN_PAGE_SLUG);?>" class="button button-primary photos360-go-edit"><?php videolab360_output_icon('edit');_e('Edit record',VLAB360_LANG);?></a>
	</div>
	<div id="files_output" style="display:none;"></div>

	<div id="videolab360_form">


		<div id="enable_expiration_toogler" class="irow wcheckbox">
			<label class="title"><?php _e('Remove the post and its associated files after the expiration date',VLAB360_LANG);?></label>
			<div class="styled-toogler"><input type="checkbox" id="enable_expiration" autocomplete="off" /><label for="enable_expiration"></label></div>
		</div>
		<div id="expiration_date_wrapper" class="irow expires" style="display:none;">
			<label><?php _e('Expires date',VLAB360_LANG);?></label>
			<input type="text" data-attr="expires" id="record_expires" class="date-picker req-field input" value="<?php echo videolab360_get_datetime('','Y-m-d','+30 day')?>" data-default="<?php echo videolab360_get_datetime('','Y-m-d','+30 day');?>" placeholder="" />	
		</div>
		<div class="irow categories">
			<label><?php _e('Category',VLAB360_LANG);?></label>
			<?php videolab360_categories_select();?>
			<?php videolab360_create_new_category_element();?>
		</div>
		<div class="irow">
			<div id="fileuploader"><?php _e('Upload',VLAB360_LANG);?></div>
		</div>
	</div>
	<div class="instructions">
		<div class="toogler"><div class="iicon"><?php videolab360_output_icon('info');?></div><?php _e('File format and name requirements',VLAB360_LANG);?><div class="iarrow"><?php videolab360_output_icon('angle-down');?></div></div>
		<div class="info" style="display:none">
			<p><b><?php _e('Filne name structure:',VLAB360_LANG);?></b> name_1.png, name_2.png. <?php _e('Mostly important seperator',VLAB360_LANG);?> <b>"_"</b> <?php _e('between name ant frame',VLAB360_LANG);?></p>
			<p><b><?php _e('Filne name with y axis structure:',VLAB360_LANG);?></b> name_y_1.png, name_y_2.png. <?php _e('Mostly important seperator',VLAB360_LANG);?> <b>"_y_"</b> <?php _e('between name ant frame',VLAB360_LANG);?></p>
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
	var attrs={};
	var expire_enabled_value=0;
	
	function videolab360_is_future_date(date){
		var today = new Date().getTime();
		var entered = new Date(date).getTime();
		return (today < entered);
	}
	//show uploader

	function videolab360_show_uploader(){
		$("#fileuploader").html('');
		var wrapper=$('.photos360-wrapper');
		currently_uploading=0;
		var redir_url='';
		var file_outputs;
		var drag_drop_label="<?php _e('Drag &amp; Drop Files',VLAB360_LANG);?> (*.zip)";
	
		var attr_data={
			action:'videolab360_upload_files',
			filename:'myfile',
			folder_name:output_dir,
			expire_enabled: expire_enabled_value,
			zip_only:1

		}
		$.each(attrs , function(i, val) { 
	  		attr_data[i]=val;
		});

		$("#fileuploader").uploadFile({
			url:"<?php echo admin_url('admin-ajax.php')?>",
			formData:attr_data,
			fileName:"myfile",
			uploadStr:"<?php _e('Upload',VLAB360_LANG);?>",
			dragDropStr: "<span><b>"+drag_drop_label+"</b></span>",
			multiDragErrorStr: "<?php _e('Multiple File Drag &amp; Drop is not allowed.',VLAB360_LANG);?>",
            statusBarWidth: 600,
            dragdropWidth: 600,
            allowedTypes: "zip",
            extErrorStr: "Neteisingas failo tipas, leidžiami: ",
            showCancel: false,
            showAbort: false,
            showProgress: true,
            allowDuplicates: false,
            onSelect:function(files)
			{
				uploading_files_count=files.length;
			},
			onSubmit:function(files)
			{
				

			},
			onSuccess:function(files,response,xhr)
			{
				//$("#eventsmessage").html($("#eventsmessage").html()+"<br/>"+files);
				currently_uploading++;
	            data = JSON.parse(response);
	            if(data.redir) redir_url=data.redir;
	             
				if(currently_uploading==uploading_files_count){
					
	                file_outputs=$('.ajax-file-upload-container').html();
	                $('#files_output').html(file_outputs);
	                if($('.ajax-file-upload-container').innerHeight()>200){
	                	if(!$('#files_output').hasClass('scroll')) $('#files_output').addClass('scroll');
	                }
	                else if($('#files_output').hasClass('scroll')) $('#files_output').removeClass('scroll');
		            wrapper.addClass('success');
		            wrapper.find('.success_message').html(uploading_files_count+' '+"<?php _e('file(-s) was attached successfully!',VLAB360_LANG);?>");
		            
	                if(redir_url){
						 $('.photos360-go-edit').attr('href',redir_url).show();
					}
					else $('.photos360-go-edit').hide();
				}
				else console.log(currently_uploading+' / '+uploading_files_count);
 
					
			}
		});
		
	}
	

//change nput value 
	$(document).on('change', '.photos360-wrapper .input', function(event) {
		event.preventDefault();
		$( '.photos360-wrapper .input' ).each(function() {
			var th=$(this);
			var attr=th.attr('data-attr');
			attrs[attr]=th.val();
		});
		videolab360_show_uploader();
    });
    //check date
	$(document).on('change', '#record_expires', function(event) {
		event.preventDefault();
		var is_future=videolab360_is_future_date($(this).val());
		videolab360_show_uploader();
		if(!is_future){
			$("#fileuploader").addClass('waiting');
			$(this).val($(this).attr('data-default'));
			alert("<?php _e('Please enter future date!',VLAB360_LANG);?>");
		}
		else $("#fileuploader").removeClass('waiting');
    });

    //enable_expiration
	$(document).on('click tap', '#enable_expiration_toogler .styled-toogler', function(event) {   	
		var checked = $('#enable_expiration').prop('checked');
		var target=$('#expiration_date_wrapper');

		expire_enabled_value=(checked)?1:0;
		videolab360_show_uploader();
		
		if(checked){
			target.fadeIn(300);
			$('#record_expires').trigger('change');
		}
		else{
			target.fadeOut(300);
		}
    });
//instrukctions 
	$(document).on('click tap', '.instructions .toogler', function(event) {
		event.preventDefault();
		var th=$(this);
		var target=th.next();
		if(!target.hasClass('active')){
			target.addClass('active').slideDown(300);
			th.addClass('active');
		}
		else{
			target.removeClass('active').slideUp(300);
			th.removeClass('active');
		}
    });
	//new category creation 
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
    
	$(document).ready(function()
	{
		videolab360_show_uploader();
		$('.date-picker').datepicker($.extend({}, $.datepicker.regional['lt'], {
			dateFormat: 'yy-mm-dd'
		}));
	});
})(jQuery);	
</script>
</div>