define("async_data/user_async",function(a){var n=a("components/jquery/jquery.js"),s={info:[],send_data:[],async_base:[],init:function(a){var n=this;n.ajax_success=a.ajax_success||function(){}},get_info:function(a){var n=this;a&&(n.send_data=a,n._send_ajax(n.send_data))},_send_ajax:function(a){var s=this;n.ajax({url:window.$__ajax_domain+"get_user_info_by_id.php",data:{id_arr:a},dataType:"json",type:"POST",cache:!1,beforeSend:function(){},success:function(a){n.each(a.result_data,function(a,n){s.async_base[n.id]||(s.async_base[n.id]={id:n.id,name:n.name,icon:n.icon})}),"function"==typeof s.ajax_success&&s.ajax_success.call(this,a)},error:function(){s._send_ajax(s.send_data)},complete:function(){}})},set_user_base:function(a){var s=this;n.each(a,function(a,n){s.async_base[n.custom_id]||(s.async_base[n.custom_id]={id:n.custom_id,name:n.custom_name,icon:n.custom_icon})})},get_user_base:function(a){var n=this;return n.async_base[a]}};return s});