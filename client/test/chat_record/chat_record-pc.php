<?php

//****************** pc��ͷ��ͨ�� start ******************
$pc_wap = 'pc/';
$tpl = $my_app_pai->getView(TASK_TEMPLATES_ROOT.$pc_wap.'chat_record/chat_record.tpl.htm');


$id = $_INPUT['seller_id'];
$type = $_INPUT['type'];
$page = intval($_INPUT['page']);
// ================== pc��ͷ��ͨ�� end ==================

/*
     * ��ȡһ������Ա������Ч���̼��б�
     *
     * @param string $admin_user_id    ����ԱID
     * @param string $b_select_count   �Ƿ񷵻�������TRUE�������� FALSE�����б�
     * @param string $limit     ��ҳ
     * @return array|int
*/

if(empty($page))
{
	$page = 1;
}

// ��ҳʹ�õ�page_count
$page_count = 30;

$limit_start = ($page - 1)*($page_count);

$limit = "{$limit_start},{$page_count}";

$user_obj = POCO::singleton('pai_user_class');

if($type == 'seller')
{
	//echo('�̼��б�');
	$ret = get_api_result('merchant/msg_list.php',array(
		'user_id' => $id
	));
}
else
{
	//echo('�������б�');
	$ret = get_api_result('customer/msg_list.php',array(
		'user_id' => $id
	));
}

$seller_name = get_seller_nickname_by_user_id($id);
//����
foreach($ret['data']['list'] as $k=>$value){
	$ret['data']['list'][$k] = iconv('GBK','UTF-8',$value);
	$ret['data']['list'][$k] = json_decode($ret['data']['list'][$k],true);
}


//����
foreach($ret['data']['list'] as $i=>$value){
	if($value['send_user_id'] == $id){
		$custom_icon = get_seller_user_icon($value['to_user_id']);
		$custom_name = iconv('GBK','UTF-8',get_seller_nickname_by_user_id($value['to_user_id'])); //���صĶ���ҲҪת�룬������תһ��
		$custom_id = $value['to_user_id'];
		$manage_id = $value['send_user_id'];
		$msg_diret = 'send';
	}
	else{
		$custom_icon = get_seller_user_icon($value['send_user_id']);
		$custom_name = iconv('GBK','UTF-8',get_seller_nickname_by_user_id($value['send_user_id']));
		$custom_id = $value['send_user_id'];
		$manage_id = $value['to_user_id'];
		$msg_diret = 'receive';
	}

	//$good_list = $goods_obj->user_goods_list($value['seller_user_id'],array("show"=>1), false,  'goods_id DESC', '0,200');
	$ret['data']['list'][$i]['custom_icon'] = $custom_icon;
	$ret['data']['list'][$i]['custom_name'] = $custom_name;
	$ret['data']['list'][$i]['custom_id'] = $custom_id;
	$ret['data']['list'][$i]['manage_id'] = $manage_id;
	$ret['data']['list'][$i]['msg_diret'] = $msg_diret;
	$ret['data']['list'][$i]['last_connect_day'] = date('Y-m-d',$ret['data']['list'][$i]['send_time']);
	$ret['data']['list'][$i]['last_connect_time'] = date('H:i',$ret['data']['list'][$i]['send_time']);
	//$ret['data']['list'][$k]['good_list'] = $good_list;
}

//����
$ret['data']['list'] = poco_iconv_arr($ret['data']['list'],'UTF-8','GBK');

$tpl->assign('seller_name',$seller_name);
$tpl->assign('this_seller_id',$id);
$tpl->assign('buyer_list',mall_output_format_data($ret['data']['list']));
$tpl->assign('yue_login_id',$yue_login_id);

?>
