define('option_record/pc/option_record', function(require, exports, module){ /**
 * Created by nolest on 15/11/11.
 **/
/**
 *  @require modules/option_record/pc/record_panel.scss
 *
 */
// ========= ģ������ =========
var $ = require('components/jquery/jquery.js');

var record_tpl = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"ds-box options_record_panel orient-v fn-hide\" data-role=\"options_record_panel\">\r\n    <div class=\"ds-box pack-justify panel_head\" data-role=\"record_panel_head\">\r\n        <div class=\"panel_head_option\"></div>\r\n        <div class=\"panel_head_title\" data-role=\"panel_head_title\">�����¼</div>\r\n        <div class=\"panel_head_option\" data-role=\"panel_head_close\">�ر�</div>\r\n    </div>\r\n    <div class=\"ds-box panel_body flex-1\" data-role=\"record_panel_body\">\r\n        <div class=\"ds-box pack-center record_part_empty flex-1\" data-role=\"all_empty\">----δѡ���̼�----</div>\r\n        <div class=\"ds-box orient-v record_buyer_list fn-hide\" data-role=\"record_buyer_list\"></div>\r\n        <div class=\"ds-box orient-v record_ops flex-1 fn-hide\" data-role=\"record_ops\">\r\n            <div class=\"ds-box orient-v extra pack-center\">\r\n                <!--div class=\"ds-box flex-1 ops fn-hide\">\r\n                    <div class=\"ds-box align-center add_to_list\" data-role=\"record_add_to_list\">����Ự</div>\r\n                </div-->\r\n                <div class=\"more fn-hide\" data-role=\"record_more\">�鿴������Ϣ</div>\r\n                <div class=\"more fn-hide\" data-role=\"record_more_load\">������</div>\r\n                <div class=\"more fn-hide\" data-role=\"record_more_end\">û�и���ļ�¼</div>\r\n            </div>\r\n            <div class=\"ds-box orient-v record_buyer_msg flex-1\" data-role=\"record_buyer_msg\"></div>\r\n        </div>\r\n\r\n\r\n        </div>\r\n\r\n</div>";
  });

var buyer_list_tpl = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n    <div class=\"ds-box align-center pack-center inner_item \" data-role=\"record_inner_item\" data-record-buyer_id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n        <div>";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n    </div>\r\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  });

