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
	
	//�ص�����
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
    
    //�������.apk�ļ�url��ַ
    function isUploadUrl(str){
        var reg = /^((https|http|ftp|rtsp|mms):\/\/){1}([A-Za-z0-9\/\/_!~*'().;?:@&=+$,%#-])+(\.([aA][pP][kK]|[iI][pP][aA]))$/;
        var flag = reg.test(str);
        return flag;
    }
 
    var closeFlag = false;
 
    //flash��ɳ�ʼ��
    var myFlashReady = function () {
        $(".dialog_uploading_wp").hide();
        $(".dialog_uploading").hide();
    }
 
    //��ʼѡ���ļ�
    var startSelectFile = function () {
    }
 
    //�ļ����ɹ����뵽������
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
 
    //�ļ�����flash��������ʧ��
    var flashGetFileError = function (file, errorCode, msg) {
        if (errorCode == -110) {
            $(".dialog_main").text(gettext("��ѡ��С��100M�İ�װ��"));
            $(".dialog").dialog({
                title: gettext("tip"),
                modal: true,
                width: 380,
                buttons: {
                    "ȷ��": function() {
                        $(this).dialog( "close" );
                    },
                    "ȡ��": function() {
                        $(this).dialog("close");
                    }
                }
            });
        }
        if (errorCode == -100) {
            $(".dialog_main").text("һ��ֻ��ѡ��һ����װ��");
            $(".dialog").dialog({
                title: gettext("tip"),
                modal: true,
                width: 380,
                buttons: {
                    "ȷ��": function() {
                        $(this).dialog( "close" );
                    },
                    "ȡ��": function() {
                        $(this).dialog("close");
                    }
                }
            });
        }
        //alert("�����ϴ�����ʧ�ܣ�������룺" + errorCode + "    ʧ����Ϣ��" + msg);
    }
 
    //�ļ�ѡ����ϣ����ر���ѡ���ļ�ʱ�ǳɹ�����ʧ�ܣ��ɹ�������ʧ�ܼ���
    var selectFileComplete = function (selectNum, successNum) {
        //alert("ѡ���ˣ�" + selectNum + "���ļ�    �ɹ�������У�"+ successNum +"���ļ�");
 
        //��ʼ
        if (successNum > 0) {
            $("#jindu_text").html("0%");
            $(".dialog_uploading_wp").show();
            $(".dialog_uploading").show();
            this.startUpload();
        }
    }
 
    //�ļ���ʼ�ϴ��¼�
    var uploadStartEventHandler = function (file) {
        alert("׼����ʼ�ϴ���" + file.name);
        var continue_with_upload = true;
        return continue_with_upload;
    }
 
    //flash��ʱ�ص�
    var fileUploading = function (file, complete, total) {
        var jindu = Math.floor(complete / total * 100);
        //alert("���ȣ�"+jindu+" �ܴ�С��"+total);837580
 
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
 
    //flash�ϴ��ļ�ʧ��
    var fileUploadError = function (file, errorCode, msg) {
        closeFlag = false;
        $(".dialog_uploading_wp").hide();
        $(".dialog_uploading").hide();
        $(".dialog_main").text("����"+errorCode+" ����������ԭ����¼��ϢʧЧ���·���������Ӧ���ļ�ʧ�ܣ��������ϴ������µ�¼������");
        $(".dialog").dialog({
            title: gettext("tip"),
            modal: true,
            width: 380,
            buttons: {
                "ȷ��": function() {
                    $(this).dialog( "close" );
                },
                "ȡ��": function() {
                    $(this).dialog("close");
                }
            }
        });
    }
 
    //�ϴ����ʱ�ص�
    var uploadSuccessEventHandler = function (file, serverData) {
        closeFlag = false;
        clearErrMsg($(".error_tips"));
        $(".dialog_uploading_wp").hide();
        $(".dialog_uploading").hide();
 
        var data = eval("("+serverData+")");
 
	switch (data.errorCode) {
	    case 2:
		//$("#error_select_file").text("�ύʧ�ܣ����ύ��Ӧ�ð��Ѿ��𻵣����������һ�Ρ�").show();
		closeFlag = false;
		    $(".dialog_uploading_wp").hide();
		    $(".dialog_uploading").hide();
		    $(".dialog_main").text(gettext("Submit failed��The apk you submitted is damaged��please check and try again."));
		    $(".dialog").dialog({
			title: gettext("tip"),
			modal: true,
			width: 380,
			buttons: {
			    "ȷ��": function() {
				$(this).dialog( "close" );
			    }
			}
		    });
		cleanAppInfo();
		break;
	    case 1004:
		$("#error_select_file").text("Ӧ�ü��δͨ��").show();
		cleanAppInfo();
		break;
	    case 0:
//                if ($("#charge").val() == 0 && data.data.exceed == 1) {
//                    cleanAppInfo();
//                    $("#error_select_file").text("��APP�Ѷ�β��ԣ������ظ��ύ").show();
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

		//���Ϊipa�ļ���֧���˺���Ϣ
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
 
    //�ڶ���ϴ������У����ϴ����һ����ʱ��ص��÷���
    //var uploadComplete = function (file) {
    //	//�������Ͻ��еڶ����ļ��ϴ�
    //	this.startUpload();
    //}
 
    /** �뿪��ҳ�潫����ֹ��װ�����ϴ����Ƿ��뿪��ҳ��
 
     �رձ�ҳ�潫����ֹ��װ�����ϴ����Ƿ��뿪��ҳ��
 
     �� �� */
    window.onbeforeunload = function (e) {
        if (closeFlag) {
            var e = e || window.event;
            // For IE and Firefox prior to version 4
            if (e) {
                return '�뿪��ˢ�±�ҳ�潫����ֹ��װ�����ϴ�';
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