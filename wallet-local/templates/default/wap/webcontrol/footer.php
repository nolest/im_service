<?php

/** 
 * footer
 * ��Բ
 * 2015-6-5
 * ������Դ�ļ���λ��ע�⣡ȷ������·����ȡ
 */


include_once('/disk/data/htdocs232/poco/pai/mobile/poco_pai_common.inc.php');

define('MALL_USER_DIR_APP',"../../../../");
include_once MALL_USER_DIR_APP.'common.inc.php';

function _get_wbc_footer($attribs)
{	

	$file_dir = dirname(__FILE__);
	
    global $my_app_pai;
    global $yue_login_id;

	if(preg_match('/yueus.com/',$_SERVER['HTTP_HOST']))
	{
		$tpl	 = $my_app_pai->getView($file_dir . "/footer.tpl.html",true);
	}
	else
	{
		$tpl = new SmartTemplate($file_dir . "/footer.tpl.htm");
	}
	

	$tpl_html = $tpl->result();

	return $tpl_html;
}


?>