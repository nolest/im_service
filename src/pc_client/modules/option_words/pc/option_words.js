/**
 * Created by nolest on 15/12/08.
 **/
/**
 * @require ./option_words.scss
 *
 */
// ========= 模块引入 =========
var $ = require('jquery');

var words_panel_tpl = __inline('./words_panel.tmpl'); //主体界面模板

var words_empty_tpl = __inline('./words_empty.tmpl'); //标签空模板

var words_tag_tpl = __inline('./words_tag.tmpl'); //标签模板

var words_text_item_tpl = __inline('./words_text_item.tmpl');  //日常用语列表模板

var words_text_empty_tpl =  __inline('./words_text_empty.tmpl'); //日常用语空模板

var option_words =
{
    init: function(options)
    {
        var self = this;

        console.log("in_words");

        self.contain = options.bar;

        self.render_lib = options.data.result_data;

        self.click_send = options.click_send || function(){};

        self.click_edit = options.click_edit || function(){};

        self.render();
    },
    render : function()
    {
        var self = this;

        var frame_str = words_panel_tpl();

        self.contain.append(frame_str);

        self.panel_obj = $('[data-role="options_words_panel"]');

        self.tags_con = self.panel_obj.find('[data-role="options_words_tags"]');

        self.text_list_con = self.panel_obj.find('[data-role="options_words_body"]');

        self._render_tags();

        self._bind_events();
    },
    _render_tags : function()
    {
        var self = this;

        self.tags_con.append(words_tag_tpl({data : self.render_lib}));
    },
    _render_text_list : function()
    {
        var self = this;
    },
    show : function()
    {
        var self = this

        self.panel_obj.removeClass('fn-hide');
    },
    hide : function()
    {
        var self = this

        self.panel_obj.addClass('fn-hide');
    },
    _bind_events : function(id_lib)
    {
        var self = this;

        self.panel_obj.find('[data-tag-id]')
            .unbind('click')
            .on('click',function()
            {
                var con = $(this);

                var tag_id = con.attr('data-tag-id');

                var str = '';

                con.siblings().removeClass('current');

                con.addClass('current');

                for(var i in self.render_lib)
                {
                    if(self.render_lib[i].tag_id == tag_id)
                    {
                        if(self.render_lib[i].list.length != 0)
                        {
                            str = words_text_item_tpl({data:self.render_lib[i].list})
                        }
                        else
                        {
                            str = words_text_empty_tpl({});
                        }
                    }
                }

                self.text_list_con.html(str);

                self._bind_item_event();
            })

        self.panel_obj.find('[data-role="go_to_edit"]').on('click',function()
        {
            if (typeof (self.click_edit) == 'function')self.click_edit.call(this);
        })

//        self.panel_obj.find('[data-role="go_to_edit"]').on('click',function()
//        {
////            $.ajax
////            ({
////                url: window.$__ajax_domain + 'words_tags_control.php',
////                data : {control_type:'add',tag_name:'咨询？'},
////                dataType: 'json',
////                type: 'POST',
////                cache: false,
////                beforeSend: function()
////                {
////
////                },
////                success: function(data)
////                {
////                    console.log(data)
////                },
////                error: function(data)
////                {
////
////                },
////                complete: function()
////                {
////
////                }
////            });
//
//            $.ajax
//            ({
//                url: window.$__ajax_domain + 'words_text_control.php',
//                data : {control_type:'add',text:'某某某某某某某某某',tag_id:'6'},
//                dataType: 'json',
//                type: 'POST',
//                cache: false,
//                beforeSend: function()
//                {
//
//                },
//                success: function(data)
//                {
//                    console.log(data)
//                },
//                error: function(data)
//                {
//
//                },
//                complete: function()
//                {
//
//                }
//            });
//        })

        self.panel_obj.find('[data-role="service_send"]').on('click',function()
        {
            var con = $(this);

            var passer ;
            $.each(id_lib, function (i, obj)
            {
                if(obj.goods_id == con.parents('[data_goods_id]').attr('data_goods_id'))
                {
                    passer = obj
                }
            });
            if (typeof (self.click_send) == 'function')self.click_send.call(this,passer);
        });

        self.panel_obj.find('[data-role="service_goto"]').on('click',function()
        {
            if (typeof (self.click_link) == 'function')self.click_link.call(this,this);
        })
    },
    _bind_item_event : function()
    {
        var self = this;

        self.panel_obj.find('[data-role="text-send"]').on('click',function()
        {
            var con = $(this);

            var text = con.siblings('[data-send-text]').attr('data-send-text');

            console.log(text);

            if (typeof (self.click_send) == 'function')self.click_send.call(this,text);
        })


    }
}

return option_words;