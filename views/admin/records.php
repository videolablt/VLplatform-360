<div class="photos360-wrapper">
<h1><?php _e('360 photos',VLAB360_LANG);?></h1>
<form action="<?php echo admin_url( 'admin.php?'); ?>" method="GET" class="videolab360_orders_filters">
	<input type="hidden" name="page" value="<?php echo VLAB360_ADMIN_PAGE_SLUG;?>" />
	<input type="hidden" name="videolab360_filters" value="1" />
    <fieldset class="aditional_filters">
    	<legend><?php _e('Search and filters',VLAB360_LANG);?></legend>
   		<div class="srow">
   			<div class="coll">
   				<label><?php _e('Search in titles',VLAB360_LANG);?></label>
				<input type="text" name="slabel" value="<?php echo (isset($_GET['slabel']))?$_GET['slabel']:'';?>" placeholder="<?php _e('Write search keyword',VLAB360_LANG);?>" />
   			</div>
   			<div class="coll">
   				<label><?php _e('Filter by category',VLAB360_LANG);?></label>
				<?php videolab360_categories_select(0,true,true);?>
   			</div>
   			<div class="coll">
   				<label><?php _e('Filter by user',VLAB360_LANG);?></label>
				<?php videolab360_user_select();?>
   			</div>
   			<div class="coll submit">
   				<label>&nbsp;</label>
				<?php submit_button( __('Search records',VLAB360_LANG),'primary',NULL);?>
   			</div>
			
   		</div>
    	
	

    </fieldset>

<hr />	
</form>
<div id="<?php echo 'videolab360_records_form';?>">
    <form method="post">
    <?php $table->display(); ?>
    </form>
</div> 
</div> 
<script>
(function($){
	function videolab360_copy_to_clipboard(element){
		element.select();
		document.execCommand("copy");
	}
	$(document).on('click tap', '.icon-link', function(event) {
		event.preventDefault();
		var th=$(this).parent();
		videolab360_copy_to_clipboard(th.find('.url-content'));
		th.find('span.msg').fadeIn(300).addClass('active');
		setTimeout(function(){th.find('span.msg').fadeOut(300).removeClass('active')},2000);
    });
	$(document).on('click tap', '.icon-shortcode', function(event) {
		event.preventDefault();
		var th=$(this).parent();
		videolab360_copy_to_clipboard(th.find('.shortcode-content'));
		th.find('span.msg').fadeIn(300).addClass('active');
		setTimeout(function(){th.find('span.msg').fadeOut(300).removeClass('active')},2000);
    });
})(jQuery);	
</script>