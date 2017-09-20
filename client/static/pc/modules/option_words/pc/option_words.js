define('option_words/pc/option_words', function(require, exports, module){ /**
 * Created by nolest on 15/12/08.
 **/
/**
 * @require modules/option_words/pc/option_words.scss
 *
 */
// ========= 模块引入 =========
var $ = require('components/jquery/jquery.js');

var words_panel_tpl = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"ds-box orient-v options_words_panel fn-hide\" data-role=\"options_words_panel\">\r\n    <div class=\"ds-box words_part_head pack-justify\">\r\n        <div class=\"ds-box tags flex-1 align-center\"  data-role=\"options_words_tags\"></div>\r\n        <div class=\"ds-box pack-center align-center go_to_edit\" data-role=\"go_to_edit\">编辑</div>\r\n    </div>\r\n    <div class=\"words_part_body\" data-role=\"options_words_body\">\r\n        <div class=\"text_body_empty\">----未选择日常用语标签----</div>\r\n    </div>\r\n</div>";
  }); //主体界面模板

var words_empty_tpl = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"ds-box pack-center words_part_empty\">----该商家没有标签----</div>";
  }); //标签空模板

var words_tag_tpl = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n    <div class=\"inner_tags\" data-tag-id=\"";
  if (helper = helpers.tag_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.tag_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.tag_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.tag_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }); //标签模板

var words_text_item_tpl = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n    <div class=\"ds-box pack-justify words_text_item align-center\" data-text-id=\"";
  if (helper = helpers.text_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.text_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n        <div class=\"ds-box inner_text flex-1\" data-send-text=\"";
  if (helper = helpers.text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n        <div class=\"inner_send\" data-role=\"text-send\">发送</div>\r\n    </div>\r\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });  //日常用语列表模板

var words_text_empty_tpl =  Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"ds-box pack-center words_text_part_empty\">----该标签没有日常用语----</div>";
  }); //日常用语空模板

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
});