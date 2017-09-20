<?php
include_once 'config.php';
include_once('/disk/data/htdocs232/poco/pai/mobile/poco_pai_common.inc.php');
include_once '../api_rest.php';


$control_type = $_INPUT['control_type'];
$text = $_INPUT['text'];
$text_id = $_INPUT['text_id'];
$tag_id = $_INPUT['tag_id'];

$obj = POCO::singleton ('pai_mall_operate_water_class');

switch($control_type)
{
	case 'add':$ret = $obj->add_usual_text($tag_id,$yue_login_id,iconv('UTF-8','GBK',$text));break;
	case 'edit':$ret = $obj->edit_usual_text($text_id,$yue_login_id,iconv('UTF-8','GBK',$text));break;
	case 'del' :$ret = $obj->delete_usual_text($text_id,$yue_login_id);break;
}




mobile_output($ret,false);
?>