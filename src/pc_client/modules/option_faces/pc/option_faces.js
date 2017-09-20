/**
 * Created by nolest on 15/11/11.
 **/
/**
 * @require ./option_faces.scss
 * @require ./emoji_list.scss
 *
 */
// ========= 模块引入 =========
var $ = require('jquery');

var faces_tpl = __inline('./faces_panel.tmpl');

var faces_s_tpl = __inline('./faces-s.tmpl');

var option_faces =
{
    emoji_list:
    {
        'kb-emoji-U-E057':'/憨笑',
        'kb-emoji-U-E106':'/色',
        'kb-emoji-U-E40E':'/奋斗',
        'kb-emoji-U-E40D':'/发呆',
        'kb-emoji-U-E404':'/咧牙',
        'kb-emoji-U-E418':'/示爱',
        'kb-emoji-U-E405':'/逗你',
        'kb-emoji-U-E059':'/左哼哼',
        'kb-emoji-U-E058':'/难过',
        'kb-emoji-U-E401':'/冷汗',
        'kb-emoji-U-E411':'/流泪',
        'kb-emoji-U-E409':'/扮鬼脸',
        'kb-emoji-U-E416':'/发怒',
        'kb-emoji-U-E406':'/晕',
        'kb-emoji-U-E40A':'/发愁',
        'kb-emoji-U-E417':'/亲亲',
        'kb-emoji-U-E108':'/流汗',
        'kb-emoji-U-E412':'/大哭',
        'kb-emoji-U-E056':'/可爱',
        'kb-emoji-U-E413':'/好囧',
        'kb-emoji-U-E105':'/调皮',
        'kb-emoji-U-E40B':'/衰',
        'kb-emoji-U-E40F':'/好糗',
        'kb-emoji-U-E410':'/抓狂',
        'kb-emoji-U-E402':'/坏笑',
        'kb-emoji-U-E107':'/惊讶',
        'kb-emoji-U-E408':'/睡',
        'kb-emoji-U-E407':'/折磨',
        'kb-emoji-U-E00E':'/强',
        'kb-emoji-U-E421':'/弱',
        'kb-emoji-U-E00D':'/出拳',
        'kb-emoji-U-E010':'/拳头',
        'kb-emoji-U-E011':'/胜利',
        'kb-emoji-U-E41F':'/鼓掌',
        'kb-emoji-U-E230':'/向左',
        'kb-emoji-U-E22F':'/向右',
        'kb-emoji-U-E420':'/OK',
        'kb-emoji-U-E022':'/爱心',
        'kb-emoji-U-E023':'/心碎',
        'kb-emoji-U-E04A':'/太阳',
        'kb-emoji-U-E04C':'/月亮',
        'kb-emoji-U-E13D':'/闪电',
        'kb-emoji-U-E41C':'/嘴唇',
        'kb-emoji-U-E032':'/玫瑰',
        'kb-emoji-U-E045':'/咖啡',
        'kb-emoji-U-E34B':'/蛋糕',
        'kb-emoji-U-E047':'/啤酒',
        'kb-emoji-U-E112':'/礼物',
        'kb-emoji-U-E018':'/足球',
        'kb-emoji-U-E311':'/炸弹'
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
        //粗略转换
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