define('option_faces/pc/option_faces', function(require, exports, module){ /**
 * Created by nolest on 15/11/11.
 **/
/**
 * @require modules/option_faces/pc/option_faces.scss
 * @require modules/option_faces/pc/emoji_list.scss
 *
 */
// ========= Ä£¿éÒýÈë =========
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
        'kb-emoji-U-E057':'/º©Ð¦',
        'kb-emoji-U-E106':'/É«',
        'kb-emoji-U-E40E':'/·Ü¶·',
        'kb-emoji-U-E40D':'/·¢´ô',
        'kb-emoji-U-E404':'/ßÖÑÀ',
        'kb-emoji-U-E418':'/Ê¾°®',
        'kb-emoji-U-E405':'/¶ºÄã',
        'kb-emoji-U-E059':'/×óºßºß',
        'kb-emoji-U-E058':'/ÄÑ¹ý',
        'kb-emoji-U-E401':'/Àäº¹',
        'kb-emoji-U-E411':'/Á÷Àá',
        'kb-emoji-U-E409':'/°ç¹íÁ³',
        'kb-emoji-U-E416':'/·¢Å­',
        'kb-emoji-U-E406':'/ÔÎ',
        'kb-emoji-U-E40A':'/·¢³î',
        'kb-emoji-U-E417':'/Ç×Ç×',
        'kb-emoji-U-E108':'/Á÷º¹',
        'kb-emoji-U-E412':'/´ó¿Þ',
        'kb-emoji-U-E056':'/¿É°®',
        'kb-emoji-U-E413':'/ºÃ‡å',
        'kb-emoji-U-E105':'/µ÷Æ¤',
        'kb-emoji-U-E40B':'/Ë¥',
        'kb-emoji-U-E40F':'/ºÃôÜ',
        'kb-emoji-U-E410':'/×¥¿ñ',
        'kb-emoji-U-E402':'/»µÐ¦',
        'kb-emoji-U-E107':'/¾ªÑÈ',
        'kb-emoji-U-E408':'/Ë¯',
        'kb-emoji-U-E407':'/ÕÛÄ¥',
        'kb-emoji-U-E00E':'/Ç¿',
        'kb-emoji-U-E421':'/Èõ',
        'kb-emoji-U-E00D':'/³öÈ­',
        'kb-emoji-U-E010':'/È­Í·',
        'kb-emoji-U-E011':'/Ê¤Àû',
        'kb-emoji-U-E41F':'/¹ÄÕÆ',
        'kb-emoji-U-E230':'/Ïò×ó',
        'kb-emoji-U-E22F':'/ÏòÓÒ',
        'kb-emoji-U-E420':'/OK',
        'kb-emoji-U-E022':'/°®ÐÄ',
        'kb-emoji-U-E023':'/ÐÄËé',
        'kb-emoji-U-E04A':'/Ì«Ñô',
        'kb-emoji-U-E04C':'/ÔÂÁÁ',
        'kb-emoji-U-E13D':'/ÉÁµç',
        'kb-emoji-U-E41C':'/×ì´½',
        'kb-emoji-U-E032':'/Ãµ¹å',
        'kb-emoji-U-E045':'/¿§·È',
        'kb-emoji-U-E34B':'/µ°¸â',
        'kb-emoji-U-E047':'/Æ¡¾Æ',
        'kb-emoji-U-E112':'/ÀñÎï',
        'kb-emoji-U-E018':'/×ãÇò',
        'kb-emoji-U-E311':'/Õ¨µ¯'
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
        //´ÖÂÔ×ª»»
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