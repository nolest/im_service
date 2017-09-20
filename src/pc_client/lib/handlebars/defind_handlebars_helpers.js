Handlebars.registerHelper('compare', function(left, operator, right, options) {
    if (arguments.length < 3) {
        throw new Error('Handlerbars Helper "compare" needs 2 parameters');
    }
    var operators = {
        '==':     function(l, r) {return l == r; },
        '===':    function(l, r) {return l === r; },
        '!=':     function(l, r) {return l != r; },
        '!==':    function(l, r) {return l !== r; },
        '<':      function(l, r) {return l < r; },
        '>':      function(l, r) {return l > r; },
        '<=':     function(l, r) {return l <= r; },
        '>=':     function(l, r) {return l >= r; },
        'typeof': function(l, r) {return typeof l == r; }
    };

    if (!operators[operator]) {
        throw new Error('Handlerbars Helper "compare" doesn\'t know the operator ' + operator);
    }

    var result = operators[operator](left, right);

    if (result) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});


/**
 * �ж�����ָ�Ƿ���� (��׼ȷ��Ҫ��չ�Ż�)
 * @param a
 * @param b
 * @param options
 * @returns {*}
 */
Handlebars.registerHelper('if_equal', function(a,b,options) {
    if(a == b)
    {
        return options.fn(this);
    }
    else
    {
        return options.inverse(this);
    }

});

Handlebars.registerHelper('percent', function(a,b,options) {
    if (arguments.length < 2) {
        throw new Error('Handlerbars Helper "to%" needs 2 parameters');
    }

    return (Math.round((a/b)*100) + '%')

});

/**
 * ת��ָ��ͼƬsize������ԼԼ��ͼƬ
 * ���� {{change_img_size images "260" }} ==>ת��260��ͼ
 * @param  {[type]} img_url [description]
 * @param  {[type]} size)   {               if (!img_url) {        throw new Error('Handlerbars Helper change_img_size function has no "img_url" params');    }    if (!size) {        throw new Error('Handlerbars Helper change_img_size function has no "size" params');    }    size [description]
 * @return {[type]}         [description]
 */
Handlebars.registerHelper('change_img_size', function(img_url,size) {
    if (!img_url) {
        throw new Error('Handlerbars Helper change_img_size function has no "img_url" params');
    }

    if (!size) {
        throw new Error('Handlerbars Helper change_img_size function has no "size" params');
    }    

    return __handlebars_change_img_resize(img_url,size);

});

//ע������+1��helper
Handlebars.registerHelper("add_one",function(index){
  //����+1��ʱ�����ڸ���ѭ�����������һ��_index���ԣ��������游��ÿ��ѭ��������
  this._index = index;
  //����+1֮��Ľ��
  return this._index;
});

/**
 * �л�ͼƬsize
 * @param img_url
 * @param size
 * @returns {*}
 */
function __handlebars_change_img_resize(img_url,size)
{
    var size_str = '';

    size = size || '';

    size = parseInt(size,10);

    if($.inArray(size, [120,320,165,640,600,145,440,230,260]) != -1)
    {
        size_str = '_' +size;
    }
    else
    {
        size_str = '';
    }
    // ����img_url

    var url_reg = /^http:\/\/(img|image)\d*(-c|-wap|-d)?(.poco.cn.*|.yueus.com.*)\.jpg|gif|png|bmp/i;

    var reg = /_(32|64|86|100|145|165|260|320|440|468|640).(jpg|png|jpeg|gif|bmp)/i;

    if (url_reg.test(img_url))
    {
        if(reg.test(img_url))
        {
            img_url = img_url.replace(reg,size_str+'.$2');
            
        }
        else
        {
            img_url = img_url.replace('/(\.\d*).jpg|.jpg|.gif|.png|.bmp/i', size_str+".jpg");//����.jpgΪ����������ϴ�ͼƬ��

        }
    }


    
    return img_url;
}



