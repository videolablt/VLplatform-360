<div class="item">
<?php if($valid_image):?>
	<?php
	videolab360_output_icon('trash',__('Remove file',VLAB360_LANG));
	?>
	<a data-index="<?php echo ($ind++);?>" class="gallery_item" href="<?php echo $file; ?>">
<?php endif;?>
	<div <?php videolab360_item_thumbnail_attrs($record,$file);?>>
		<span class="fname"><?php echo $fname;?></span><?php
		if(videolab360_get_file_extension($file)=='zip') videolab360_output_icon('clip');
		else videolab360_output_icon('loop'); 
	?></div>

<?php if($valid_image):?>
	</a>
<?php endif;?>
</div>
