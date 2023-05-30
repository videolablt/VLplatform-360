<?php
$el_id='photo360_'.$record['folder_name'];
?>
<div class="container">
	<div class="wrapper360" bbb="<?= $image_dimensions['width'];?>">
		<div class="inner">
			<div
			   id="<?php echo $el_id;?>"
			   data-folder="<?php echo VLAB360_UPLOADS_FOLDER_URL.$record['folder_name'].'/';?>" <?php echo implode(" ",$attributes);?>
			></div>
		</div>
	</div>
</div>
<script src="<?php echo VLAB360_URL.'libs/image360/cloudimage360.js';?>"></script>
<script>
function add360View_<?php echo $el_id;?>(viewId) {
	const new360View = document.getElementById(viewId);
	new360View.classList.add("cloudimage-360");
	window.CI360.add(viewId);
}
(function($){  
	var dims<?php echo $el_id;?>=[<?php echo (isset($image_dimensions['width']) && isset($image_dimensions['height']))? $image_dimensions['width'].','. $image_dimensions['height']:'';?>];
	
	
	function calc_width(dms){
		var aspr=dms[0]/dms[1];
		var w=($(window).height()*aspr) -10;
		if(w>900) w=900;
		if(w>dms[0]) w=dms[0];
		return w;
	}
	function recalculate_width(){
		if(dims<?php echo $el_id;?>.length){
			var width=calc_width(dims<?php echo $el_id;?>);
			$('.wrapper360 .inner').css('width',width+'px');
			$('.wrapper360').css('max-width',width+'px');
			console.log(width+' ww: '+$(window).height());
		}
	}
	$().ready(function(){
		recalculate_width();
		add360View_<?php echo $el_id;?>("<?php echo $el_id;?>");
		
		
		
	});	
	$( window ).resize(function() {
		recalculate_width();
	});

})(jQuery);
</script>