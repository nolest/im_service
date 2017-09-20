define('option_faces/pc/option_faces', function(require, exports, module){ /**
 * Created by nolest on 15/11/11.
 **/
/**
 * @require modules/option_faces/pc/option_faces.scss
 * @require modules/option_faces/pc/emoji_list.scss
 *
 */
// ========= ģ������ =========
var $ = require('components/jquery/jquery.js');

var faces_tpl = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"options_faces_panel emoji fn-hide\" data-role=\"options_faces_panel\">\r\n\r\n</div>";
  });

var faces_s_tpl = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <div class=\"options_faces_s "
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-emoji-notice=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-emoji-name=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\"></div>\r\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  });

var option_faces =
{
    emoji_list:
    {
        'kb-emoji-U-E057':'/��Ц',
        'kb-emoji-U-E106':'/ɫ',
        'kb-emoji-U-E40E':'/�ܶ�',
        'kb-emoji-U-E40D':'/����',
        'kb-emoji-U-E404':'/����',
        'kb-emoji-U-E418':'/ʾ��',
        'kb-emoji-U-E405':'/����',
        'kb-emoji-U-E059':'/��ߺ�',
        'kb-emoji-U-E058':'/�ѹ�',
        'kb-emoji-U-E401':'/�亹',
        'kb-emoji-U-E411':'/����',
        'kb-emoji-U-E409':'/�����',
        'kb-emoji-U-E416':'/��ŭ',
        'kb-emoji-U-E406':'/��',
        'kb-emoji-U-E40A':'/����',
        'kb-emoji-U-E417':'/����',
        'kb-emoji-U-E108':'/����',
        'kb-emoji-U-E412':'/���',
        'kb-emoji-U-E056':'/�ɰ�',
        'kb-emoji-U-E413':'/�Ç�',
        'kb-emoji-U-E105':'/��Ƥ',
        'kb-emoji-U-E40B':'/˥',
        'kb-emoji-U-E40F':'/����',
        'kb-emoji-U-E410':'/ץ��',
        'kb-emoji-U-E402':'/��Ц',
        'kb-emoji-U-E107':'/����',
        'kb-emoji-U-E408':'/˯',
        'kb-emoji-U-E407':'/��ĥ',
        'kb-emoji-U-E00E':'/ǿ',
        'kb-emoji-U-E421':'/��',
        'kb-emoji-U-E00D':'/��ȭ',
        'kb-emoji-U-E010':'/ȭͷ',
        'kb-emoji-U-E011':'/ʤ��',
        'kb-emoji-U-E41F':'/����',
        'kb-emoji-U-E230':'/����',
        'kb-emoji-U-E22F':'/����',
        'kb-emoji-U-E420':'/OK',
        'kb-emoji-U-E022':'/����',
        'kb-emoji-U-E023':'/����',
        'kb-emoji-U-E04A':'/̫��',
        'kb-emoji-U-E04C':'/����',
        'kb-emoji-U-E13D':'/����',
        'kb-emoji-U-E41C':'/�촽',
        'kb-emoji-U-E032':'/õ��',
        'kb-emoji-U-E045':'/����',
        'kb-emoji-U-E34B':'/����',
        'kb-emoji-U-E047':'/ơ��',
        'kb-emoji-U-E112':'/����',
        'kb-emoji-U-E018':'/����',
        'kb-emoji-U-E311':'/ը��'
    },
    init: function(options)
    {
        var self = this;

        console.log("inbars")
        self.contain = options.bar;

        self.front_sign = options.front_sign || "[";

        self.end_sign = options.end_sign || "]";

        self.choose_a_face = options.choose_a_face || function(){};

        self.render();
    },
    render : function()
    {
        var self = this;

        var frame_str = faces_tpl();

        self.contain.append(frame_str);

        self.panel_obj = $('[data-role="options_faces_panel"]');

        self.render_emoji();

        self._emoji_event();
    },
    _emoji_event : function()
    {
        var self = this;

        self.panel_obj.find('[data-emoji-name]').on('click',function()
        {
            var con = $(this);

            var face = con.attr('data-emoji-name');

            console.log(face);

            console.log(self);

            var for_re = self.parse_str(face);

            if(typeof self.choose_a_face == 'function')self.choose_a_face.call(this,for_re);
        })
    },
    parse_str : function(str)
    {
        var self = this;

        var _str = str;

        _str = _str.replace('/',self.front_sign);

        _str = _str + self.end_sign;

        return _str
    },
    unparse_str : function(str)
    {
        //����ת��
        var self = this;

        var _str = str;

        _str = _str.replace(/[[]/g,'/');

        _str = _str.replace(/[\]]/g,'');

        return _str
    },
    render_emoji : function()
    {
        var self = this;

        var str = faces_s_tpl({data:self.emoji_list});

        self.panel_obj.append(str);
    },
    load : function()
    {

    },
    show : function()
    {
        var self = this;

        self.panel_obj.removeClass('fn-hide');
    },
    hide : function()
    {
        var self = this;

        self.panel_obj.addClass('fn-hide');
    },
    _bind_events : function(id_lib)
    {

    },
    set_faces_choose_callback : function(sels)
    {
        var self = this;

        self.sel = sels;
        self.iEnd = self.sel.anchorOffset;
        self.htmldata = self.sel.anchorNode.data;

    }
}

return option_faces; 
});