<?php
$task_templates_root = TASK_TEMPLATES_ROOT;

// �°���ҳ�ı���
// hudw 2015.9.7
if(isset($index_template_root))
{
	$task_templates_root = $index_template_root.'/templates/default/';
}

//****************** pc��ͷ��ͨ�� start ******************
$pc_wap = 'wap/';
$tpl = $my_app_pai->getView($task_templates_root.$pc_wap.'/index.tpl.htm');


// ================== pc��ͷ��ͨ�� end ==================
?> 