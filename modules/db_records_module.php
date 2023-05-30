<?php
class videolab360_records_module extends videolab360_db_module
{
    private static $instance;
    
    public function __construct() { 
        parent::__construct();
        
        $this->setTableName(VLAB360_RECORDS_TABLE);
        $this->setFields( array(
        	'id'=>array('type'=>'int','default'=>''),
        	'user_id'=>array('type'=>'int','default'=>get_current_user_id()),
        	'category'=>array('type'=>'int','default'=>1),
        	'folder_name'=>array('type'=>'string','default'=>''),
        	'label'=>array('type'=>'string','default'=>''),
        	'attributes'=>array('type'=>'string','default'=>''),
        	'expires'=>array('type'=>'datetime','default'=>videolab360_get_datetime('','Y-m-d H:i:s','+30 day')),
        	'expire_enabled'=>array('type'=>'int','default'=>0),
        	'updated'=>array('type'=>'datetime','default'=>videolab360_get_datetime()),
        	'created'=>array('type'=>'datetime','default'=>videolab360_get_datetime()),
        ) );

    }
    
    //table users
    
	public function get_table_users(){
		global $wpdb;
		$sql="SELECT DISTINCT user_id FROM " . $this->tablename." WHERE 1";
		$records = $wpdb->get_results($sql,ARRAY_A);	
		return $records;
	}
	//remove record and folder with contents
	public function empty_folder($dir)
	{
		if (is_dir($dir))
		{
			$objects = scandir($dir);

			foreach ($objects as $object)
			{
				if ($object != '.' && $object != '..')
				{
					if (filetype($dir.'/'.$object) == 'dir') {$this->empty_folder($dir.'/'.$object);}
					else {unlink($dir.'/'.$object);}
				}
			}

			reset($objects);
			rmdir($dir);
		}
	}
	//remove record and folder with contents
	public function remove($id){
		global $wpdb;
		$record=$this->get_where(array('id'=>(int)$id));
		if($record && $record[0]['folder_name']!=''){
			$resource=VLAB360_UPLOADS_FOLDER.'/'.$record[0]['folder_name'];
			if(is_dir($resource)){
				$this->empty_folder($resource);
			}
		}
		
		return $this->remove_record((int)$id);

	}
	//remove expired 
	public function remove_expired(){
		global $wpdb;
		$res=array();
		$results = $wpdb->get_results("SELECT * FROM " . $this->tablename." WHERE expire_enabled = 1 AND  (expires < CURDATE())",ARRAY_A);
		if(!empty($results)){
			foreach($results as $record){
				$date_expire=videolab360_get_datetime($record['expires'],'Y-m-d');
				$label=($record['label']!='')?' ('.$record['label'].')':'';
				$comment=sprintf(__('Removed expired record %s and files, expire date: %s',VLAB360_LANG), '#'.$record['id'].$label,$date_expire);
				$res[]=array('record_id'=>$record['id'],'label'=>$label,'expires'=>$record['expires'],'comment'=>$comment,'value'=>2,'type'=>'report');
				$this->remove($record['id']);

			}
		}
		return $res;
	}
	
	//returns log data of record whitch soon expires
	public function get_soon_expires_data($days_before){
		global $wpdb;
		$days_before=(!$days_before)?4:((int)$days_before+1);
		$res=array();

		$results = $wpdb->get_results("SELECT * FROM " . $this->tablename." WHERE expire_enabled = 1 AND (expires < CURDATE() + INTERVAL ".$days_before." DAY)",ARRAY_A);
		$today=videolab360_get_datetime('','Y-m-d');
		
		if(!empty($results)){
			foreach($results as $record){
				$date=videolab360_get_datetime('','Y-m-d H:i');
				$days_difference=videolab360_get_days_difference($today,$record['expires']);
				$date_expire=videolab360_get_datetime($record['expires'],'Y-m-d');
				$label=($record['label']!='')?' ('.$record['label'].')':'';
				$comment=sprintf(__('Record %s will expire after %s days, on: %s',VLAB360_LANG), '#'.$record['id'].$label,$days_difference,$date_expire);
				$res[]=array('record_id'=>$record['id'],'user_id'=>$record['user_id'],'order_id'=>$record['order_id'],'label'=>$label,'expires'=>$record['expires'],'comment'=>$comment,'value'=>1,'type'=>'report');

			}
		}
		return $res;
	}
}