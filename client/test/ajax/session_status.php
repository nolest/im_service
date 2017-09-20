<?php
include_once 'config.php';
include_once('/disk/data/htdocs232/poco/pai/mobile/poco_pai_common.inc.php');
include_once '../api_rest.php';

$arr = $_INPUT['arr'];

$obj = POCO::singleton('pai_mall_operate_agent_class');

foreach ($arr as $k=>$value) 
{
	if(!empty($value['seller_id']) && !empty($value['buyer_id']) && !empty($value['operate']))
	{
		$seller_id = $value['seller_id'];
		$buyer_id = $value['buyer_id'];
		$operate = $value['operate'];
		
		switch($operate)
		{
			case 'start':$ret = $obj->session_start_time($buyer_id,$seller_id);break;
			case 'talk':$ret = $obj->session_respond_time($buyer_id,$seller_id);break;
			case 'end':$ret = $obj->session_end_time($buyer_id,$seller_id);break;
			case 'check':$ret = $obj->check_is_session_end($buyer_id,$seller_id);break;
		}
	}
	
}


$output_arr = $ret;

mobile_output($output_arr,false);

?>