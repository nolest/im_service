<?php
/**
 * ע�⣡�������ļ�ֻ��ͨ�ó������ã��������и�������
 * �̳�����ͨ���ļ�
 * @copyright 2015-06-26
 */
include_once('/disk/data/htdocs232/poco/pai/mobile/poco_pai_common.inc.php'); 

// ����UA����
$user_agent_arr = mall_get_user_agent_arr();

define('G_MALL_PROJECT_USER_ONLINE_VERSION',0);
define('G_MALL_IM_PROJECT_DIR', '/disk/data/htdocs232/poco/pai/im/client/test');

if($user_agent_arr['is_pc'] == 1 )
{
    //****************** pc�� ******************
    define('G_MALL_PROJECT_USER_ROOT',"http://www.yueus.com/mall/user/test");
    define('G_MALL_PROJECT_USER_INDEX_DOMAIN',"http://www.yueus.com/newindex.php");
}
else
{
	define('G_MALL_PROJECT_USER_ROOT',"http://yp.yueus.com/mall/user/test");
	
}