var record_msg_tpl = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n    ";
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.send_user_role), "==", "yuebuyer", options) : helperMissing.call(depth0, "compare", (depth0 && depth0.send_user_role), "==", "yuebuyer", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.send_user_role), "==", "yueseller", options) : helperMissing.call(depth0, "compare", (depth0 && depth0.send_user_role), "==", "yueseller", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n        ";
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.media_type), "==", "text", options) : helperMissing.call(depth0, "compare", (depth0 && depth0.media_type), "==", "text", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        ";
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.media_type), "==", "photo", options) : helperMissing.call(depth0, "compare", (depth0 && depth0.media_type), "==", "photo", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        ";
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.media_type), "==", "sound", options) : helperMissing.call(depth0, "compare", (depth0 && depth0.media_type), "==", "sound", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        ";
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.media_type), "==", "merchandise", options) : helperMissing.call(depth0, "compare", (depth0 && depth0.media_type), "==", "merchandise", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        ";
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.media_type), "==", "card", options) : helperMissing.call(depth0, "compare", (depth0 && depth0.media_type), "==", "card", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n            <div class=\"ds-box inner_msg orient-v receive\">\r\n                <div class=\"ds-box msg_head\">\r\n                    <div class=\"font\">";
  if (helper = helpers.send_user_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.send_user_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                    <div class=\"font\">";
  if (helper = helpers.send_time) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.send_time); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                    <div class=\"font\">";
  if (helper = helpers.send_hour) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.send_hour); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                </div>\r\n                <div class=\"ds-box msg_body\">";
  if (helper = helpers.content) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.content); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n            </div>\r\n        ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n            <div class=\"ds-box inner_msg orient-v receive\">\r\n                <div class=\"ds-box msg_head\">\r\n                    <div class=\"font\">";
  if (helper = helpers.send_user_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.send_user_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                    <div class=\"font\">";
  if (helper = helpers.send_time) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.send_time); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                    <div class=\"font\">";
  if (helper = helpers.send_hour) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.send_hour); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                    <div class=\"reload\" data-role=\"img_reload\">���¼���</div>\r\n                </div>\r\n                <div class=\"ds-box msg_body\">\r\n                    <img src=\"";
  if (helper = helpers.file_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.file_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"height: 50px;\" data-role=\"options_show_img\" data-reload=\"";
  if (helper = helpers.file_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.file_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/>\r\n                </div>\r\n            </div>\r\n        ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n            <div class=\"ds-box inner_msg orient-v receive\">\r\n                <div class=\"ds-box msg_head\">\r\n                    <div class=\"font\">";
  if (helper = helpers.send_user_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.send_user_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                    <div class=\"font\">";
  if (helper = helpers.send_time) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.send_time); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                    <div class=\"font\">";
  if (helper = helpers.send_hour) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.send_hour); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                </div>\r\n                <div class=\"ds-box msg_body\">\r\n                    <div data-role=\"record_play_sound\" data-record-sound-url=\"";
  if (helper = helpers.file_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.file_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n                        <div class=\"sound_click\" data-role=\"record_sound_click\">---����һ������---</div>\r\n                        <audio class=\"fn-hide\" controls=\"controls\" type=\"audio/mp3\" src=\"\" data-role=\"record_sound_line\"></audio>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n            <div class=\"ds-box inner_msg orient-v receive\">\r\n                <div class=\"ds-box msg_head\">\r\n                    <div class=\"font\">";
  if (helper = helpers.send_user_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.send_user_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                    <div class=\"font\">";
  if (helper = helpers.send_time) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.send_time); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                    <div class=\"font\">";
  if (helper = helpers.send_hour) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.send_hour); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                </div>\r\n                <div class=\"ds-box msg_body\">\r\n                    <div class=\"ds-box orient-v merc\">\r\n                        <div class=\"info_title\">";
  if (helper = helpers.card_text1) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.card_text1); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                        <div class=\"info_price\">";
  if (helper = helpers.card_text2) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.card_text2); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n            <div class=\"ds-box inner_msg orient-v receive\">\r\n                <div class=\"ds-box msg_head\">\r\n                    <div class=\"font\">";
  if (helper = helpers.send_user_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.send_user_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                    <div class=\"font\">";
  if (helper = helpers.send_time) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.send_time); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                    <div class=\"font\">";
  if (helper = helpers.send_hour) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.send_hour); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                </div>\r\n                <div class=\"ds-box msg_body\">\r\n                    <div class=\"ds-box orient-v card\">\r\n                        <!--div class=\"info_title\">";
  if (helper = helpers.card_title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.card_title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div-->\r\n                        <div class=\"info_title\">";
  if (helper = helpers.card_text1) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.card_text1); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                        <div class=\"info_price\">";
  if (helper = helpers.card_text2) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.card_text2); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        ";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n        ";
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.media_type), "==", "text", options) : helperMissing.call(depth0, "compare", (depth0 && depth0.media_type), "==", "text", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        ";
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.media_type), "==", "photo", options) : helperMissing.call(depth0, "compare", (depth0 && depth0.media_type), "==", "photo", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        ";
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.media_type), "==", "merchandise", options) : helperMissing.call(depth0, "compare", (depth0 && depth0.media_type), "==", "merchandise", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n            <div class=\"ds-box inner_msg orient-v send\">\r\n                <div class=\"ds-box msg_head\">\r\n                    <div class=\"font\">";
  if (helper = helpers.send_user_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.send_user_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                    <div class=\"font\">";
  if (helper = helpers.send_time) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.send_time); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                    <div class=\"font\">";
  if (helper = helpers.send_hour) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.send_hour); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                </div>\r\n                <div class=\"ds-box msg_body\">";
  if (helper = helpers.content) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.content); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n            </div>\r\n        ";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n            <div class=\"ds-box inner_msg orient-v send\">\r\n                <div class=\"ds-box msg_head\">\r\n                    <div class=\"font\">";
  if (helper = helpers.send_user_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.send_user_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                    <div class=\"font\">";
  if (helper = helpers.send_time) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.send_time); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                    <div class=\"font\">";
  if (helper = helpers.send_hour) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.send_hour); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                    <div class=\"reload\" data-role=\"img_reload\">���¼���</div>\r\n                </div>\r\n                <div class=\"ds-box msg_body\">\r\n                    <img src=\"";
  if (helper = helpers.file_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.file_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"height: 50px;\" data-role=\"options_show_img\" data-reload=\"";
  if (helper = helpers.file_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.file_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/>\r\n                </div>\r\n            </div>\r\n        ";
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n            <div class=\"ds-box inner_msg orient-v send\">\r\n                <div class=\"ds-box msg_head\">\r\n                    <div class=\"font\">";
  if (helper = helpers.send_user_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.send_user_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                    <div class=\"font\">";
  if (helper = helpers.send_time) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.send_time); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                    <div class=\"font\">";
  if (helper = helpers.send_hour) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.send_hour); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                </div>\r\n                <div class=\"ds-box msg_body\">\r\n                    <div class=\"ds-box orient-v merc\">\r\n                        <div class=\"info_title\">";
  if (helper = helpers.card_text1) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.card_text1); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                        <div class=\"info_price\">";
  if (helper = helpers.card_text2) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.card_text2); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        ";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

