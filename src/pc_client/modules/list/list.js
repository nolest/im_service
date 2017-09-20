/**
 * Created by huanggc on 15/10/9.
 * 
 * ģ�巽��
 *  //������
    handlebarsģ��ʹ�����ǽӿ������÷� style="width:{{percent score "5"}}"
    percent : 
    score ��������
    "5" : ���������ֵ

    //ͼƬ�ߴ�
    data-lazyload-url="{{change_img_size images "260" }}
     change_img_size��������
     images ��ͼƬ����
     "260" : ͼƬ�ߴ�
 */

/**�����ļ���Ҫ��ע����ʹ��**/

/**
 * @require ./list.scss
 **/

// ========= ģ������ ========= 
var $ = require('zepto');
var utility = require('../common/utility/index');
var yue_ui = require('../yue_ui/frozen');
var abnormal = require('../common/widget/abnormal/index');
var LZ = require('../common/lazyload/lazyload');
var _self = $({});

/**
 * ���캯��
 * @param options
 * @param matter 
 * @param event
 */
 function list_item_class(options)
{ 
    var self = this;

    var options = options || {} ;
    //��ȾĿ��
    self.$render_ele = options.ele || {} ;
    //���������ַ
    self.send_url = options.url || "";
    //���ݲ���
    self.ajax_params = options.params || {};
    //ģ�� 
    self.template = options.template || {} ;
    //�Ƿ���lz
    self.is_open_lazyload = options.is_open_lazyload == null ? true:false;
    //�Ƿ���lz����
    self.is_open_lz_opts = options.is_open_lz_opts || "";
    


    self.init(options);
}
list_item_class.prototype =
{
    /**
     * ˢ��
     * [refresh description]
     * @return {[type]} [description]
     */
    refresh   : function()
    {
        var self = this;

        self.page = 1;

        self.action(self.page);
    },
    /**
     * ���ظ���
     * [load_more description]
     * @return {[type]} [description]
     */
    load_more : function()
    {
        var self = this;

        if(self._sending)
        {
            return;
        }

        if(self.has_next_page)
        {
            self.page++;

            self.action(self.page);
        }
        else
        {
            self.$load_more.html('���ײ���');
        }
    },
    /**
     * ��ʼ��
     * @param  {[type]} options [description]
     * @return {[type]}         [description]
     */
    init : function(options)
    {
        var self = this;

        _self.$loading = {};
        self.page = 1 ;
        //����������
        self.$render_ele.append('<div data-role="list"></div>');
        //���һ�м���tips  
        self.$render_ele.append('<div class="ui-list-load-more-btn fn-hide" data-role="load_more">���ڼ���...</div>');

        self.$list_container = self.$render_ele.find('[data-role="list"]');
        self.$load_more = self.$render_ele.find('[data-role="load_more"]');

        // ����elԪ��
        self.$el = self.$render_ele;             

        self.refresh();
        self.window_scroll_more();
    },

    action : function (page)
    {
        var self = this ;

        if(self._sending)
        {
            return;
        }
        //�������������ҳ��
        self.ajax_params = $.extend(self.ajax_params,{page:page});

        _self.ajax_obj = utility.ajax_request 
        ({
            url : self.send_url,
            data : self.ajax_params,
            beforeSend : function()
            {
                self._sending = true;
                _self.$loading = $.loading
                ({
                    content:'������...'
                });

            },
            success : function(data)
            {
                self._sending = false;
                //��ȡ����
                var list_data = data.result_data.list;
                console.log(data);
                //��Ⱦǰ�����¼�
                self.$el.trigger('list_render:before',[self.$list_container,data]);

                _self.$loading.loading("hide");

                //�Ƿ��з�ҳ
                self.has_next_page = data.result_data.has_next_page;

                // �����ݴ��� 
                if(!list_data.length && page == 1)
                {
                    abnormal.render(self.$render_ele[0],{});

                    self.$load_more.addClass('fn-hide');

                    return;
                }
                else
                {
                    self.$load_more.removeClass('fn-hide');
                }

                //�����ݷ���ģ��
                var html_str = self.template
                ({
                    list : list_data
                });
                //������Ⱦ�б�
                self.$list_container.append(html_str);
                //��Ⱦ�����¼�
                self.$el.trigger('list_render:after',[self.$list_container,data,$(html_str)]);

                self.setup_event();
            },
            error : function()
            {
                self._sending = false;
                _self.$loading.loading("hide");
                $.tips
                    ({
                        content:'�����쳣',
                        stayTime:3000,
                        type:'warn'
                    });
            }
        })

    },
    /**
     * ���������¼�
     * @return {[type]} [description]
     */
    window_scroll_more : function()
    {
        var self = this;
        $(window).scroll(function()
        {
            if($(window).scrollTop() + $(window).height() > $(document).height() - 50)
            {
                self.load_more();
            }
        });
    },
    /**
     * ��װ�¼�
     * @return {[type]} [description]
     */
    setup_event : function()
    {
        var self = this;
        //new ���� �½����ö���
        if(self.is_open_lazyload)
        {
            if(!self.lazyloading)
            {
                var lz_options_obj =
                    {
                        size : window.innerWidth
                    };

                if(!self.is_open_lz_opts)  
                {
                    lz_options_obj = {};
                }

                self.lazyloading = new LZ($('body'),lz_options_obj);
            }
            else
            {
                self.lazyloading.refresh();
            }
        }

        //�ж��б�С����Ļ�߶�
        if(self.$render_ele.height()<window.innerHeight)
        {
            self.$load_more.addClass('fn-hide');
        }

    }

}
return list_item_class;