<div class="wrapper360">
	<div class="inner">
		<div id="image360_<?php echo $record['folder_name'];?>" data-folder="<?php echo VLAB360_UPLOADS_FOLDER_URL.$record['folder_name'].'/';?>" <?php echo implode(" ",$attributes);?> ></div>
	</div>
</div>

<script>
var el360<?php echo $record['folder_name'];?>;
var el360<?php echo $record['folder_name'];?>_showed=false;
function add360View_<?php echo $record['folder_name'];?>(viewId) {
      	if(!el360<?php echo $record['folder_name'];?>_showed){
	      	el360<?php echo $record['folder_name'];?>_showed=true;
	        el360<?php echo $record['folder_name'];?> = document.getElementById(viewId);
	        el360<?php echo $record['folder_name'];?>.classList.add("cloudimage-360");
	        window.CI360.add(viewId);
		}
}

(function($){  
	function isVisible<?php echo $record['folder_name'];?>(e) {
	    return ($("#"+e).is(":visible") == true);
	}
	function show_if_visible<?php echo $record['folder_name'];?>(e){
			if($("#"+e).closest('.bdt-switcher-item-content-inner').length){
				if($("#"+e).closest('.bdt-switcher-item-content-inner').is(":visible") == true){
					add360View_<?php echo $record['folder_name'];?>("image360_<?php echo $record['folder_name'];?>");
				}	
			}
			else if(isVisible<?php echo $record['folder_name'];?>(e)){
				add360View_<?php echo $record['folder_name'];?>("image360_<?php echo $record['folder_name'];?>");
			}

	}	
	$().ready(function(){
		show_if_visible<?php echo $record['folder_name'];?>("image360_<?php echo $record['folder_name'];?>");
		
	});	
	$(document).on('click tap', ".resize-el .bdt-tabs-item", function(event) {
		
		setTimeout(function(){
			el360<?php echo $record['folder_name'];?>_showed=false;
			show_if_visible<?php echo $record['folder_name'];?>("image360_<?php echo $record['folder_name'];?>");
		}, 700);

    });

})(jQuery);
</script>