var option_record =
{
    msg_list_page : 1,
    init: function(options)
    {
        var self = this;

        self.contain = options.bar;

        self.load_success = options.load_success || function(){};

        self.load_fail = options.load_fail || function(){};

        self.click_pictures = options.click_pictures || function(){};

        self.click_close = options.click_close || function(){};

        self.role = options.role || 'seller';

        self.render();
    },
    render : function()
    {
        var self = this;

        var frame_str = record_tpl();

        self.contain.append(frame_str);

        self.panel_obj = $('[data-role="options_record_panel"]');

        self.event();
    },
    show : function()
    {
        var self = this

        self.panel_obj.removeClass('fn-hide');

        self.panel_obj.find('[data-role="panel_head_title"]').html("�����¼")
    },
    hide : function()
    {
        var self = this

        self.panel_obj.addClass('fn-hide');
    },
    event : function()
    {
        var self = this;

        self.panel_head = self.panel_obj.find('[data-role="record_panel_head"]');

        self.panel_head.on('mousedown',function(e)
        {
            var org_x = e.offsetX;

            var org_y = e.offsetY;

            self.panel_head.unbind('mousemove').on('mousemove',function(ev)
            {
                var cur_x = ev.offsetX;

                var cur_y = ev.offsetY;

                var delta_x = cur_x - org_x;

                var delta_y = cur_y - org_y;

                var now_t = self.panel_obj.css('top');

                now_t = parseInt(now_t.substring(0,now_t.indexOf('px')));

                var now_l = self.panel_obj.css('left');

                now_l = parseInt(now_l.substring(0,now_l.indexOf('px')));

                self.panel_obj.css({top:now_t + delta_y,left:now_l + delta_x});
            })
        })

        self.panel_head.on('mouseup mouseleave',function()
        {
            self.panel_head.unbind('mousemove');
        })

        self.panel_obj.find('[data-role="record_more"]').on('click',function()
        {
            self.msg_list_page++;

            self.load(self.submit_obj);
        })


        self.panel_obj.find('[data-role="record_buyer_msg"]').on('scroll',function(e)
        {
            self.on_bot = e.currentTarget.scrollHeight - e.currentTarget.scrollTop;
        })

        self.panel_obj.find('[data-role="panel_head_close"]').on('click',function()
        {
            if (typeof (self.click_close) == 'function')self.click_close.call(this);
        })


    },
    load : function(send_obj)
    {
        var self = this;

        if(self.loading)return;

        self.submit_obj = $.extend(true,{},send_obj,{page : self.msg_list_page});

        self.tips_more = self.panel_obj.find('[data-role="record_more"]');

        self.tips_load = self.panel_obj.find('[data-role="record_more_load"]');

        self.tips_end = self.panel_obj.find('[data-role="record_more_end"]');

        self.tips_more.addClass('fn-hide');

        self.tips_load.removeClass('fn-hide');

        self.tips_end.addClass('fn-hide');

        if(!self.submit_obj.seller_id)return

        var urls;

        if(self.role == 'seller')
        {
            urls = window.$__ajax_domain + 'get_msg_list.php'
        }
        else
        {
            urls = window.$__ajax_domain + 'get_msg_list_buyer.php'
        }
        $.ajax
        ({
            url: urls,
            data : self.submit_obj,
            dataType: 'json',
            type: 'POST',
            cache: false,
            beforeSend: function()
            {
                self.loading = true;

            },
            success: function(data)
            {
                self.panel_obj.find('[data-role="panel_head_title"]').html(self.submit_obj.seller_id + "�����¼")

                self.panel_obj.find('[data-role="all_empty"]').addClass('fn-hide');

                //self.panel_obj.find('[data-role="record_buyer_list"]').removeClass('fn-hide');

                self.panel_obj.find('[data-role="record_ops"]').removeClass('fn-hide');

                var buyer_list_data = [];

                var buyer_msg_data = [];

                if(data.result_data.buyer_list.list)
                {
                    $.each(data.result_data.buyer_list.list,function(i,obj)
                    {
                        var _this_data = JSON.parse(obj);

                        var pusher;

                        if(_this_data.send_user_id == send_obj.seller_id)
                        {
                            pusher = { id : _this_data.to_user_id,pack : _this_data}
                        }
                        else
                        {
                            pusher = { id : _this_data.send_user_id,pack : _this_data}
                        }

                        buyer_list_data.push(pusher);
                    })

                    var buyer_list_str = buyer_list_tpl({data:buyer_list_data});

                    //self.panel_obj.find('[data-role="record_buyer_list"]').html(buyer_list_str);
                }


                if(data.result_data.buyer_msg && data.result_data.buyer_msg.list.length != 0)
                {
                    self.tips_more.removeClass('fn-hide');

                    self.tips_load.addClass('fn-hide');
                }
                else
                {
                    self.tips_end.removeClass('fn-hide');

                    self.tips_more.addClass('fn-hide');

                    self.tips_load.addClass('fn-hide');
                }

                if(data.result_data.buyer_msg && data.result_data.buyer_msg.list)
                {
                    $.each(data.result_data.buyer_msg.list,function(i,obj)
                    {
                        var _this_data = JSON.parse(obj);

                        var date = new Date(_this_data.send_time*1000);

                        _this_data.send_time = date.getFullYear() + '-' + (date.getMonth()+1) +  '-' + date.getDate();

                        _this_data.send_hour = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

                        buyer_msg_data.push(_this_data);
                    })

                    console.log(buyer_msg_data);
                    var buyer_msg_str = record_msg_tpl({data:buyer_msg_data});

                    self.panel_obj.find('[data-role="record_buyer_msg"]').prepend(buyer_msg_str);
                }

                self.panel_obj.find('[data-record-buyer_id]').removeClass('current');

                self.panel_obj.find('[data-record-buyer_id="'+ send_obj.buyer_id +'"]').addClass('current');

                var tall = self.panel_obj.find('[data-role="record_buyer_msg"]')[0].scrollHeight - self.on_bot

                self.panel_obj.find('[data-role="record_buyer_msg"]').scrollTop(tall);


                self._bind_event();

                if (typeof (self.load_success) == 'function')self.load_success.call(this,data,self);
            },
            error: function(data)
            {
                if (typeof (self.load_fail) == 'function')self.load_fail.call(this,data,self);

                self.tips_more.removeClass('fn-hide');

                self.tips_load.addClass('fn-hide');
            },
            complete: function()
            {
                self.loading = false;
            }
        });
    },
    _bind_event : function()
    {
        var self = this;

        //----------------����Ự�¼�-------------------------

//        self.panel_obj.find('[data-role="record_add_to_list"]').unbind('click').on('click',function()
//        {
//            var vote_id = self.panel_obj.find('[data-role="record_buyer_list"]').find('.current').attr('data-record-buyer_id');
//            console.log(vote_id);
//        })

        //----------------ͼƬ�¼�-------------------------
        self.panel_obj.find('[data-role="options_show_img"]')
            .unbind('click')
            .on('click',function()
            {
                var url = $(this).attr('src')

                if (typeof (self.click_pictures) == 'function')self.click_pictures.call(this,url);
            })
        //----------------ͼƬ�¼� END-------------------------


        //----------------��Ƶ�¼�-------------------------
        $.each(self.panel_obj.find('[data-role="record_sound_line"]'),function(k,k_obj)
        {
            var con = $(k_obj);

            var ogg = con.parents('[data-record-sound-url]').attr('data-record-sound-url');

            var res = window.btoa(JSON.stringify({url:ogg}));

            con[0].onloadedmetadata = function()
            {
                //�ֻ����л�app�����load
                if(con.siblings('[data-role="record_sound_click"]').find('font').length == 0)
                {
                    con.siblings('[data-role="record_sound_click"]').append('<font>' + con[0].duration.toFixed(1) + '"' + '</font>');
                }
            }
            con.attr('src','http://14.29.52.16:8055/ogg2mp3?req='+ res)
        })

        self.panel_obj.find('[data-role="record_play_sound"]')
            .unbind('click')
            .on('click',function()
            {
                var con = $(this);

                var sound_obj = con.find('[data-role="record_sound_line"]');

                //����Ƶ
                if(sound_obj[0].paused)
                {
                    sound_obj[0].play();
                }
                else
                {
                    sound_obj[0].pause();
                }
            })
        //----------------��Ƶ�¼� END-------------------------


        //----------------����¼�-------------------------
        self.panel_obj.find('[data-role="record_inner_item"]')
            .unbind('click')
            .on('click',function()
            {
                self.panel_obj.find('[data-role="record_buyer_msg"]').html("");

                self.reset_msg_list_page();

                self.submit_obj = $.extend(true,{},self.submit_obj,{buyer_id : $(this).attr('data-record-buyer_id')});

                self.load(self.submit_obj);
            })
        //----------------����¼� END-------------------------

        self.panel_obj.find('[data-role="img_reload"]')
            .unbind('click')
            .on('click',function()
            {
                var con = $(this);

                var photo_obj = con.parents('.inner_msg').find('[data-role="options_show_img"]')

                var origin = photo_obj.attr('data-reload');

                if(origin.indexOf('http://') == 0)
                {
                    //����base64
                    photo_obj.attr('src',origin +"?" + new Date().getTime());
                }
            })

    },
    reset_msg_list_page : function()
    {
        var self = this;

        self.panel_obj.find('[data-role="record_buyer_msg"]').html("");

        self.msg_list_page = 1;
    }

}

return option_record; 
});