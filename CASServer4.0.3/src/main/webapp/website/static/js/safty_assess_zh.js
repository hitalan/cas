/** debug使用，开启firebug，打印在控制台，
 * 否则或者不支持firebug的浏览器，使用alert输出
 * 使用：logit("a", b)*/
function logit(key, value) {
    try {
        console.log(key, value );
    } catch(e) {
        alert(key + " : " + value);
    }
}
    
function allErrorDialog() {
    var err = "服务器错误，请稍候再试";
    if ($("#all_error_dialog_div").is(":visible")) {
    return false;
    }
    $("#all_error_dialog_div").html(err).fadeIn(200).delay(3000).fadeOut(600);
}
    
/** 取消错误提示 */
function cancelErrorDialog() {
    $("#all_error_dialog_div").dialog("destroy");
}
 
    /**
     * 左边树菜单和右边内容尺寸自适应，带滚动条
     * @param opt [{"id": "side-bar", "h":100}....]
     */
    function autoSize(opt){//alert(mainId);
        var height = document.documentElement.clientHeight;
        var h;
        $.each(opt, function(i, v){
            h = height - v["h"];
            $('#'+v["id"]).css('height',h+'px');
        });
//      $('#'+sideId).css('height',(height-220)+'px');
//      $('#'+mainId).css('height',(height-186)+'px');
    }
    
    function checkUserSession(data){
        if (data == null || data.length <= 0) {
            return 0;
        }
        if (data.indexOf("getUserSessionIsError") >= 0) {
            document.location.href = 'http://www.bangcle.com/portal.action?op=Portal.login';
            return 1;
        }
        return 0;
    }
 
    /*datepicker local to zh-CN*/
    function localDatePicker() {
        $.datepicker.regional['zh-CN'] = { 
            clearText: '清除', 
            clearStatus: '清除已选日期', 
            closeText: '关闭', 
            closeStatus: '不改变当前选择', 
            prevText: '<上月', 
            prevStatus: '显示上月', 
            prevBigText: '<<', 
            prevBigStatus: '显示上一年', 
            nextText: '下月>', 
            nextStatus: '显示下月', 
            nextBigText: '>>', 
            nextBigStatus: '显示下一年', 
            currentText: '今天', 
            currentStatus: '显示本月', 
            monthNames: ['一月','二月','三月','四月','五月','六月', '七月','八月','九月','十月','十一月','十二月'], 
            monthNamesShort: ['一','二','三','四','五','六', '七','八','九','十','十一','十二'], 
            monthStatus: '选择月份', 
            yearStatus: '选择年份', 
            weekHeader: '周', 
            weekStatus: '年内周次', 
            dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'], 
            dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'], 
            dayNamesMin: ['日','一','二','三','四','五','六'], 
            dayStatus: '设置 DD 为一周起始', 
            dateStatus: '选择 m月 d日, DD', 
            dateFormat: 'yy-mm-dd', 
            firstDay: 1, 
            initStatus: '请选择日期', 
            isRTL: false
        }; 
        
        $.datepicker.setDefaults($.datepicker.regional['zh-CN']);
    }
    
    /** 缩放 */
    function resizePic(obj, rw,rh) {
    //    var cacheImg = new Image();
    //    cacheImg.src = obj.src;
        var lRealWidth = 0;
        var lRealHeight = 0;
        var ywidth = 180;
        var yheight = 240;
        lRealWidth = rw;
        lRealHeight = rh;
        var w = parseFloat(lRealWidth - ywidth);
        var h = parseFloat(lRealHeight - yheight);
        if (w > 0 || h > 0) {
            if (w >= h) {
                obj.width = lRealWidth * (ywidth/lRealWidth);
                obj.height = lRealHeight * (ywidth/lRealWidth);
            } else if (w < h) {
                obj.width = lRealWidth * (yheight/lRealHeight);
                obj.height = lRealHeight * (yheight/lRealHeight);
            }
        }
    }
    
    /**
     * 货币格式化 
     * @param {} num
     * @returns {} 
     */
    function formatCurrency(num) {  
        num = num.toString().replace(/$|\,/g,'');  
        if(isNaN(num))  
            num = "0";  
        
        sign = (num == (num = Math.abs(num)));  
        num = Math.floor(num * 100 + 0.50000000001);  
        cents = num % 100;  
        num = Math.floor(num / 100).toString();  
        if(cents<10)  
            cents = "0" + cents;  
           
        for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)  
            num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
              
        return (((sign)?'':'-')  + num + '.' + cents);  
    }   
    
    /**
     * 是否式整数
     * @param {} str
     * @param {} min
     * @param {} max
     * @returns {} 
     */
    function isInteger(str, min, max) {
        var regexp = new RegExp("^-?[1-9][0-9]*$");
        var result = regexp.test(str);
        if (result) {
            if (min != null && max != null) {
                if (str < min || str > max) {
                    result = false;
                }
            } else if (min != null) {
                if (str < min) {
                    result = false;
                }
            } else if (max != null) {
                if (str > max) {
                    result = false;
                }
            }
            
        }
        return result;    
    }
 
    /**
     * 提示框
     */
    function alert_d(message){
        $("#dialog_main").html(message);
        $("#dialog").dialog({
            title: '消息框',
            modal: true,
            width: 380,
//            resizable:true,
//            overlay: {
//                opacity: 0.5,
//                background: "black"
//            },
            buttons: {
                "确定": function(){
                    $(this).dialog("close");
                }
            }
        });
    }
    
    /**
     * 确定取消
     */
    function confirm_d(message, callback){
        if ($("#dialogconfirm").length == 0) {
            $("body").append('<div id="dialogconfirm" class="dialog" ><div id="dialog_main" class="dialog_main"></div></div>');
            $("#dialogconfirm").dialog({
                autoOpen: false,
                title: '消息框',
                modal: true,
                resizable:false,
                overlay: {
                    opacity: 0.5,
                    background: "black"
                },
                buttons: {
                    "确定": function(){
                        callback();
                        $(this).dialog("close");
                    },
                    "取消": function(){
                        $(this).dialog("close");
                    }
                }
            });
        }
        $("#dialogconfirm").dialog("open");    
    }
 
    //弹出框注册后自动登录，弹出框关闭，修改导航信息
    function autoLogin(email) {
        $("#user_info").val(email);
    }
    
    function popUpLogin() {
        $("#common_iframe").attr("src", "http://sso.testin.cn/user.action?op=Login.popUp");
        $("#common_iframe").show();
    }
    
    function popUpActivation() {
        $("#common_iframe").attr("src", "http://sso.testin.cn/user.action?op=ThirdAppUser.popUp");
        $("#common_iframe").show();
    }
    
    
    
    // create Date object for current location
    globaldate = new Date();
    // obtain local UTC offset and convert to msec
    localOffset = globaldate.getTimezoneOffset() * 60000;
    
    
    
    var Validator = {
 
    /** 判断字节长度 */
    fucCheckLength : function(msg) {
        var i,sum;
        sum=0;
        for(i=0;i <msg.length;i++){
            if ((msg.charCodeAt(i)>=0) && (msg.charCodeAt(i) <=255)){
                sum=sum+1;
            }else{
                sum=sum+2;
            }
        }
        return sum;
    },
 
    //检查EMAIL
    isEmail: function (str) {
      var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
      var flag = reg.test(str);
      return flag;
    },
 
    isMobileNum: function(str) {
        var reg = /^1\d{10}$/;
        var flag = reg.test(str);
        return flag;
    },
 
    //检查是否字母
    isAlpha: function (str) {
      var reg = /^[A-z]+$/;
      var flag = reg.test(str);
      return flag;
    },
 
    //检查是否字母或数字
    isAlphaNumeric: function (str) {
      var reg = /^[0123456789A-z]+$/;
      var flag = reg.test(str);
      return flag;
    },
 
    //检查是否字母或数字或中划线下划线
    isAlphaDash: function (str) {
      var reg = /^[-_0123456789A-z]+$/;
      var flag = reg.test(str);
      return flag;
    },
 
    //检查是否数值
    isNumeric: function (str) {
      var reg = /^-?[0-9]+\.?[0-9]*$/;
      var flag = reg.test(str);
      return flag;
    },
 
    //检查是否数字
    isDigital: function (str) {
      var reg = /^[0-9]+$/;
      var flag = reg.test(str);
      return flag;
    },
 
    // 检查是否小于
    isLess: function(str, num) {
        return str.length < num;
    },
 
    // 检查是否大于
    isMore: function(str, num) {
        if(!str) {
            str = "";
        }
        return str.length > num;
    },
 
    /** 检测（允许中文，英文，字母，数字，"_"，"."） */
    isCNDefaultStr : function(str) {
        var flag = true;
        var testStr = /^[\u4e00-\u9fa5a-zA-Z0-9\.\_]*$/;
        return testStr.test(str);
    },
 
    /** 检测（允许英文，字母，数字，"_"，"."） */
    isDefaultStr : function(str) {
        var flag = true;
        var testStr = /^[\a-zA-Z0-9\.\_]*$/;
        return testStr.test(str);
    },
 
    isEmpty: function(str) {
        return $.trim(str) == "";
    },
 
    isImg: function(str) {
      var reg = /.+(\.gif|\.jpg|\.jpeg|\.png)$/i;
      var flag = reg.test(str);
      return flag;
    },
 
    PWD_TOO_LONG: "密码长度太长，请输入6~16位（字母和数字组成）的密码",
    PWD_TOO_SHORT: "密码长度太短，请输入6~16位（字母和数字组成）的密码",
    PWD_TOO_SIMPLE: "密码过于简单，请输入字母与数字的组合",
    CONFIRM_PWD_MISMATCHED: "两次输入的密码不一致",
    VALID_MOBILE_NUM: "请输入有效的手机号码",
    IS_REQUIRED: "请输入",
    VALID_EMAIL: "请输入有效的邮箱地址",
    EMAIL_TOO_LONG: "邮箱地址太长，请输入有效的邮箱地址",
    COMPANY_NAME_TOO_LONG: "公司名字过长，请输入不超过50个字符",
    COMPANY_URL_TOO_LONG: "公司主页链接过长，请输入不超过256个字符",
    DONT_AGREE: "您没有同意服务协议"
}




