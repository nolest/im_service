<?php
include_once('/disk/data/htdocs232/poco/pai/mobile/poco_pai_common.inc.php'); 
require_once('/disk/data/htdocs232/poco/pai/yue_admin/task/include/basics.fun.php');
include_once(dirname(__FILE__).'/include/output_function.php');
include_once(dirname(__FILE__).'/no_copy_online_config.inc.php');
$user_id = $_INPUT['user_id'];
$user_type = $_INPUT['user_type'];
$agent_type = $_INPUT['agent_type'];

$services_obj = POCO::singleton('pai_poco_yun_service_class');
if($agent_type == 'agent'){
	$obj = POCO::singleton('pai_mall_operate_agent_class');
}
else{
	$obj = POCO::singleton('pai_mall_operate_water_class');
}
if($user_type == 'seller'){
	//获取代理列表,与传入身份一致
	$ret = $obj->get_valid_seller_list($user_id,$b_select_count = false,$limit = '0,1000');
	foreach ($ret as $key => $value) {
	  $id = $ret[$key]['seller_user_id'];
	  $auth = $services_obj->get_yueyue_chat_access_token($id);
	  $ret[$key]['auth'] = $auth;
	  $ret[$key]['icon'] = get_seller_user_icon($id);
	  //var_dump(iconv('GBK','UTF-8',get_seller_nickname_by_user_id($id)));
	  $ret[$key]['name'] = get_seller_nickname_by_user_id($id);
	  //var_dump($ret[$key]['name']);
	}
}
else{
	$ret = $obj->get_valid_seller_list($user_id,$b_select_count = false,$limit = '0,1000');
	foreach ($ret as $key => $value) {
	  $id = $ret[$key]['seller_user_id'];
	  $auth = $services_obj->get_yueyue_chat_access_token($id);
	  $ret[$key]['auth'] = $auth;
	  $ret[$key]['icon'] = get_user_icon($id);
	  //var_dump(iconv('GBK','UTF-8',get_seller_nickname_by_user_id($id)));
	  $ret[$key]['name'] = get_user_nickname_by_user_id($id);
	  //var_dump($ret[$key]['name']);
	}
}




 
$output_arr = $ret;
mobile_output($output_arr,false); 
?>