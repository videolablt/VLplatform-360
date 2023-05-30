<?php
	add_action( 'wp', 'videolab360_shedule' );
	add_action( 'videolab360_hourly_event', 'videolab360_remove_expired_data_hourly' );

	function videolab360_shedule() {
		/*
	    if ( !wp_next_scheduled( 'videolab360_daily_event' ) ) {
	        wp_schedule_event( time(), 'daily', 'videolab360_daily_event' );
	    }
	    */
	    if ( !wp_next_scheduled( 'videolab360_hourly_event' ) ) {
	        wp_schedule_event( time(), 'hourly', 'videolab360_hourly_event' );
	    }
	}

	function videolab360_remove_expired_data_hourly() {
		videolab360_cron_jobs_action(false);
	}
	function videolab360_remove_expired_data_manual() {
		videolab360_cron_jobs_action(true);
	}
	
	function videolab360_cron_jobs_action($manualy=true){
		$db_actions=new videolab360_records_module();
		//options

		$log_report_days_before = get_option(VLAB360_PREFIX.'log_report_days_before');
		$email_admin_days_before_enabled = get_option(VLAB360_PREFIX.'email_admin_days_before_enabled');
		$email_admin_after_remove_enabled = get_option(VLAB360_PREFIX.'email_admin_after_remove_enabled');

		
		
		$removed_records_data=$db_actions->remove_expired();
		$soon_expires_records_data=$db_actions->get_soon_expires_data($log_report_days_before);
		
		$logs_db_actions=new videolab360_logs_module();
		

		if(!empty($removed_records_data)){
			foreach($removed_records_data as $data){
				if($logs_db_actions->not_exist($data)){
					$logs_db_actions->insert_row($data);
					if($email_admin_after_remove_enabled) videolab360_send_mail('expired',$data);
				}
			}
		}
		if(!empty($soon_expires_records_data)){
			foreach($soon_expires_records_data as $data){
				if($logs_db_actions->not_exist($data)){
					$logs_db_actions->insert_row($data);
					if($email_admin_days_before_enabled) videolab360_send_mail('days_before',$data);
				}
			}
		}
		if(!$manualy){
			file_put_contents(dirname(__FILE__).'/logai.txt','hourly event fired; soon expires:'. var_export($soon_expires_records_data,true).PHP_EOL.'expired:'. var_export($removed_records_data,true).PHP_EOL, FILE_APPEND | LOCK_EX);			
		}

	}