<p class="after_update<?php echo (isset($is_options) && $is_options)?' st2':''?>" style="display:none;"><?php _e("Options was successfully updated!",VLAB360_LANG);?></p>
<div class="container md">
	
	<div class="row">	
		<div class="col-md-7 360-wrapper">
			<div
			   class="cloudimage-360"
			   id="image360"
			   data-folder="<?php echo VLAB360_UPLOADS_FOLDER_URL.$record['folder_name'].'/';?>" <?php echo implode(" ",$attributes);?>
			></div>
		</div>
		<div class="col-md-4 options">
			<?php 
				if(!isset($is_options) || (isset($is_options) && !$is_options)) videolab360_output_photo_360_options($record['attributes'],false);
				else{
					$deff=videolab360_get_default_attributes();
					
					videolab360_output_photo_360_options(videolab360_get_default_attributes());
				}
			?>
		</div>
	</div>
</div>

<script src="<?php echo VLAB360_URL.'libs/image360/cloudimage360.js';?>"></script>
