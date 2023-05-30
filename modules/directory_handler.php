<?php
class videolab360_photos_directory_handler
{

	public function __construct()
	{
	}

	//create dir
	public static function create_dir($dir_path)
	{
		return mkdir($dir_path);
	}

	//random string generation

	public static function generate_random_string($length = 10)
	{
		$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		$charactersLength = strlen($characters);
		$randomString = '';
		for ($i = 0; $i < $length; $i++) {
			$randomString .= $characters[rand(0, $charactersLength - 1)];
		}
		return $randomString;
	}
	//get folder files
	public static function get_folder_files($dir,$type='img')
	{

		if($type=='img') $file_types="{jpg,jpeg,bmp,png,gif}";
		else if($type=='zip') $file_types="{zip}";
		
		if(!isset($file_types)) return glob(VLAB360_UPLOADS_FOLDER.$dir.'/*.*');
		else return glob(VLAB360_UPLOADS_FOLDER.$dir.'/*.'.$file_types,GLOB_BRACE);
	}
	
	//get folder content list

	public static function get_folder_content_list($dir,$file_type="img"){

		$files =videolab360_photos_directory_handler::get_folder_files($dir,$file_type);
		$result=array();
		if(!empty($files)){

		    $result = array_map(function ($item) use ($dir){
		    	$filename=explode("/",$item);
		        return VLAB360_UPLOADS_FOLDER_URL.$dir.'/'.$filename[count($filename)-1];
		    }, $files);
			
		}
		return $result;
	}
	//get thumbnail
	public static function get_thumbnail($dir){
		$images=self::get_folder_content_list($dir,$file_type="img");
		if(!empty($images)) return $images[0];
		return '';
	}
	//get folder files size

	public static function get_dir_size($directory) {
		$directory=VLAB360_UPLOADS_FOLDER.$directory;
	    $size = 0;
	    foreach(new RecursiveIteratorIterator(new RecursiveDirectoryIterator($directory)) as $file){
	        $size+=$file->getSize();
	    }
	    return self::format_size($size);
	}
	
	//format size
	
	public static function format_size($size){
		$base = log($size) / log(1024);
		$suffix = array("", "KB", "MB", "GB", "TB")[floor($base)];
		return number_format(pow(1024, $base - floor($base)), 2, '.', ' ').' '.$suffix;
	}
}
?>