var swfu1, swfu2;
    var check_flag = 1;
    var V = Validator;
 
    $(function(){
        createAdpt("");
 
        swfu1 = new SWFUpload({
 
            upload_url : "/app/do_upload/",
            file_post_name : "adaptFile",
            flash_url : "swfupload.swf"/*tpa=http://www.bangcle.com/static/swf/swfupload.swf*/,
            flash9_url : "swfupload_fp9.swf"/*tpa=http://www.bangcle.com/static/swf/swfupload_fp9.swf*/,
            file_size_limit : "100 MB",
//            file_upload_limit : 1,
            file_queue_limit : 1,
            //rm ;*.ipa
            file_types : "*.apk",
            file_types_description : "APP Files",
//            debug: true,
            button_image_url : "/static/images/upload_bt_"+gettext('lan')+".png",
            button_text: "",
            button_width: "100",
            button_height: "30",
            button_placeholder_id: "select_file",
//            button_text_style: '.input_upload {}',
            //button_text_left_padding: 12,
            //button_text_top_padding: 3,
            button_cursor: -2,
            button_action: -100,
            button_window_mode : SWFUpload.WINDOW_MODE.OPAQUE,
 
            //回调函数
            swfupload_loaded_handler : myFlashReady,
            file_dialog_start_handler : startSelectFile,
            file_queued_handler : flashGetFile,
            file_queue_error_handler : flashGetFileError,
            file_dialog_complete_handler : selectFileComplete,
            //upload_start_handler : uploadStartEventHandler,
            upload_progress_handler : fileUploading,
            upload_error_handler : fileUploadError,
            upload_success_handler : uploadSuccessEventHandler
            //upload_complete_handler : uploadComplete
        });
    });
    
    function createAdpt(charge){
        $("#choose_app_url").bind("click", function(){
            check_flag = 1;
            $("#stepChoice").css("display","block");
//            $("#step_choice2").css("display","block");
            $("#app_package_text").hide();
//            $("#app_script_text").hide();
            $("#app_url_text").show();
            $("#choose_app_package").removeClass("cur");
            $(this).addClass("cur");
            var content = $("#app_url_content").val();
            if("" != content && undefined != content
                    && content.substring(content.length-4,content.length) == ".apk") {
                $("#need_login").css("display","block");
                if($("#needLogin").is(":checked")){
                    $("#login").css("display","block");
                }
            } else {
                $("#need_login").css("display","none");
                $("#login").css("display","none");
            }
        })
        $("#choose_app_package").bind("click", function(){
            check_flag = 2;
            $("#stepChoice").css("display","none");
//            $("#step_choice2").css("display","none");
            $("#app_package_text").show();
//            $("#app_script_text").show();
            $("#app_url_text").hide();
            $("#choose_app_url").removeClass("cur");
            $(this).addClass("cur");
            $("#need_login").css("display","none");
            var content = $("#select_file_content").val();
            if("" != content && undefined != content
                    && content.substring(content.length-4,content.length) == ".apk") {
                $("#need_login").css("display","block");
                if($("#needLogin").is(":checked")){
                    $("#login").css("display","block");
                }
            } else {
                $("#need_login").css("display","none");
                $("#login").css("display","none");
            }
        })
        $("#app_url_content")
                .focus(function(){
                    clearErrMsg($("#error_app_url"));
                }).blur(function(){
                    if (V.isEmpty($(this).val())) {
                        showErrMsg($("#error_app_url"), APPURL_NULL);
                        return false;
                    }
                    if (!isUploadUrl($(this).val())){
                        showErrMsg($("#error_app_url"), APPURL_INVALID);
                        return false;
                    }
                    if (V.fucCheckLength($(this).val()) > 256) {
                        showErrMsg($("#error_app_url"), APPURL_LONG);
                        return false;
                    }
                });
        $("#app_name_content")
                .focus(function(){
                    clearErrMsg($("#error_name"));
                }).blur(function(){
                    if (V.isEmpty($(this).val())) {
                        showErrMsg($("#error_name"), APPNAME_NULL);
                        return false;
                    }
                    if (V.fucCheckLength($(this).val()) > 256) {
                        showErrMsg($("#error_name"), APPNAME_LONG);
                        return false;
                    }
                });
    }
 
    function validAdapt(){
        var selectFileVal = $("#select_file_content").val();
        //var fileNameVal = $("#app_name_content").val();
 
        var errFlag = 0;
    if(V.isEmpty(selectFileVal)){
        errFlag++;
        //showErrMsg($("#error_select_file"), SELECTAPP_NULL);
        showErrMsg($("#error_select_file"), gettext("Please select a file"));
    }
    
    if(!$("#disclaimer").attr("checked")){
        errFlag++;
        showErrMsg($("#error_disclaimer"), gettext("Please read and agree Bangcle's Privacy Policy"));
    }
 
        return errFlag;
    }
    
    function showErrMsg(box, msg) {
        box.text(msg).css("color", "red").show();
    }
 
    function clearErrMsg(box) {
        box.each(function(){
            $(this).text("").hide();
        });
    }
    //检查下载.apk文件url地址
    function isUploadUrl(str){
        var reg = /^((https|http|ftp|rtsp|mms):\/\/){1}([A-Za-z0-9\/\/_!~*'().;?:@&=+$,%#-])+(\.([aA][pP][kK]|[iI][pP][aA]))$/;
        var flag = reg.test(str);
        return flag;
    }
 
    var closeFlag = false;
 
    //flash完成初始化
    var myFlashReady = function () {
        $(".dialog_uploading_wp").hide();
        $(".dialog_uploading").hide();
    }
 
    //开始选择文件
    var startSelectFile = function () {
    }
 
    //文件被成功加入到队列中
    var flashGetFile = function (file) {
        var post_params = this.getSetting("post_params");
    
        var ext = file.name.substr(file.name.lastIndexOf(".")+1).toLowerCase();
        var syspfName;
        if (ext == "ipa") {
            syspfName = "ios";
        } else {
            syspfName = "android";
        }
        $("#syspf_name").val(syspfName);
        $("#syspf_ext").val(ext);
        if (ext == 'test') {
            $("#select_script_content").val(file.name);
        } else {
            $("#select_file_content").val(file.name);
        }
 
        closeFlag = true;
        this.addPostParam("syspfName", syspfName);
        this.addPostParam("syspfExt", ext);
        this.addPostParam("appsAdaptFileName", file.name);
    }
 
    //文件加入flash长传队列失败
    var flashGetFileError = function (file, errorCode, msg) {
        if (errorCode == -110) {
            $(".dialog_main").text(gettext("请选择小于100M的安装包"));
            var tip = gettext('提示')
            
            $(".dialog").dialog({
                title: tip,
                modal: true,
                width: 380,
                buttons: {
                    
                    "确定": function() {
                        $(this).dialog( "close" );
                    },
                    "取消": function() {
                        $(this).dialog("close");
                    }
                }
            });
        }
        if (errorCode == -100) {
            $(".dialog_main").text("一次只能选择一个安装包");
            $(".dialog").dialog({
                title: "提示",
                modal: true,
                width: 380,
                buttons: {
                    "确定": function() {
                        $(this).dialog( "close" );
                    },
                    "取消": function() {
                        $(this).dialog("close");
                    }
                }
            });
        }
        //alert("加入上传队列失败，错误编码：" + errorCode + "    失败信息：" + msg);
    }
 
    //文件选择完毕，返回本次选择文件时是成功还是失败，成功几个或失败几个
    var selectFileComplete = function (selectNum, successNum) {
        //alert("选择了：" + selectNum + "个文件    成功加入队列："+ successNum +"个文件");
 
        //开始
        if (successNum > 0) {
            $("#jindu_text").html("0%");
            $(".dialog_uploading_wp").show();
            $(".dialog_uploading").show();
            this.startUpload();
        }
    }
 
    //文件开始上传事件
    var uploadStartEventHandler = function (file) {
        alert("准备开始上传：" + file.name);
        var continue_with_upload = true;
        return continue_with_upload;
    }
 
    //flash定时回调
    var fileUploading = function (file, complete, total) {
        var jindu = Math.floor(complete / total * 100);
        //alert("进度："+jindu+" 总大小："+total);837580
 
        if (jindu > 90) {
            $("#upload_message").html(gettext("Being parsed apk info"));
        } else {
            $("#upload_message").html(gettext("uploading"));
            var jinduspan = '<b id="jindu_text"></b>';
            $("#upload_message").append(jinduspan);
            if (jindu < 40) {
                $("#jindu_text").css("color","orange");
            } else if (jindu >=40 && jindu < 80) {
                $("#jindu_text").css("color","#ff4500");
            } else {
                $("#jindu_text").css("color","red");
            }
            $("#jindu_text").text(jindu+"%");
        }
    }
 
    //flash上传文件失败
    var fileUploadError = function (file, errorCode, msg) {
        closeFlag = false;
        $(".dialog_uploading_wp").hide();
        $(".dialog_uploading").hide();
        $(".dialog_main").text("错误："+errorCode+" 可能因网络原因或登录信息失效导致服务器保存应用文件失败，请重新上传或重新登录后再试");
        $(".dialog").dialog({
            title: "提示",
            modal: true,
            width: 380,
            buttons: {
                "确定": function() {
                    $(this).dialog( "close" );
                },
                "取消": function() {
                    $(this).dialog("close");
                }
            }
        });
    }
 
    //上传完毕时回调
    var uploadSuccessEventHandler = function (file, serverData) {
        closeFlag = false;
        clearErrMsg($(".error_tips"));
        $(".dialog_uploading_wp").hide();
        $(".dialog_uploading").hide();
 
        var data = eval("("+serverData+")");
 
        if (data.type == 'script') {
            //处理脚本上传返回的信息
            switch (data.errorCode) {
                case 1002:
                    $("#error_select_script").text("没有获取到脚本文件信息").show();
                    cleanScriptInfo();
                    break;
                case 1101:
                    $("#error_select_script").text("服务器转存脚本文件失败").show();
                    cleanScriptInfo();
                    break;
                case 1102:
                    $("#error_select_script").text("上传脚本文件至服务器失败").show();
                    cleanScriptInfo();
                    break;
                case 1105:
                    $("#error_select_script").text("无效的脚本文件").show();
                    cleanScriptInfo();
                    break;
                case 1106:
                    $("#error_select_script").text("脚本文件中没有应用程序信息").show();
                    cleanScriptInfo();
                    break;
                case 0:
 
                    $("#screenshot_count").val(data.screenshotCount);
                    $("#script_runtime").val(data.scriptRuntime);
                    $("#script_url").val(data.scriptUrl);
                    $("#resolution").val(data.resolution);
                    $("#check_script").val(data.checkScript);
 
                    $("#error_select_script").text("").hide();
                    break;
            }
 
        } else {
            switch (data.errorCode) {
                case 1:
                    $("#error_select_file").text("上传文件失败，请稍候再试").show();
                    cleanAppInfo();
                    break;
                case 2:
                    //$("#error_select_file").text("提交失败！您提交的应用包已经损坏，请检查后再试一次。").show();
            closeFlag = false;
            $(".dialog_uploading_wp").hide();
            $(".dialog_uploading").hide();
            $(".dialog_main").text(gettext("Submit failed！The apk you submitted is damaged，please check and try again."));
            var tip = gettext("tip");
            var ok = "确定";
            $(".dialog").dialog({
            title: tip,
            modal: true,
            width: 380,
            buttons: {
                 ok: function() {
                $(this).dialog( "close" );
                }
            }
            });
                    cleanAppInfo();
                    break;
                case 0:
    //                if ($("#charge").val() == 0 && data.data.exceed == 1) {
    //                    cleanAppInfo();
    //                    $("#error_select_file").text("该APP已多次测试，请勿重复提交").show();
    //                } else {
                    $("#app_name_content").val(data.data.appName);
                    $("#app_version").val(data.data.appVersion);
            $("#app_name").val(data.data.appName);
            $("#app_ver").val(data.data.appVersion);
            $("#app_size").val(data.data.appSize);
            //$("#app_pkg").val(data.data.appPkg);
            //$("#app_md5").val(data.data.appMd5);
            //$("#app_icon").val(data.data.appIcon);
            $("#app_alias").val(data.data.appAlias);
            $("#app_filename").val(data.data.fileName);
            $("#app_storepath").val(data.data.storePath);
            //$("#app_certmd5").val(data.data.certMd5);
            $("#channel_params").html(buildChannelParamsOptions(data.data.channel_params));
    //                }
 
                    //如果为ipa文件则不支持账号信息
                    var type = data.data.appUrl;
                    if(type.substring(type.length-4,type.length) == ".apk") {
                        $("#need_login").css("display","block");
                    } else {
                        $("#need_login").css("display","none");
                        $("#login").css("display","none");
                    }
 
                    break;
            }
        }
 
    }
    
    /**生成渠道标识参数下接选项*/
    function buildChannelParamsOptions(jsonArray){
    var html = '';
    $.each(jsonArray,function(i,v){
        html+="<option value='"+v+"'>"+v+"</option>";
    });
    return html;
    }
 
    function cleanAppInfo() {
    $("#select_file_content").val("");
        $("#app_name_content").val("");
    $("#app_version").val("");
    $("#app_name").val("");
    $("#app_ver").val("");
    $("#app_size").val("");
    $("#app_alias").val("");
    $("#app_filename").val("");
    $("#app_storepath").val("");
    }
 
    function cleanScriptInfo() {
        $("#select_script_content").val("")
        $("#screenshot_count").val("");
        $("#script_runtime").val("");
        $("#script_url").val("");
        $("#resolution").val("");
        $("#check_script").val("");
    }
 
    //在多个上传任务中，当上传完毕一个的时候回调该方法
    //var uploadComplete = function (file) {
    //  //可以马上进行第二个文件上传
    //  this.startUpload();
    //}
 
    /** 离开本页面将会终止安装包的上传，是否离开本页面
 
     关闭本页面将会终止安装包的上传，是否离开本页面
 
     是 否 */
    window.onbeforeunload = function (e) {
        if (closeFlag) {
            var e = e || window.event;
            // For IE and Firefox prior to version 4
            if (e) {
                return '离开或刷新本页面将会终止安装包的上传';
            }
        }
    };
 
var APPURL_NULL = "请填写程序下载地址";
var APPURL_LONG = "请输入256个字符以内的程序下载地址";
var APPURL_INVALID = "您输入的下载地址不合法"
var APPNAME_NULL = "请填写程序名称";
var APPNAME_LONG = "请输入32个字符以内的程序名称";
var SELECTAPP_NULL = "请选择安装文件";
 
 
 
 
  $(function(){
            $(".account").bind({
                'mouseover':function(){
                    $(this).addClass("account_mouseover");
                },
                'mouseout':function(){
                    $(this).removeClass('account_mouseover');
                }
            })
            $(".drop_downs").bind({
                'mouseover':function(){
                    $(this).addClass("drop_downs_mouseover");
                },
                'mouseout':function(){
                    $(this).removeClass('drop_downs_mouseover');
                }
            })
 
        });
    
    $(document).ready(function(){
        check_flag = 2;
            $("#stepChoice").css("display","none");
//            $("#step_choice2").css("display","none");
            $("#app_package_text").show();
//            $("#app_script_text").show();
            $("#app_url_text").hide();
            //$("#choose_app_url").removeClass("cur");
            $("#choose_app_package").addClass("cur");
            $("#need_login").css("display","none");
            var content = $("#select_file_content").val();
            if("" != content && undefined != content
                    && content.substring(content.length-4,content.length) == ".apk") {
                $("#need_login").css("display","block");
                if($("#needLogin").is(":checked")){
                    $("#login").css("display","block");
                }
            } else {
                $("#need_login").css("display","none");
                $("#login").css("display","none");
            }
        });
        
        
  $(function(){
  $("#disclaimer_detail").hide();
  });
  
  function showDisclaimer(){
    if($("#disclaimer_detail").is(":hidden")){
    $("#disclaimer_detail").show();
    } else{
    $("#disclaimer_detail").hide();
    }
  }

function showMultiChannelTip(){
    $(".mask,.multi_channel_tip").show();
}
function closeMultiChannelTip(){
    $(".mask,.multi_channel_tip").hide();
}
function showImport(){
    $("#import").show();
    $("#userDefinedBtn").removeClass("multi_channel_btn_active");
    $("#importBtn").addClass("multi_channel_btn_active")
}
function hideImport(){
    $("#import").hide();
    $("#userDefinedBtn").addClass("multi_channel_btn_active");
    $("#importBtn").removeClass("multi_channel_btn_active")
}
function addChannel(){
    var html = '<div style="padding:4px 0px;">'+
            '   <span class="multi_channel_label">android:value：</span>'+
            '    <span style="display:inline-block;">'+
            '        <input class="input_text" type="text" name="channel" style="width:260px" onblur="cntChannels()"/><img src="icon_2.png"/*tpa=http://www.bangcle.com/static/images/icon_2.png*/ style="margin-left:5px;cursor:pointer" width="14px" height="14px" onclick="delChannel(this)"/>'+
            '    </span>'+
            '</div>';
    $("#addChannel").before(html);
}
function delChannel(obj){
    $(obj).parent().parent().remove();
}
function multiChannel(){
    if($("#multi_channel").attr("checked")){
    if($("#channel_params").html()!=""){
        $(".multi_channel_main").show();
    }else{
        $(".dialog_main").text("您提交的应用程序中没有配置Meta参数，无法使用快捷加固功能。");
        $(".dialog").dialog({
        title: "操作失败",
        modal: true,
        width: 380,
        buttons: {
             确定: function() {
            $(this).dialog( "close" );
            }
        }
        });
    }
    } else {
    $(".multi_channel_main").hide();
    }
}
function cntChannels(){
    var cnt = 0;
    $("input[name='channel']").each(function(i,v){
    if($(v).val()!="") cnt++;
    });
    $("#channel_cnt").text(cnt);
}


function save() {
    //获取上传路径值
    var filePath = document.getElementById('app_storepath');
    var store_path = filePath.value;
    var apkSize = document.getElementById('app_size');
    var apk_size = apkSize.value
    //组织上传数据
    dict = {'store_path':store_path, 'size': apk_size}
    data = JSON.stringify(dict);
    if(validAdapt()==0){
        //禁用按钮
        var post_activity_adpt = document.getElementById('post_activity_adpt');
        post_activity_adpt.disabled = true;
        var select_file_holder = document.getElementById('select_file_holder');
        select_file_holder.style.display = 'none';
        post_activity_adpt.style.cursor = 'wait';
        ajaxAuditSubmit(data, '/app/audit/', 'result');
    }
}

//评估提交
function ajaxAuditSubmit(data, url, resultId){
    var xmlhttp;
    if (window.XMLHttpRequest){
        //code for IE7+,Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }else{
        //code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4 && xmlhttp.status==200){
            var data = JSON.parse(xmlhttp.responseText);
            if (data == '') return;
            var result = document.getElementById(resultId);
            if (data['flag'] == '1') {
                //先将id信息写入input中，待重构setinterval传参
                var audit = document.getElementById('audit_id');
                audit.value = data['id'];
                auditReady();
                //ajaxAuditReady();

            };
            //显示错误信息
            //result.innerHTML = data['msg'];
            result.innerHTML = '<img src="waiting_bar.gif"/*tpa=http://www.bangcle.com/static/images/audit/waiting_bar.gif*//>&nbsp;&nbsp;正在评估，请耐心等待...'
        }
    }
    xmlhttp.open("POST",url,true);
    xmlhttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xmlhttp.send(data);
}

function auditReady() {
    var status = setInterval(ajaxAuditReady, 2000);
    var stop = function() {
        //清除定时任务
        clearInterval(status);
        window.open('','_blank');
        //alert('任务超时！');
    };
    var clear = function() {
        var audit = document.getElementById('result');
        audit.innerHTML = '';
        var app_filename = document.getElementById('app_filename');
        app_filename.value = '';
        var app_storepath = document.getElementById('app_storepath');
        app_storepath.value = '';
        var audit_id = document.getElementById('audit_id');
        audit_id.value = '';
        var select_file_content = document.getElementById('select_file_content');
        select_file_content.value = '';
        var app_name_content = document.getElementById('app_name_content');
        app_name_content.value = '';
        var app_version = document.getElementById('app_version');
        app_version.value = '';
        var disclaimer = document.getElementById('disclaimer');
        disclaimer.value = '';
        closeMultiChannelTip();
    };

    var recover = function() {
        var post_activity_adpt = document.getElementById('post_activity_adpt');
        post_activity_adpt.disabled = false;
        post_activity_adpt.style.cursor = 'pointer';
        var select_file_holder = document.getElementById('select_file_holder');
        select_file_holder.style.display = 'inline-block';
    }
    //超过60秒自动结束任务
    //var timeout = setTimeout(stop, 8000);
    //异步获取评估结果
    function ajaxAuditReady() {
        var xmlhttp;
        if (window.XMLHttpRequest){
            //code for IE7+,Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }else{
            //code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange=function(){
            if(xmlhttp.readyState==4 && xmlhttp.status==200){
                var data = JSON.parse(xmlhttp.responseText);
                if (data == '') return;
                if (data['flag'] == '1') {
                    var id = data['id'];
                    var md5 = data['md5'];
                    //跳转到详情页
                    href = 'audit-detail-id=.htm'/*tpa=http://www.bangcle.com/app/audit-detail?id=*/ + id + '&md5=' + md5;
					//window.open(href, '_blank');
                    //clear();
                    //recover();
                    window.location.href = href;
                    clearInterval(status);
                } else {
                   //nothing 
                }
            }
        }
        var audit = document.getElementById('audit_id');
        var audit_id = audit.value;
        xmlhttp.open("GET",'/app/audit-ready?id=' + audit_id, true);
        xmlhttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        xmlhttp.send(null);
    }
}

//test
function ajaxAuditReady() {
        var xmlhttp;
        if (window.XMLHttpRequest){
            //code for IE7+,Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }else{
            //code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange=function(){
            if(xmlhttp.readyState==4 && xmlhttp.status==200){
                var result = xmlhttp.responseText
                alert('result = ' + result);
                if (result == 'success') {
                    alert('success');
                    clearIntervar(status);
                } else if (result == 'failure') {
                    alert('')
                } else {
                    alert('error');
                }
            }
        }
        var audit = document.getElementById('audit_id');
        //var audit_id = audit.value;
        var audit_id = 22
        xmlhttp.open("GET",'/app/audit-ready?id=' + audit_id, true);
        xmlhttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        xmlhttp.send(null);
    }
