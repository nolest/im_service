define("msg_engine/input_engine",function(n){var i=n("components/jquery/jquery.js"),e={dialog:[],init:function(){console.log("engine!!")},put_msg:function(n,i){var e=this,i={id:n,storage:i};e.dialog.push(i)},get_msg:function(n){var e=this,t=[];return i.each(e.dialog,function(i,e){e.id==n&&t.push(e)}),t}};return e});