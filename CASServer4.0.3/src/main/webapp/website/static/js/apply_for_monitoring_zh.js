var swfu1;
var check_flag = 1;
 
$(function(){
    swfu1 = new SWFUpload({
	upload_url : "/app/do_upload/",
	file_post_name : "adaptFile",
	flash_url : "/static/swf/swfupload.swf",
	flash9_url : "/static/swf/swfupload_fp9.swf",
	file_size_limit : "100 MB",
	//file_upload_limit : 1,
	file_queue_limit : 1,
	file_types : "*.apk",
	file_types_description : "APP Files",
	//debug: true,
	button_image_url : "/static/images/upload_bt_"+gettext('lan')+".png",
	button_text: "",
	button_width: "100",
	button_height: "30",
	button_placeholder_id: "select_file",
	//button_text_style: '.input_upload {}',
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
        if (post_params["authtoken"] == undefined || post_params["authtoken"] == "") {
            this.addPostParam("authtoken", "66210100eb582d1f1598941bbf00b7a5d68f00f2");
        }
 
        var ext = file.name.substr(file.name.lastIndexOf(".")+1).toLowerCase();
        var syspfName;
        if (ext == "ipa") {
            syspfName = "ios";
        } else {
            syspfName = "android";
        }
        //$("#syspf_name").val(syspfName);
        //$("#syspf_ext").val(ext);
        //if (ext == 'test') {
            //$("#select_script_content").val(file.name);
        //} else {
            $("#select_file_content").val(file.name);
        //}
 
        closeFlag = true;
        //this.addPostParam("syspfName", syspfName);
        //this.addPostParam("syspfExt", ext);
        this.addPostParam("appsAdaptFileName", file.name);
    }
 
    //文件加入flash长传队列失败
    var flashGetFileError = function (file, errorCode, msg) {
        if (errorCode == -110) {
            $(".dialog_main").text(gettext("请选择小于100M的安装包"));
            $(".dialog").dialog({
                title: gettext("tip"),
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
                title: gettext("tip"),
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
            title: gettext("tip"),
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
 
	switch (data.errorCode) {
	    case 2:
		//$("#error_select_file").text("提交失败！您提交的应用包已经损坏，请检查后再试一次。").show();
		closeFlag = false;
		    $(".dialog_uploading_wp").hide();
		    $(".dialog_uploading").hide();
		    $(".dialog_main").text(gettext("Submit failed！The apk you submitted is damaged，please check and try again."));
		    $(".dialog").dialog({
			title: gettext("tip"),
			modal: true,
			width: 380,
			buttons: {
			    "确定": function() {
				$(this).dialog( "close" );
			    }
			}
		    });
		cleanAppInfo();
		break;
	    case 1004:
		$("#error_select_file").text("应用检测未通过").show();
		cleanAppInfo();
		break;
	    case 0:
//                if ($("#charge").val() == 0 && data.data.exceed == 1) {
//                    cleanAppInfo();
//                    $("#error_select_file").text("该APP已多次测试，请勿重复提交").show();
//                } else {
		$("#app_name_content").val(data.data.appName);
		$("#app_name").val(data.data.appName);
		$("#app_pkg").val(data.data.appPkg);
		$("#app_icon").val(data.data.appIcon);
		$("#app_storepath").val(data.data.storePath);
		$("#app_size").val(data.data.appSize);
		$("#app_filename").val(data.data.fileName);
		$("#app_alias").val(data.data.appAlias);
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
 
    function cleanAppInfo() {
        $("#select_file_content").val("");
    }
 
    function cleanScriptInfo() {
    }
 
    //在多个上传任务中，当上传完毕一个的时候回调该方法
    //var uploadComplete = function (file) {
    //	//可以马上进行第二个文件上传
    //	this.startUpload();
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
 
  $(function(){
	$(".account").bind({
	    'mouseover':function(){
		$(this).addClass("account_mouseover");
	    },
	    'mouseout':function(){
		$(this).removeClass('account_mouseover');
	    }
	});
	$(".drop_downs").bind({
	    'mouseover':function(){
		$(this).addClass("drop_downs_mouseover");
	    },
	    'mouseout':function(){
		$(this).removeClass('drop_downs_mouseover');
	    }
	});
    });
	
    $(document).ready(function(){
	$("#app_package_text").show();
	$("#stepChoice").css("display","none");
    });
    
    function showErrMsg(box, msg) {
        box.text(msg).css("color", "red").show();
    }
	
    function validAdapt(){
        var selectFileVal = $("#select_file_content").val();
        var errFlag = 0;
	if(!selectFileVal){
	    errFlag++;
	    showErrMsg($("#error_select_file"), gettext("Please select a file"));
	}
	
	if(!$("#disclaimer").attr("checked")){
	    errFlag++;
	    showErrMsg($("#error_disclaimer"), gettext("Please read and agree Bangcle's Privacy Policy"));
	}
        return errFlag;
    }    
	    
    function save() {
	if (validAdapt()==0){
	    $("#user_adapt_form").submit();
	}
    }
    
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