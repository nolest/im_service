<?php
include_once 'config.php';
include_once('/disk/data/htdocs232/poco/pai/mobile/poco_pai_common.inc.php');
include_once '../api_rest.php';

// ========================= ��ʼ���ӿ� start =======================

// ========================= ��ʼ���ӿ� end =======================


// ========================= ����pc��wapģ�������ݸ�ʽ���� start  =======================
$obj = POCO::singleton('pai_mall_operate_agent_class');
$c_ret = $obj->check_permit($yue_login_id);

if(!$c_ret)
{
	dump('id:'.$yue_login_id);
	dump('��Ȩ��');
	die();
}
if(IM_UA_IS_PC == 1)
{

    //****************** pc�� ******************
    include_once './face-pc.php';
}
else
{
    //****************** wap�� ******************
    include_once './face-wap.php';
}



// ========================= ����ģ�����  =======================
$tpl->output();
?>
