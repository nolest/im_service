define('common/cookie/index', function(require, exports, module){ /**
 * 
 * Cookie Models
 * 
 * Thanks:
 *  - https://github.com/carhartl/jquery-cookie
 *  - https://github.com/kissyteam/kissy/blob/master/src/cookie/src/cookie.js
 *  - http://www.nczonline.net/blog/2009/05/05/http-cookies-explained/
 *
 * @author kidney<kidneyleung@gmail.com>
 *
 */

var yue_path = '/';
var yue_domain = '.yueus.com';

var cookie = {
        /**
         * ��ȡcookieֵ
         *
         * @param name
         * @param options
         * @returns {*}
         */
        get: function(name, options) {
            options = options || {};
            var ret, matchArr;
            if (isNotEmptyStr(name)) {
                if (matchArr = String(doc.cookie).match(new RegExp("(?:^| )" + name + "(?:(?:=([^;]*))|;|$)"))) {
                    if (matchArr[1]) {
                        ret = !options.decode ? matchArr[1] : decode(matchArr[1]);
                    }
                }
            }
            return ret;
        },
        /**
         * ����cookie
         *
         * @param name
         * @param val
         * @param options
         * @returns {*|string}
         */
        set: function(name, val, options) {
            options = options || {};
            var text = String(options.encode ? encode(val) : val), date = options.expires, // ����ʱ��, ��λ:��
            domain = options.domain || yue_domain, // ��Ч����
            path = options.path || yue_path, // ��Ч·��
            secure = options.secure;
            // �Ƿ�ȫ����
            // �ӵ�ǰʱ�俪ʼ������������
            if (typeof date === "number") {
                date = new Date();
                date.setTime(date.getTime() + options.expires * MILLISECONDS_OF_DAY);
            }
            // expiration date
            if (date instanceof Date) {
                text += "; expires=" + date.toUTCString();
            }
            // domain
            if (isNotEmptyStr(domain)) {
                text += "; domain=" + domain;
            }
            // path
            if (isNotEmptyStr(path)) {
                text += "; path=" + path;
            }
            // secure
            if (secure) {
                text += "; secure";
            }
            doc.cookie = name + "=" + text;
            return text;
        },
        /**
         * ɾ��cookie
         * @param name
         * @param options
         * @returns {*|string}
         */
        del: function(name, options) {
            return this.set(name, "", {
                expires: -1,
                domain: options.domain || yue_domain,
                path: options.path || yue_path,
                secure: options.secure
            });
        }
    };
    // Helpers
    var doc = window.document;
    var MILLISECONDS_OF_DAY = 24 * 60 * 60 * 1e3;
    function encode(str) {
        return encodeURIComponent(str);
    }
    function decode(str) {
        return decodeURIComponent(str.replace(/\+/g, " "));
    }
    function isNotEmptyStr(str) {
        return typeof str === "string" && str !== "";
    }

	return cookie; 
});