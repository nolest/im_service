<?php

//****************** pc��ͷ��ͨ�� start ******************
$pc_wap = 'pc/';
$tpl = $my_app_pai->getView(TASK_TEMPLATES_ROOT.$pc_wap.'edit_words/edit_words.tpl.htm');
$goods_obj = POCO::singleton ( 'pai_mall_operate_agent_class' );
// ================== pc��ͷ��ͨ�� end ==================

/*
     * ��ȡһ������Ա������Ч���̼��б�
     *
     * @param string $admin_user_id    ����ԱID
     * @param string $b_select_count   �Ƿ񷵻�������TRUE�������� FALSE�����б�
     * @param string $limit     ��ҳ
     * @return array|int
*/

$tag_ret = $goods_obj->get_usual_tag_list(false, $yue_login_id, $limit = '0,1000', $order_by = 'tag_id DESC');

foreach($tag_ret as $g=>$value)
{
	$words_tags[$g]['tag_id'] = $value['tag_id'];
	$words_tags[$g]['tag_name'] = $value['tag_name'];
	$words_tags[$g]['list'] = $goods_obj->get_usual_text_list(false, $value['tag_id'], $limit = '0,1000', $order_by = 'text_id DESC');
}

$tpl->assign('words_tags',mall_output_format_data($words_tags));
$tpl->assign('yue_login_id',$yue_login_id);

?>
