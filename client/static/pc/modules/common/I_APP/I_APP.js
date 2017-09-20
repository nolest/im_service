define('common/I_APP/I_APP', function(require, exports, module){ /**
* App �ӿ�
*/
var $ = require('components/zepto/zepto.js');
var utility = require('common/utility/index');
var ua = require('common/ua/index');
var frozen = require('yue_ui/frozen');

var appBridge = window.PocoWebViewJavascriptBridge;

var isPaiApp = typeof appBridge !== 'undefined';

if(!ua.is_yue_app)
{
    isPaiApp = false;
}

// app ��תЭ��
var app_protocol = 'yueyue://goto';

var prefix = 'poco.yuepai.';

if (isPaiApp) {
	appBridge.init();

	// ���ӿڱ�app����
	var pocoAppEventTrigger = $({});
	window.pocoAppEventTrigger = function() {
		return pocoAppEventTrigger.trigger.apply(pocoAppEventTrigger, arguments);
	};
}

var App = {
	isPaiApp: isPaiApp,

	on: function() {
		if (!App.isPaiApp) {
			return;
		}
		return pocoAppEventTrigger.on.apply(pocoAppEventTrigger, arguments);
	},
	off: function() {
		if (!App.isPaiApp) {
			return;
		}
		return pocoAppEventTrigger.off.apply(pocoAppEventTrigger, arguments);
	},
	once: function() {
		if (!App.isPaiApp) {
			return;
		}
		return pocoAppEventTrigger.once.apply(pocoAppEventTrigger, arguments);
	},
	/**
	 * ˽��
	 * @param options
	 */
	chat : function(options)
	{
		var self = this;

		appBridge.callHandler(prefix+'function.chat', options, function()
		{
			typeof options.callback == 'function' && options.callback.call(this);
		});
	},
	/**
	 * ɨ��ά��
	 */
	qrcodescan : function(options)
	{
		var self = this;

		var options = options || {};

		var is_nav_page = (options.is_nav_page == null)?true : false;

		var success = options.success || function(){};

		appBridge.callHandler(prefix+'function.qrcodescan', options, function(data)
		{
			if(data.code == "0000")
			{
				// ����location����
				var href = data.scanresult;

                __Util_Tools.ajax_request_app
				({
                    path : 'customer/code_processing.php',
                    data :
                    {
                        access_token : window.__YUE_APP_USER_INFO__.token,
                        code_data : href

                    },
					beforeSend : function()
					{
                        self.$loading = $.loading
                        ({
                            content:'������...'
                        });
					},
					success : function(response)
					{
						var res = response;

                        self.$loading.loading("hide");

                        $.tips
                        ({
                            content:res.data.msg,
                            stayTime:3000,
                            type:'warn'
                        });

						if(res.code == 200)
						{
							// ����ɨ��������ҳ
							success.call(this,res);

                            if(res.data.url)
                            {
                                window.location.href = res.data.url;
                            }


						}

					},
					error : function()
					{
                        self.$loading.loading("hide");

                        $.tips
                        ({
                            content:'�����쳣',
                            stayTime:3000,
                            type:'warn'
                        });
					}
				});


			}

			//typeof options.callback == 'function' && options.callback.call(this,data);
		});
	},
	/**
	 * ����Ƿ��¼
	 * @param callback
	 */
	check_login : function(callback)
	{


		appBridge.callHandler(prefix+'info.login',
		{


		}, function(poco_id,locationid)
		{
			callback.call(this,poco_id,locationid);
		});
	},
	/**
	 * ��¼
	 */
	login : function(options)
	{
		var self = this;

		var options = options || {};

		appBridge.callHandler(prefix+'function.login',
		{
			pocoid : options.pocoid,
			username : options.username,
			icon : options.icon,
			token : options.token,
			token_expirein : options.token_expirein

		}, function()
		{


		});
	},
	/**
	 * �˳���¼
	 * @param options
	 */
	logout : function()
	{
		var self = this;

		console.log('APP logout');

		appBridge.callHandler(prefix+'function.logout',
		{

		}, function()
		{


		});
	},
	/**
	 * �����豸
	 */
	save_device : function(tag,callback)
	{
		var self = this;

		var tag = tag || false;

		appBridge.callHandler(prefix+'info.device',{},
		function(data)
		{
			console.log(data);

			data = $.extend(data,{user_id : utility.login_id});

			if(!tag)
			{
				utility.ajax_request
				({
					url : global_config.ajax_url.a_img,
					data : data
				});
			}
			else
			{
				if(typeof callback == 'function')
				{
					callback.call(this,data);
				}



			}

		});
	},
	/**
	 * ��ȡ������Ϣ
	 * @param callback
	 */
	get_chat_info : function(callback)
	{
		var self = this;

		appBridge.callHandler(prefix+'info.chat',{},
		function(data)
		{
			if(typeof callback == 'function')
			{
				callback.call(this,data);
			}

		});
	},
	/**
	 * ��ȡ��¼��Ϣ
	 * @param success
	 */
	get_login_info : function(success)
	{
		var self = this;

		appBridge.callHandler(prefix+'info.login',{},
		function(data)
		{
			if(typeof success == 'function')
			{
				success.call(this,data);
			}


		});
	},
	/**
	 * ֧����֧��
	 * @param params
	 */
	alipay : function(params,callback)
	{
		var self = this;

		if(!params)
		{
			alert('no params');

			return;
		}

		console.log(params);

		appBridge.callHandler(prefix+'function.alipay',params,
		function(data)
		{
			console.log('======֧����֧���ص�����======');
			console.log(data);

			if(typeof callback == 'function')
			{
				callback.call(this,data);
			}
		});
	},
	/**
	 * ΢��֧��
	 * @param params
	 */
	wxpay : function(params,callback)
	{
		var self = this;

		if(!params)
		{
			alert('no params');

			return;
		}

		console.log(params);

		appBridge.callHandler(prefix+'function.wxpay',params,
			function(data)
			{
				console.log('======΢��֧���ص�����======');
				console.log(data);

				if(typeof callback == 'function')
				{
					callback.call(this,data);
				}
			});
	},
	/**
	 * �ϴ�ͼƬ
	 * @param params
	 * @param callback
	 */
	upload_img : function(type,params,callback)
	{
		var self = this;

		console.log('upload img');

		var url = '';
		var photosize = params.photosize || 640;

		//var domain = 'http://imgup-yue.yueus.com';

		var is_wifi = window.APP_NET_STATUS == 'wifi'?'-wifi':'';

		console.log('net status:'+window.APP_NET_STATUS);

		var icon_domain = 'http://sendmedia-w'+is_wifi+'.yueus.com:8078/';
		var pics_domain = 'http://sendmedia-w'+is_wifi+'.yueus.com:8079/';

		if(!params)
		{
			alert('no params');

			return;
		}

		if(!type)
		{
			alert('no type');

			return;
		}

		var operation = '';
		var src_opts = '';

		//url = domain + '/ultra_upload_service/yueyue_upload_user_icon_act.php';

		switch (type)
		{
			case 'header_icon':

				url = icon_domain + 'icon.cgi';
				operation = 'modify_headicon';
				src_opts = 'camera_album';
				break;
			case 'single_img':
				url = pics_domain + 'upload.cgi';
				src_opts = 'camera_album';
				break;
			case 'modify_cardcover':
				url = pics_domain + 'upload.cgi';
				operation = 'modify_cardcover';
				src_opts = 'camera_album';
				break;
			case 'multi_img':
				 /*if(params.is_zip == 1)
				 {
					 url = domain + '/ultra_upload_service/yueyue_multi_upload_act.php';
				 }
				 else
				 {
					url = domain +  '/ultra_upload_service/yueyue_upload_act.php';
				 }*/

				url = pics_domain + 'upload.cgi';
				src_opts = 'camera_album';

				break;
		}


		params = $.extend(params,{url:url,photosize : photosize,operation:operation,src_opts : src_opts});

		console.log('-----upload img params-----');
		console.log(params);

		appBridge.callHandler(prefix+'function.uploadpic',params,
			function(data)
			{
				callback.call(this,data);
			});




	},
	/**
	 * �������б�
	 */
	show_chat_list : function()
	{

		appBridge.callHandler(prefix+'function.openchatlist',{},
		function()
		{

		});
	},
	/**
	 * ����ģʽ
	 * url�������Ե���ҳ����
	   cache_onoff���Ƿ������棬0�رգ�1����
	   debug��0/1 ,�Ƿ����õ���ģʽ��0�رգ�1����
	 */
	debug : function(options)
	{
		var data = data || {};

		if(options.cache)
		{
			data.url = global_config.romain;
		}
		else
		{
			data.url = global_config.debug_romain;
		}

		data.debug = options.debug ? 1 : 0;

		data.cache_onoff = options.cache ? 1 : 0;

		appBridge.callHandler(prefix+'function.debug',data,
		function()
		{

		});
	},
	/**
	 * �Ŵ�ͼ
     * data => Array
     * data =
     * {
     *     img_arr:
     *     [
     *        {
     *          url : '',
     *          text : ''
     *        },...
     *     ]
     *     index : '' ��ǰͼƬ����ֵ
     * };
	 * @param data
	 */
	show_alumn_imgs : function(data)
	{
		var data = data || {};

		appBridge.callHandler(prefix+'function.show_album_imgs',data,
		function()
		{

		});
	},
	/**
	 * ��ȡ����״̬
	 * @param callback
	 */
	get_netstatus : function(callback)
	{

		appBridge.callHandler(prefix+'info.netstatus',{},
		function(data)
		{
			console.log("===========���� App ��ȡ����״̬===========");
			console.log(data);
			//type off��wifi��mobile

			if(typeof callback == 'function')
			{
				callback.call(this,data);
			}
		});
	},
	/**
	 * ��������¼
	 * @param params
	 * @param callback
	 * ���������
	   platform��qzone/sina
	   ���ز�����
	   code��0000-�ɹ���1000-ʧ��
	   message��������Ϣ
	   uid���û�id
	   token������
	   tokensecret��
	 */
	sso_login : function(params,callback)
	{

		appBridge.callHandler(prefix+'function.bind_account',params,
		function(data)
		{
			if(typeof callback == 'function')
			{
				callback.call(this,data);
			}
		});
	},
	/**
	 * ��绰
	 * @param params
	 * number : �绰����
	 *
	 */
	call_phone : function(params,callback)
	{
		appBridge.callHandler(prefix+'function.callphone',params,
		function(data)
		{
			if(typeof callback == 'function')
			{
				callback.call(this,data);
			}
		});
	},
	/**
	 * ��ȡ������Ϣ
	 * @param params
	 * @param callback
	 * return
	 *
		code��0000-�ɹ���1000-ʧ�ܣ�1002-��ʱ
	 ����long������
	 ����lat��γ��
	 */
	get_gps : function(params,callback)
	{
		appBridge.callHandler(prefix+'function.getgps',params,
			function(data)
			{
				if(typeof callback == 'function')
				{
					callback.call(this,data);
				}
			});
	},
	/**
	 * �������
	   ���������
	   msgvibrate���յ���Ϣʱ�ֻ��� 0/1
	   msgsound���յ���Ϣʱ������ʾ 0/1
	   ���ز�������
	 * @param params
	 * @param callback
	 */
	set_setting : function(params,callback)
	{
		appBridge.callHandler(prefix+'function.setting',params,
			function(data)
			{

				if(typeof callback == 'function')
				{
					callback.call(this,data);
				}
			});
	},
	/**
	 * ��ȡ�������

	   �����������
	   ���ز�����
	   msgvibrate���յ���Ϣʱ�ֻ��� 0/1
	   msgsound���յ���Ϣʱ������ʾ 0/1
	   remote_notify_setting���Ƿ������Ϣ 0/1 (iphone)
	 * @param params
	 * @param callback
	 */
	get_setting : function(params,callback)
	{
		appBridge.callHandler(prefix+'info.setting',params,
			function(data)
			{
				console.log(data)

				if(typeof callback == 'function')
				{
					callback.call(this,data);
				}
			});
	},
	/**
	 * �����ȥ�������
	 */
	clear_cache : function()
	{
		appBridge.callHandler(prefix+'function.clearcache',{},
			function(data)
			{


			});
	},
   
	/**
	 * ���ߵײ�bar
	 */
	show_bottom_bar : function(show)
	{
		console.log('function.showbottombar')

		appBridge.callHandler(prefix+'function.showbottombar',{show:show},
			function(data)
			{


			});
	},
	/**
	 *  ���app����
		poco.yuepai.function.checkupdate
		�����������
		���ز�������
	 */
	check_update : function()
	{
		appBridge.callHandler(prefix+'function.checkupdate',{},
			function(data)
			{


			});
	},
	/**
	 *   ģ��app���ؼ�
		 poco.yuepai.function.back
		 �����������
		 ���ز�������
	 */
	app_back : function()
	{
		console.log('���� App Back Function');

		window.AppCanPageBack = true;

		//alert('���� ���� App Back Function');

		appBridge.callHandler(prefix+'function.back',{},
			function(data)
			{


			});
	},
	/**
	 * ��ȡapp��Ϣ ��Ҫ������ʾ���
	 */
	app_info : function(callback)
	{
		console.log('App app-info');

		appBridge.callHandler(prefix+'info.app',{},
		function(data)
		{
			console.log(data)

			if(typeof callback == 'function')
			{
				callback.call(this,data);
			}
		});
	},
	/**
	 * ��תҳ��
	 * @param options
	 * @param callback
	 */
	switchtopage : function(options,callback)
	{
		console.log('App switchtopage');

		appBridge.callHandler(prefix+'function.switchtopage',options,
			function(data)
			{
				console.log(data)

				if(typeof callback == 'function')
				{
					callback.call(this,data);
				}
			});
	},
	/**
	 * �������
	 * @param options
	 * @param callback
	 */
	share_card : function(options,callback)
	{
		var self = this;

		var option = options || {};

		console.log("share_card����ǰ������" + option);
		appBridge.callHandler(prefix+'function.sharecard',
			{
				url : option.url,
				pic : option.pic || option.img,
				img : option.pic || option.img,
				content : option.content,
				title : option.title,
				sinacontent : option.sinacontent,
				userid : option.userid,
				qrcodeurl : option.qrcodeurl,
				jscbfunc  : option.jscbfunc || function(){},
				sourceid  : option.sourceid || 0

			},
			function(data)
			{
				console.log("share_card�ص���" + data);
				if(typeof callback == 'function')
				{
					callback.call(this,data);
				}
			});
	},
	/**
	 *   ͳ�Ʒ���
	 *   29.���ͳ��
		 poco.yuepai.function.eventtongji
		 ���������
		 id��ͳ��id
		 str�����Ӳ���
		 ���ز�����
		 ��

		 30.ģ��ͳ��
		 poco.yuepai.function.moduletongji
		 ���������
		 pid��ҳ��id
		 mid��ģ��id
		 dmid���id
		 vid����������id
		 jid������id
		 rm����ע��Ϣ
		 ���ز�����
		 ��
	 */
	analysis : function(tj_type,options,callback)
	{
		var self = this;

		var options = options || {};

		var tj_type = tj_type || '';

		console.log('analysis ����ǰ����:'+JSON.stringify(options));

		switch(tj_type)
		{
			case 'eventtongji':
				appBridge.callHandler(prefix+'function.eventtongji',options,
				function(data)
				{
					console.log('analysis �ص�����:'+data);

					if(typeof callback == 'function')
					{
						callback.call(this,data);
					}
				});
				break;
			case 'moduletongji':
				appBridge.callHandler(prefix+'function.moduletongji',options,
				function(data)
				{
					console.log('analysis �ص�����:'+data);

					if(typeof callback == 'function')
					{
						callback.call(this,data);
					}
				});
				break;
		}
	},
	/**
	 * ������appҳ�淽��
	 * @param params
	 */
	nav_to_app_page : function(params)
	{
		var self = this;

		var params = params || {};

		var page_type = params.page_type || '';

		params.type = params.jump_type || 'inner_app';

		var pid = 0;

		switch(page_type)
		{
            case 'comment' :
                params.goods_id = params.goods_id || '';
                params.order_sn = params.order_sn || '';

                var pid = '1220121';
                break;
            case 'seller_user':
                params.seller_user_id = params.seller_user_id || '';
                params.user_id = utility.login_id || '';

                var pid = '1220103';
                break;
            case 'goods':
                params.goods_id = params.goods_id || '';
                params.user_id = utility.login_id || '';

                var pid = '1220102';
                break;
		}

		params.pid = pid;

		if(!pid)
		{
			alert('�Ƿ�ҳ��������޷���ת');

			return;
		}

		// ɾ������Ҫ�ֶ�
		delete params.page_type;

		params_str = $.param(params);

		var url = app_protocol + '?' + params_str;

		console.log('======== jump app protocol params ========');
		console.log(params_str);

		appBridge.callHandler(prefix+'function.openlink',{url : url},
		function(data)
		{
			console.log('nav_to_app_page �ص�����:'+data);

			if(typeof callback == 'function')
			{
				callback.call(this,data);
			}
		});
	},
	/**
	 * ��app��¼ҳ��
	 * @param callback
	 */
	openloginpage : function(callback)
	{
		console.log('App openloginpage');

		appBridge.callHandler(prefix+'function.openloginpage',{},
			function(data)
			{
				console.log(data)

				if(typeof callback == 'function')
				{
					callback.call(this,data);
				}
			});
	},
	/**
	 * ��tt ҳ��
	 * @param callback
	 */
	openttpayfinish : function(callback)
	{
		console.log('App ttpayfinish');

		appBridge.callHandler(prefix+'function.ttpayfinish',{},
			function(data)
			{
				console.log(data)

				if(typeof callback == 'function')
				{
					callback.call(this,data);
				}
			});
	},
	/**
	 * �ر�webview
	 * @param callback
	 */
	close_webview : function(callback)
	{
		console.log('App close_webview');

		appBridge.callHandler(prefix+'function.close',{},
			function(data)
			{
				console.log(data)

				if(typeof callback == 'function')
				{
					callback.call(this,data);
				}
			});
	},
    closeloading : function(options,callback)
    {
        console.log('App closeloading');

        appBridge.callHandler(prefix+'function.closeloading',{},
            function(data)
            {
                console.log(data)

                if(typeof callback == 'function')
                {
                    callback.call(this,data);
                }
            });
    },
    /**
     *
     * @param options
     * @param callback
     * return
     * code��0000-��½�ɹ���1001-ȡ��
       locationid��location id
       city��������
     */
    show_selectcity : function(options,callback)
    {
        console.log('App selectcity');

        appBridge.callHandler(prefix+'function.selectcity',{},
            function(data)
            {
                console.log(data)

                if(typeof callback == 'function')
                {
                    callback.call(this,data);
                }
            });
    },
    /**
     * ��app�鿴��ά��
     * ���������
     qrcodelist����ά���б�json��ʽ
     ��ʽ��
     qrcodes:
     [{
            url : 'xxxx',
            name: 'xxxx'
            number:'xxxx'
         },{
            url : 'xxxx',
            name: 'xxxx'
            number:'xxxx'
         }]
     index��������һ�Ŷ�ά��

     * @param callback
     */
    qrcodeshow : function(qrcodes,index,callback)
    {
        console.log('App qrcodeshow');

        index = index || 0;

        appBridge.callHandler(prefix+'function.qrcodeshow',{qrcodes : qrcodes,index:index},
            function(data)
            {
                console.log(data)

                if(typeof callback == 'function')
                {
                    callback.call(this,data);
                }
            });
    },
    /**
     * ��ͷ���˵�����
     * @param options
     * @param callback
     * type����ʾ���ͣ�0������ʾ��1����ʾ���ޡ��˵�����ť�� 2����ʾ���С��˵�����ť
     */
    showtopmenu : function(is_show,options,callback)
    {
        console.log('App showtopbar');

        options = options || {};

        options.type = is_show ? 2 : 1;

        if(options.show_bar)
        {
            options.type = 0;
        }

        appBridge.callHandler(prefix+'function.showtopbar',options,
            function(data)
            {
                console.log(data)

                if(typeof callback == 'function')
                {
                    callback.call(this,data);
                }
            });
    }




};

return App; 
});