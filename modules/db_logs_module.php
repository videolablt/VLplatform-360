<?php
class videolab360_logs_module extends videolab360_db_module
{
    private static $instance;
    
    public function __construct() { 
        parent::__construct();
        
        $this->setTableName(VLAB360_LOGS_TABLE);
        $this->setFields( array(
        	'id'=>array('type'=>'int','default'=>''),
        	'type'=>array('type'=>'string','default'=>''), 
        	'record_id'=>array('type'=>'int'),
        	'value'=>array('type'=>'int','default'=>0),
        	'expires'=>array('type'=>'string','default'=>''),
        	'comment'=>array('type'=>'string','default'=>''),
        	'created'=>array('type'=>'datetime','default'=>videolab360_get_datetime()),
        ) );

    }
    

	
	//admin logs
	public function get_admin_logs($filters=array(),$search=array()){
		global $wpdb;
		
		$where_sql=' WHERE ';
		$where_arr=array();
		$operator="AND";
		if(!empty($filters)){
			if(isset($filters['date_from']) && $filters['date_from']!='') $where_arr[]='created >= "'.$filters['date_from'].'"';
			if(isset($filters['date_to']) && $filters['date_to']!='') $where_arr[]='created <= "'.$filters['date_to'].'"';
		}

		if(!empty($search)){
			foreach($search as $key=>$val){
				$where_arr[]='('.$key.' LIKE "'.$val.'%" OR '.$key.' LIKE "%'.$val.'%" OR '.$key.' LIKE "%'.$val.'")';
			}
		}
		if(count($where_arr)>0) $where_sql.=implode(" ".$operator." ",$where_arr);
		
		
		
		if(count($where_arr)>0) $sql="SELECT * FROM " . $this->tablename.$where_sql." ORDER BY created DESC";
		else $sql="SELECT *  FROM " . $this->tablename." WHERE 1 ORDER BY created DESC";
		//file_put_contents(dirname(__FILE__).'/test3.txt', $sql);
		$records = $wpdb->get_results($sql,ARRAY_A);	
		return $records;
	}
	
	
	//get_latest_log
	
	public function get_latest_log($record_id){
		global $wpdb;
		$sql="SELECT *  FROM " . $this->tablename." WHERE record_id=".$record_id.' ORDER BY created DESC LIMIT 1';
		$records = $wpdb->get_results($sql,ARRAY_A);
		if(!$records) return array();	
		else return $records[0];
	}
	public function if_field_exist($field_key){
		$exist=false;
		foreach($this->fields as $key=>$value){
			if($field_key==$key) $exist=true;
		}
		return $exist;
	}
	//not_exist
	public function not_exist($data){
		global $wpdb;
		$where_arr=array();
		unset($data['comment']);

		foreach($data as $key=>$value){
			if($this->if_field_exist($key)){
				if($key=='type' || $key=='expires') $val="'".$value."'";
				else $val=$value;
				$where_arr[]=$key.' = '.$val;
			}
		}
		$where_sql='1';
		if(count($where_arr)>0) $where_sql=implode(" AND ",$where_arr);
		$sql="SELECT *  FROM " . $this->tablename." WHERE ".$where_sql." ORDER BY created ASC";
		$records = $wpdb->get_results($sql,ARRAY_A);

		return (count($records)==0);
	}


}