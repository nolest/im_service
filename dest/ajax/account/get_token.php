<?php

include_once('../fe_include/common.inc.php');
$services_obj = POCO::singleton('pai_poco_yun_service_class');
$user_id = $_INPUT['yue_login_id'];
$self = $_INPUT['self'];//用于判断是否拉取日常用语
$type = $_INPUT['type'];
$agent_type = $_INPUT['agent_type'];
//$ret = $services_obj->get_yueyue_chat_access_token($user_id);
//$goods_obj = POCO::singleton ( 'pai_mall_operate_agent_class' );
foreach ($user_id as $k=>$value) {
  $services = $services_obj->get_yueyue_chat_access_token(strval($value));
  $ret[$k]['id'] = $value;
  if($services.code != 0){
	  $ret[$k]['auth'] = -1;
  }
  else{
	  $ret[$k]['auth'] = $services['data'];
  }
  
  if($type == 'seller'){
	  $ret[$k]['icon'] = get_seller_user_icon($value);
	  $ret[$k]['name'] = iconv('GBK','UTF-8',get_seller_nickname_by_user_id($value));
  }
  else{
	  $ret[$k]['icon'] = get_user_icon($value);
	  $ret[$k]['name'] = iconv('GBK','UTF-8',get_user_nickname_by_user_id($value));
  }

  
  if($self == 'self'){
	  //仅在管理员身份时进入此分支，获取日常用语
	  if($agent_type == 'agent'){
		  $goods_obj = POCO::singleton ( 'pai_mall_operate_agent_class' );
	  }else{
		  $goods_obj = POCO::singleton ( 'pai_mall_operate_water_class' );
	  }
	  
	  $tag_ret = $goods_obj->get_usual_tag_list(false, $value, $limit = '0,1000', $order_by = 'tag_id DESC');
	  foreach($tag_ret as $g=>$value)
		{
			$words_tags[$g]['tag_id'] = $value['tag_id'];
			$words_tags[$g]['tag_name'] = iconv('GBK','UTF-8',$value['tag_name']);
			$words_tags[$g]['list'] = $goods_obj->get_usual_text_list(false, $value['tag_id'], $limit = '0,1000', $order_by = 'text_id DESC');
			foreach($words_tags[$g]['list'] as $k=>$kalue){
				$words_tags[$g]['list'][$k]['text'] = iconv('GBK','UTF-8',$kalue['text']);
			};
		}
	$ret[$k]['words_tags'] = $words_tags;  
	}
  //$ret[$k]['good_list'] = $goods_obj->user_goods_list($value['seller_user_id'],array("show"=>1), false,  'goods_id DESC', '0,200');
};


mojikids_mobile_output($ret,false);
?>