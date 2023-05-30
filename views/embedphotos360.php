<?php
include_once VLAB360_DIR.'/modules/db_module.php';
include_once VLAB360_DIR.'/modules/db_records_module.php';
include_once VLAB360_DIR.'modules/files_handler.php';
$results=array();

$videolab360_id=get_query_var('videolab360_id');
$videolab360_id=($videolab360_id && $videolab360_id!='')?$videolab360_id:'';

$db_actions=new videolab360_records_module();

if($videolab360_id!='') $results=$db_actions->get_where(array('folder_name'=>'"'.$videolab360_id.'"'));	


		

?>
<!DOCTYPE html>
<html>
<head>
<title><?php _e("Video Lab 360",VLAB360_LANG);?></title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

    <meta name="viewport" content="initial-scale = 1.0, maximum-scale = 1.0, minimum-scale = 1.0,  user-scalable=no" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="cache-control" content="no-cache" />
<META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap&subset=latin,latin-ext" rel="stylesheet"> 
<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>

<link rel="stylesheet" type="text/css" href="<?php echo VLAB360_URL.'assets/css/normalize.css'?>">
<link rel="stylesheet" type="text/css" href="<?php echo VLAB360_URL.'assets/css/embed-style.css?v=1.5'?>">

</head>
<body>
<style type="text/css">
html, body {
    width: 100%;
    min-height: 100%;

}

.container {
    width: 100%;
    height: 100%;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>
<?php

	if(!empty($results)){

		$record=$results[0];
		
    	$files=videolab360_photos_directory_handler::get_folder_content_list($record['folder_name'],"img");
    	$files_handler=new videolab360_files_handler($files);
		if(!empty($files)){
			$attributes=videolab360_get_primary_atributes($files);
			$attributes=videolab360_add_custom_attributes($attributes,$record['attributes']);
			$image_dimensions=$files_handler->get_image_dimensions();
			include VLAB360_DIR.'/views/parts/image_360.php';

		}
		else{
			?>
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-12"><h3><?php _e('No files found.',VLAB360_LANG);?></h3></div>
				</div>
			</div>	
					<?php
		}

	?>

<?php
	}
	else{

		?>
			<div class="container-fluid videolab360_embeded">
				<div class="row">
					<div class="col-md-12"><h2><?php _e('Sorry, there is no results found',VLAB360_LANG);?></h2></div>
				</div>
			</div>	
		<?php
	}

?>

</body>
</html>

