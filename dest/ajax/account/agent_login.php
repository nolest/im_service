<?php
include_once('/disk/data/htdocs232/poco/pai/mobile/poco_pai_common.inc.php');

$login_id = intval($_INPUT['login_id']);
$pw = trim($_INPUT['pw']);
$agent_type = ($_INPUT['agent_type']);

if($agent_type == 'agent'){
	$obj = POCO::singleton('pai_mall_operate_agent_class');
}else{
	$obj = POCO::singleton('pai_mall_operate_water_class');
	}

$ret=$obj->user_login($login_id,$pw);

$output_arr = $ret;

mobile_output($output_arr,false);

?>