## im_service
* yueyue网页聊天，用于约约商家/消费者客服
* 该项目涉及php端服务器、im服务器、前端
* 该网页聊天有两个版本：

## 目录说明
* 版本一
	* /dest 目标目录
	* /src2.0 源码目录
	* /gulpfile.js gulp配置文件
	* ~working.cmd 监听开始
* 版本二
	* /client 目标目录
	* /src	源码目录

## 版本一：
* 基于vue.js，编译环境gulp，scr2.0 => dest，异步文件夹ajax
    * lib/IMSDK.js 封装了 lib/mqtt_client.js 以及调用页面方法
    * 登录成功 login_success 
    * 链接成功 connect_lost
    * 收到消息 message_receive
    * 订阅信箱 onSubscribe
* [MQTT协议文档](http://gitlab.yueus.com/pocoyun-pub/documents/wikis/imcore/apis)
* 联系方式QQ：
    * 34429255 瑞新（im服务器）
    * 234722572 nolest（前端）
    * 30019672 荣少（php端服务器、后台历史记录操作、配置）
* 主要功能包括
    * 鉴权
    ```javascript
    	mqtt_login
    	get_auth
    ```
    * 验证
    ```javascript
        get_ali_token
    	calculate
    ```
    * 角色选择
    ```javascript
    	change_login_type
    	ok_login_type
    	go_to_login
    ```
    * mqtt链接状态
    ```javascript
    	login_success
    	connect_lost
    	message_receive
    	onSubscribe
    ```
    * 桌面提示
    ```javascript
    	notification
    	call_notification
    ```
    * 新增消息
    ```javascript
    	add_red_point
    	delete_message
    	chatId_click
    	clean_unread
    	resolve_new_receive
    ```
    * 代理列表
    ```javascript
    	get_agent_list
    	set_service_list_by_agent_id
    	chatId_click
    ```
    * 服务列表
    ```javascript
    	get_service_list
    	serviceId_click
    ```
    * php服务器请求
    ```javascript
    	$http.post
    ```
    * im服务器请求
    ```javascript
    	api_request
    ```
    * 发送消息（文字、图片、自定义消息类型、语音、服务卡片等、表情）
    ```javascript
    	send_request
    	base_send_parame
    	send
    	emoji
    	input_pic
    	choose_face
    ```
    * 历史记录
    ```javascript
    	fetch_history
    	get_history_more
    ```
    * 新增联系人
    ```javascript
    	service_add
    ```
    * 日常用语增删
    ```javascript
    	options_words
    	options_words_send
    	go_to_edit_word
    ```
    * 商品列表
    ```javascript
    	fetch_goods_list
    	options_service
    	service_send
    	service_goto
    ```
    * 输入状态维护
    ```javascript
    	textarea_change
    ```

## 版本二：(旧版)
* 基于jquery，前端模板引擎handlebars，编译环境fis，src => client
* 通用模块
    * cookie操作 common/cookie
    * I_WX_SDK common/I_WX_SDK
    * ua客户端信息 common/ua
    * 工具集 common/utility
* 功能模块
    * 用户消息 modules/async_data
    * 消息引擎 modules/msg_engine
    * 表情 modules/option_faces
    * 音频处理 modules/option_record
    * 服务发送 modules/option_service
    * 日常用语 modules/option_words
* CSS：
    * 09年版本box布局库 style/base.scss