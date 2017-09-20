define('common/I_WX_SDK/I_WX_SDK', function(require, exports, module){ /**
* ΢�� �ӿ�
*/
var utility = require('common/utility/index');
//΢��debugģʽ���� true | false
var WeiXinDebugMode = false;

var WeiXinSDK =
{
    version : 'default'
};

// Config_data��ʽ ��
// Config_data =
// {
//      appId:appId��
//      timestamp:timestamp��
//      nonceStr:nonceStr��
//      signature:signature
// }
WeiXinSDK.setConfig = function(Config_data)
{

    var data = Config_data;

    wx.config({
        debug: WeiXinDebugMode,   // ��������ģʽ,���õ�����api�ķ���ֵ���ڿͻ���alert��������Ҫ�鿴����Ĳ�����������pc�˴򿪣�������Ϣ��ͨ��log���������pc��ʱ�Ż��ӡ��
        appId: data.appId,        // ������ںŵ�Ψһ��ʶ
        timestamp: data.timestamp,// �������ǩ����ʱ���
        nonceStr: data.nonceStr,  // �������ǩ���������
        signature: data.signature,// ���ǩ��������¼1
        jsApiList: [
            'checkJsApi',
            'chooseImage',
            'previewImage',
            'uploadImage',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'hideMenuItems',
            'showMenuItems',
            'hideAllNonBaseMenuItem',
            'showAllNonBaseMenuItem',
            'getNetworkType',
            'openLocation',
            'getLocation',
            'hideOptionMenu',
            'showOptionMenu',
            'closeWindow',
            'scanQRCode',
            'chooseWXPay',
            'openProductSpecificView'
        ] // �����Ҫʹ�õ�JS�ӿ��б�

    });
};

//ready�ص�
WeiXinSDK.ready = function(callback)
{
    wx.ready(function()
    {
        var Api = this;

        if(typeof callback == 'function')
        {
            callback.call(this,Api);
        }
    });

};

WeiXinSDK.ShareToFriend = function(Share_data)
{
    var data = Share_data;

    console.log(Share_data);

    wx.onMenuShareAppMessage
    ({
        title: Share_data.title, // �������
        desc: Share_data.desc, // ��������
        link: Share_data.link, // ��������
        imgUrl: Share_data.imgUrl, // ����ͼ��
        type: Share_data.type, // ��������,music��video��link������Ĭ��Ϊlink
        dataUrl: Share_data.dataUrl, // ���type��music��video����Ҫ�ṩ�������ӣ�Ĭ��Ϊ��
        success: function () {
            // �û�ȷ�Ϸ����ִ�еĻص�����
            if(Share_data.success && typeof Share_data.success === 'function')Share_data.success();
        },
        cancel: function () {
            // �û�ȡ�������ִ�еĻص�����
            if(Share_data.cancel && typeof Share_data.cancel === 'function')Share_data.cancel();
        }
    })
};

WeiXinSDK.ShareTimeLine = function(Share_data)
{
    var data = Share_data;

    wx.onMenuShareTimeline({
        title: Share_data.title, // �������
        link: Share_data.link, // ��������
        imgUrl: Share_data.imgUrl, // ����ͼ��
        success: function () {
            // �û�ȷ�Ϸ����ִ�еĻص�����
            if(Share_data.success && typeof Share_data.success === 'function')Share_data.success();
        },
        cancel: function () {
            // �û�ȡ�������ִ�еĻص�����
            if(Share_data.cancel && typeof Share_data.cancel === 'function')Share_data.cancel();
        }
    });
};

WeiXinSDK.ShareQQ = function(Share_data)
{
    var data = Share_data;

    wx.onMenuShareQQ({
        title: Share_data.title, // �������
        desc: Share_data.desc, // ��������
        link: Share_data.link, // ��������
        imgUrl: Share_data.imgUrl, // ����ͼ��
        success: function () {
            // �û�ȷ�Ϸ����ִ�еĻص�����
            if(Share_data.success && typeof Share_data.success === 'function')Share_data.success();
        },
        cancel: function () {
            // �û�ȡ�������ִ�еĻص�����
            if(Share_data.cancel && typeof Share_data.cancel === 'function')Share_data.cancel();
        }
    });
};

WeiXinSDK.isWeiXin = function ()
{
    return /MicroMessenger/i.test(navigator.userAgent);
};

WeiXinSDK.hideOptionMenu = function()
{
    wx.hideOptionMenu();
};

WeiXinSDK.showOptionMenu = function()
{
    wx.showOptionMenu();

};

WeiXinSDK.getLocation = function(options)
{
    wx.getLocation({
        success: function (res) {
            //alert("success" + JSON.stringify(res))
            if(options.success && typeof options.success === 'function')options.success(res);
        },
        cancel: function (res) {
            //alert("cancel" + JSON.stringify(res))
            if(options.cancel && typeof options.cancel === 'function')options.cancel(res);
        },
        fail : function(res){
            //alert("fail" + JSON.stringify(res))
            if(options.fail && typeof options.fail === 'function')options.fail(res);
        }
    });
};

/**
 * ����΢��Native��ͼƬ���������
 * �������Բ�������ǿ��⣬����������Ϸ���ֱ�ӻᵼ��΢�ſͻ���crash
 *
 * @param {String} curSrc ��ǰ���ŵ�ͼƬ��ַ
 * @param {Array} srcList ͼƬ��ַ�б�
 */
WeiXinSDK.imagePreview = function (curSrc, srcList)
{

    if (!curSrc || !srcList || srcList.length == 0) {
        return;
    }
    wx.previewImage
    ({
        current: curSrc, // ��ǰ��ʾͼƬ��http����
        urls: srcList // ��ҪԤ����ͼƬhttp�����б�
    });
};

WeiXinSDK.chooseWXPay = function(data,success,fail)
{
    if(data.appId)
    {
        delete data.appId;
    }

    data.timestamp = data.timeStamp;

    var callback =
    {
        success: function(res)
        {
            var code = 0;

            var err_log_src = 'http://www.yueus.com/mobile_app/log/save_log.php?err_level=1&url='+encodeURIComponent(window.location.href);

            var img = new Image();

            if( res.errMsg == 'chooseWXPay:ok' )
            {
                //֧���ɹ�
                code = 1;
            }
            else if( res.errMsg == 'chooseWXPay:cancel' )
            {
                //֧��������
                code = 10;
            }
            else if( res.errMsg == 'chooseWXPay:fail' )
            {
                //֧��ʧ��
                code = -3;

                img.src = err_log_src+'&err_str='+encodeURIComponent(res.errMsg);

                console.log('url='+window.location.href+'&err_str='+res.errMsg);

                alert("֧��ʧ��:"+res.err_msg);

            }
            else
            {
                img.src = err_log_src+'&err_str='+encodeURIComponent(res.errMsg);

                console.log('url='+window.location.href+'&err_str='+res.errMsg);

                alert("֧��ʧ�ܣ��������������ύʧ�ܣ��������Ͻǹرղ����½���");
            }


            if (typeof success == "function")
            {
                success.call(this, {code : code});
            }
        },
        fail: function(res)
        {
            console.log(res);



            if (typeof fail == "function")
            {
                fail.call(this, res);
            }
        },complete : function(res)
        {

            debugger;
        },
        cancel : function(res)
        {

            debugger;
        }
    };

    data = $.extend({},data,callback);

    wx.chooseWXPay(data);

};

WeiXinSDK.chooseImage = function(options)
{
    wx.chooseImage({
        count: options.count, // Ĭ��9
        sizeType: ['original', 'compressed'], // ����ָ����ԭͼ����ѹ��ͼ��Ĭ�϶��߶���
        sourceType: ['album', 'camera'], // ����ָ����Դ����ỹ�������Ĭ�϶��߶���
        success: function (res) {
            //alert("success" + JSON.stringify(res))
            if(options.success && typeof options.success === 'function')options.success(res);
            //var localIds = res.localIds; // ����ѡ����Ƭ�ı���ID�б�localId������Ϊimg��ǩ��src������ʾͼ
        },
        cancel: function (res) {
            //alert("cancel" + JSON.stringify(res))
            if(options.cancel && typeof options.cancel === 'function')options.cancel(res);
        },
        fail : function(res){
            //alert("fail" + JSON.stringify(res))
            if(options.fail && typeof options.fail === 'function')options.fail(res);
        }
    });
}

WeiXinSDK.upload_imgs = function(options)
{
    var index = 0;

    var pics_length = options.localId.length;

    var ProgressTips =  options.isShowProgressTips || 1;// Ĭ��Ϊ1����ʾ������ʾ

    uploadSingle(options);

    var media_list = [];

    function uploadSingle(options)
    {
        wx.uploadImage({
            localId: options.localId[index], // ��Ҫ�ϴ���ͼƬ�ı���ID����chooseImage�ӿڻ��
            isShowProgressTips: ProgressTips,
            success: function (res) {
                // alert("success" + JSON.stringify(res))
                var obj =
                {
                    localId : res.localId,
                    media_id : res.serverId
                }

                media_list.push(obj);

                if(options.success_single && typeof options.success_single === 'function')options.success_single(res,index,pics_length);

                index++;

                if(index >= options.localId.length)
                {
                    //�������д�ͼ��Ļص�
                    if(options.success_all && typeof options.success_all === 'function')options.success_all(media_list,index,pics_length);
                }
                else
                {
                    uploadSingle(options);
                }
            },
            cancel: function (res) {
                //alert("cancel" + JSON.stringify(res))
                if(options.cancel_single && typeof options.cancel_single === 'function')options.cancel_single(res,index,pics_length);
            },
            fail : function(res){
                //alert("fail" + JSON.stringify(res))
                if(options.fail_single && typeof options.fail_single === 'function')options.fail_single(res,index,pics_length);
            }
        });
    }
}

WeiXinSDK.downloadImage = function(options)
{
    if(!options.media_id)throw 'serverId/media_Id error!';

    wx.downloadImage({
        serverId: options.media_id, // ��Ҫ���ص�ͼƬ�ķ�������ID����uploadImage�ӿڻ��
        isShowProgressTips: options.isShowProgressTips || 1, // Ĭ��Ϊ1����ʾ������ʾ
        success: function (res) {
            var localId = res.localId; // ����ͼƬ���غ�ı���ID
            if(options.success && typeof options.success === 'function')options.success(res);
        },
        cancel: function (res) {
            //alert("cancel" + JSON.stringify(res))
            if(options.cancel && typeof options.cancel === 'function')options.cancel(res);
        },
        fail : function(res){
            //alert("fail" + JSON.stringify(res))
            if(options.fail && typeof options.fail === 'function')options.fail(res);
        }
    });
}

WeiXinSDK.chooseImages_and_uploadImages_and_downloadImages = function(options)
{
    var upload_type = options.upload_type || "pics",
        choose_trigger_str = options.choose_trigger_str || "chooseImages",
        choose_count = parseInt(options.choose_count) || 9,
        choose_success = options.choose_success || function(){},
        choose_cancel = options.choose_cancel || function(){},
        choose_fail = options.choose_fail || function(){},
        upload_trigger_str = options.upload_trigger_str || "uploadImages",
        upload_success = options.upload_success || function(){},
        upload_cancel = options.upload_cancel || function(){},
        upload_fail = options.upload_fail || function(){},
        upload_success_all = options.upload_success_all || function(){},
        get_trigger_str = options.get_trigger_str || "getImagesUrl",
        get_imgUrl_beforeSend = options.get_imgUrl_beforeSend || function(){},
        get_imgUrl_success = options.get_imgUrl_success || function(){},
        get_imgUrl_error = options.get_imgUrl_error || function(){},
        get_imgUrl_complete = options.get_imgUrl_complete || function(){}

    var choosen_list = [];

    var media_list = [];

    $(WeiXinSDK).on(choose_trigger_str,function()
    {
        var pic_list = [];

        WeiXinSDK.chooseImage
        ({
            count : choose_count, //ѡͼ����������Ĭ��1��
            success : function(res)
            {
                //alert("success" + JSON.stringify(res))
                //res.sourceType ������� : 'album' ���  || 'camera' ���
                //res.localIds �ص���ͼƬ����
                pic_list = res.localIds;

                choosen_list = pic_list;

                if(choose_success && typeof choose_success === 'function')choose_success(res);
            },
            cancel : function(res)
            {
                if(choose_cancel && typeof choose_cancel === 'function')choose_cancel(res);
            },
            fail : function(res)
            {
                if(choose_fail && typeof choose_fail === 'function')choose_fail(res);
            }
        });
    })

    $(WeiXinSDK).on(upload_trigger_str,function()
    {
        if(choosen_list.length != 0)
        {
            WeiXinSDK.upload_imgs
            ({
                localId : choosen_list, //����localId����[]
                success_single : function(resa,index)
                {
                    var serverId = resa.serverId; // ����ͼƬ�ķ�������ID
                    //alert("success" + JSON.stringify(resa))
                    if(upload_success && typeof upload_success === 'function')upload_success(resa,index,choosen_list.length);
                },
                cancel_single : function(resa,index)
                {
                    if(upload_cancel && typeof upload_cancel === 'function')upload_cancel(resa,index,choosen_list.length);
                },
                fail_single : function(resa,index)
                {
                    if(upload_fail && typeof upload_fail === 'function')upload_fail(resa,index,choosen_list.length);
                },
                success_all : function(media_obj_list,index)
                {
                    media_list = media_obj_list
                    //���ض�������[{localId:"",mediaId:""},{},{}] mediaId�������ظ�ͼ
                    //alert("all" + JSON.stringify(media_obj_list))
                    if(upload_success_all && typeof upload_success_all === 'function')upload_success_all(media_obj_list,index,choosen_list.length);

                }
            })
        }
    })

    $(WeiXinSDK).on(get_trigger_str,function()
    {
        if(media_list.length != 0)
        {
            utility.ajax_request
            ({
                url: window.$__ajax_domain + 'wx_image.php',
                data : {obj_list:media_list,upload_type:upload_type},
                dataType: 'JSON',
                type: 'POST',
                cache: false,
                beforeSend: function()
                {
                    if(get_imgUrl_beforeSend && typeof get_imgUrl_beforeSend === 'function')get_imgUrl_beforeSend();
                },
                success: function(data)
                {
                    if(get_imgUrl_success && typeof get_imgUrl_success === 'function')get_imgUrl_success(data);
                },
                error: function(err)
                {
                    if(get_imgUrl_error && typeof get_imgUrl_error === 'function')get_imgUrl_error(err);
                },
                complete: function()
                {
                    if(get_imgUrl_complete && typeof get_imgUrl_complete === 'function')get_imgUrl_complete();
                }
            });

        }
    })
}

module.exports = WeiXinSDK; 
});