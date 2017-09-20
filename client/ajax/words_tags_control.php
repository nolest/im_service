<?php
include_once 'config.php';
include_once('/disk/data/htdocs232/poco/pai/mobile/poco_pai_common.inc.php');
include_once '../api_rest.php';


$control_type = $_INPUT['control_type'];
$tag_name = $_INPUT['tag_name'];
$tag_id = $_INPUT['tag_id'];

$obj = POCO::singleton ('pai_mall_operate_agent_class');

switch($control_type)
{
	case 'add':$ret = $obj->add_usual_tag($yue_login_id,iconv('UTF-8','GBK',$tag_name));break;
	case 'edit':$ret = $obj->edit_usual_tag($tag_id,$yue_login_id,iconv('UTF-8','GBK',$tag_name));break;
	case 'del' :$ret = $obj->delete_usual_tag($tag_id,$yue_login_id);break;
}




mobile_output($ret,false);
?>