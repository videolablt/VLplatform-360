<?php

add_action( 'add_meta_boxes', 'videolab360_metaboxes' );
function videolab360_metaboxes()
{
    add_meta_box( 'videolab360_metabox_id1', __( 'Order files plugin field',VLAB360_LANG), 'videolab360_product_metabox_output', 'product', 'side', 'high' );

}
function videolab360_product_metabox_output($post)
{
	$values = get_post_custom( $post->ID );
	$videolab360_product_type = isset( $values['videolab360_product_type'] ) ? $values['videolab360_product_type'][0] : 0;
	$videolab360_product_vip = isset( $values['videolab360_product_vip'] ) ? $values['videolab360_product_vip'][0] : 0;
	wp_nonce_field( 'videolab360_product_metabox_nonce', 'meta_box_nonce' );
	
	$vip_selected=($videolab360_product_vip==1)?' selected':'';
	?>
	<div class="wrap photos360-product-meta">
		<div class="clearfix type">	
			<input type="hidden" name="videolab360_product_type" value="<?php echo $videolab360_product_type;?>">
	        <label for="type"><?php _e('Choose files type',VLAB360_LANG);?></label>
	        <div class="photos360-droplist photos360-selector" data-target="videolab360_product_type">
	        	<?php videolab360_output_type_options();?>
	        </div>
		</div>	
		<div class="clearfix vip">	
			<input type="hidden" name="videolab360_product_vip" value="<?php echo $videolab360_product_vip;?>">
	        <label for="type"><?php _e('Is this VIP product',VLAB360_LANG);?></label>
	        <div class="photos360-droplist photos360-selector" data-target="videolab360_product_vip">
				<div class="option" data-value="1">
						<div class="check"><?php videolab360_output_icon('check');?></div>
						<div class="text"><div class="inner"><?php videolab360_output_icon('star');?><?php _e('VIP product',VLAB360_LANG)?></div></div>
				</div>
	        </div>
		</div>	
	</div>
<script>
(function($){
	function videolab360_check_options(){
		var val=$('[name=videolab360_product_type]').val();
		if(val!=''){
			$( '.photos360-product-meta .type .photos360-selector .option' ).each(function() {
				var this_val=$(this).attr('data-value');
				if(this_val==val) $(this).trigger('click');
			});
		}
		var val2=$('[name=videolab360_product_vip]').val();

		if(val2!=''){
			$( '.photos360-product-meta .vip .photos360-selector .option' ).each(function() {
				var this_val=$(this).attr('data-value');
				if(this_val==val2) $(this).trigger('click');
			});
		}


	}
    //droplist option
	$(document).on('click tap', ".photos360-selector .option", function(event) {
		event.preventDefault();
		var th=$(this);
		var parent=th.parent();
		var val=th.attr('data-value');
		var selected=th.hasClass('selected');
		var target_name=parent.attr('data-target');
		if(parent.find('.option.selected').length) parent.find('.option.selected').removeClass('selected');
		if(!selected){
			th.addClass('selected');
			$('[name='+target_name+']').val(val).trigger('change');
		}
		else $('[name='+target_name+']').val("0").trigger('change');


    });
    
	$(document).ready(function()
	{
		videolab360_check_options();

	
	});
})(jQuery);	
</script>
	<?php
}
//save
add_action( 'save_post', 'videolab360_product_metabox_save' );
function videolab360_product_metabox_save( $post_id )
{
    if( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) return;
   
    if( !isset( $_POST['meta_box_nonce'] ) || !wp_verify_nonce( $_POST['meta_box_nonce'], 'videolab360_product_metabox_nonce' ) ) return;
     
    $user = wp_get_current_user();

    if( !$user->has_cap( 'edit_posts' ) ) return;
         
        
    if( isset( $_POST['videolab360_product_type'])) update_post_meta( $post_id, 'videolab360_product_type', esc_attr( $_POST['videolab360_product_type'] ) );
    else update_post_meta( $post_id, 'videolab360_product_type', 0 );
    if( isset( $_POST['videolab360_product_vip'])) update_post_meta( $post_id, 'videolab360_product_vip', esc_attr( $_POST['videolab360_product_vip'] ) );
    else update_post_meta( $post_id, 'videolab360_product_vip', 0 );
        
      
}


?>