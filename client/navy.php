<?php
include_once 'config.php';

// ========================= 初始化接口 start =======================
if($_INPUT['print'] == 1)
{
    print_r($ret_index_v2['data']);
}


// ========================= 初始化接口 end =======================

// ========================= 区分pc，wap模板与数据格式整理 start  =======================
if(IM_UA_IS_PC == 1)
{

	//****************** pc版 ******************
	include_once './navy-pc.php';
}
else
{
	//****************** wap版 ******************
	include_once './navy-wap.php';

}



// ========================= 最终模板输出  =======================
$tpl->output();


?> 
