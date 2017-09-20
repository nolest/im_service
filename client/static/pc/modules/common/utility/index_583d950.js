define("common/utility/index",function(e){function t(e,t){var o="";t=t||"",o=-1!=n.inArray(t,[120,320,165,640,600,145,440,230,260])?"_"+t:"";var i=/^http:\/\/(img|image)\d*(-c|-wap|-d)?(.poco.cn.*|.yueus.com.*)\.jpg|gif|png|bmp/i,a=/_(32|64|86|100|145|165|260|320|440|468|640).(jpg|png|jpeg|gif|bmp)/i;return i.test(e)&&(e=a.test(e)?e.replace(a,o+".$2"):e.replace("/(.d*).jpg|.jpg|.gif|.png|.bmp/i",o+".jpg")),e}var n=e("components/zepto/zepto.js"),o=n(window),i=window.localStorage,a=e("common/cookie/index"),r=(e("common/ua/index"),e("yue_ui/frozen"),{timeout:1e4});n.extend(n.ajaxSettings,r);var c=parseInt(a.get("yue_member_id")),l=window.location;if(l.origin||(l.origin=l.protocol+"//"+l.hostname+(l.port?":"+l.port:"")),/wifi/.test(l.origin)){l.origin.replace("-wifi","")}else{var s=l.origin.split(".");s[0]+"-wifi."+s[1]+"."+s[2]}window.$_AppCallJSObj=n({}),window._AppCallJSFunc=function(e,t){$_AppCallJSObj.trigger(e,t)},$_AppCallJSObj.on("set_location_cookie",function(e,t){a.set("yue_location_id",t.location_id)});var u={get_view_port_height:function(e){var t=45,n=45,i=o.height();switch(e){case"nav":i-=n;break;case"tab":i-=t;break;case"all":i=i-n-t}return i},get_view_port_width:function(){return o.width()},"int":function(e){return parseInt(e,10)||0},"float":function(e){return parseFloat(e)},format_float:function(e,t){t=t||0;var n=Math.pow(10,t);return Math.round(e*n)/n||0},getHash:function(){return window.location.hash.substr(1)},get_zoom_height_by_zoom_width:function(e,t,n){return parseInt(t*n/e)},storage:{prefix:"poco-yuepai-app-",set:function(e,t){try{return i&&"undefined"!=typeof i?"undefined"==typeof t?u.storage.remove(e):(i.setItem(u.storage.prefix+e,JSON.stringify(t)),t):!1}catch(n){return console.warn(n),!1}},get:function(e){try{var t=i.getItem(u.storage.prefix+e);return t?JSON.parse(t):t}catch(n){return console.warn(n),!1}},remove:function(e){return i.removeItem(u.storage.prefix+e)}},is_empty:function(e){var t=typeof e;switch(t){case"undefined":var n=!0;break;case"boolean":var n=!e;break;case"number":if(e>0)var n=!1;else var n=!0;break;case"string":if(""==e||"0">=e&&!isNaN(parseInt(e)))var n=!0;else var n=!1;break;case"object":if(_.isEmpty(e))var n=!0;else if(e instanceof Array)if(0==e.length)var n=!0;else var n=!1;else{var n=!0;for(var o in e)n=!1}break;default:var n=!1}return n},ajax_request:function(e){var e=e||{},t=e.url,o=e.data||{},i=e.cache||!1,a=e.beforeSend||function(){},r=e.success||function(){},c=e.error||function(){},l=e.complete||function(){},s=e.type||"GET",u=e.dataType||"json",d=null==e.async?!0:!1,p=n.ajax({url:t,type:s,data:o,cache:i,async:d,dataType:u,beforeSend:a,success:r,error:c,complete:l});return p=n.extend(p,{xhr_data:o}),console.log(d),p},auth:{is_login:function(){return u.login_id>0}},matching_img_size:function(e,n){var o=n;return t(e,o)},get_url_params:function(e,t){var n=new RegExp("[?&]"+t+"=([^&]+)","i"),o=n.exec(e);return o&&o.length>1?o[1]:""},page_pv_stat_action:function(e){},err_log:function(e,t,n){var e=e||1,t=encodeURIComponent(t)||encodeURIComponent(window.location.href),n=encodeURIComponent(n)||"",o="http://www.yueus.com/mobile_app/log/save_log.php?from_str=app&err_level="+e+"&url="+t,i=new Image;i.src=o+"&err_str="+n},refresh_page:function(){window.location.reload()},dialog:function(e){var e=e||{},t=n.dialog({title:e.title||"",content:e.content||"��ܰ��ʾ����",button:e.buttons||["ȡ��","ȷ��"]});return t.on("dialog:action",function(e){1==e.index?t.trigger("confirm",e):t.trigger("cancel",e)}).on("dialog:hide",function(t){e.hide&&e.hide.call(this,t)}).on("dialog:show",function(t){e.show&&e.show.call(this,t)}),t},dialog_show:function(e){var e=e||{},t=e.title||"",o=e.content||"",i=Handlebars.template(function(e,t,n,o,i){function a(e,t){var o,i,a="";return a+="\n                    <h4>",(i=n.title)?o=i.call(e,{hash:{},data:t}):(i=e&&e.title,o=typeof i===s?i.call(e,{hash:{},data:t}):i),a+=u(o)+"</h4>\n                "}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var r,c,l="",s="function",u=this.escapeExpression,d=this;return l+='<div class="ui-dialog" data-role="ui-dialog">\n    <div class="ui-dialog-cnt">\n        <div class="ui-dialog-bd">\n            <div>\n                ',r=n["if"].call(t,t&&t.title,{hash:{},inverse:d.noop,fn:d.program(1,a,i),data:i}),(r||0===r)&&(l+=r),l+="  \n                <div>",(c=n.content)?r=c.call(t,{hash:{},data:i}):(c=t&&t.content,r=typeof c===s?c.call(t,{hash:{},data:i}):c),l+=u(r)+'</div>\n            </div>\n        </div>\n        <div class="ui-dialog-ft ui-btn-group">\n            <button type="button" data-role="ui-dialog-button"  class="select" >�ر�</button> \n        </div>\n    </div>\n</div>'}),a=i({title:t,content:o});n("body").append(a);var r=n("body").find('[data-role="ui-dialog"]');return r.addClass("show"),r.find('[data-role="ui-dialog-button"]').on("click",function(e){e.preventDefault(),n(this).removeClass("show"),r.remove()}),r},ajax_request_app:function(e){var t=this;e=e||{};var o={path:e.path,location_id:e.location_id||t.storage.get("location").location_id,user_id:e.user_id||a.get("yue_member_id")};e.url=e.url||window.$__ajax_common_url,e.data=n.extend(o,e.data),e.type=e.type||"POST",t.ajax_request(e)},get_yue_img_size_from_url:function(e){var t="",n="",o=e.match(/\?(.*)/);if(!o)return{width:t,height:n};if(o[1]){var i=o[1],a=i.match(/(\d+)x(\d+)_(\d+)/);return a[1]&&(t=a[1]),a[2]&&(n=a[2]),{width:t,height:n}}return{width:t,height:n}},$_AppCallJSObj:$_AppCallJSObj,login_id:c||0,location_id:"0"},d=e("common/I_APP/I_APP");d.isPaiApp&&d.closeloading();var p={location_id:101029001,location_name:"����"},g=u.storage.get("location");return g||u.storage.set("location",p),window.__Util_Tools=u,u});