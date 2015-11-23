function trim (str) {
		var reg = /^\s+|\s+$/g;
		return str.replace(reg, "");
	}
	  /** 判断字节长度 */
	function fucCheckLength(msg) {
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
        if ($("#dialogalert").length == 0) {
            $("body").append('<div id="dialogalert" class="dialog" ><div id="dialog_main" class="dialog_main"></div></div>');
            $("#dialogalert").dialog({
                autoOpen: false,
                title: '消息框',
                modal: true,
                width: 320,
                resizable:false,
                overlay: {
                    opacity: 0.5,
                    background: "black"
                },
                buttons: {
                    "确定": function(){
                        $(this).dialog("close");
                    }
                }
            });
        }
 
        $("#dialog_main").html(message);
        $("#dialogalert").dialog("open");
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
                width: 320,
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
 
    function showErrMsg(box, msg) {
        box.text(msg).css("color", "red").show();
    }
 
    function clearErrMsg(box) {
        box.each(function(){
            $(this).text("").hide();
        });
    }
 
	var Validator = {
		//检查EMAIL
		isEmail: function (str) {
		
		  var reg =  /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
		  var flag = reg.test(str);
		  return flag;
		},
		
	   isFixedTel: function(str) {
			var reg = /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
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
			return str.length > num;
		},
		
	    isEmpty: function(str) {
			return $.trim(str) == "";
		},
		PWD_TOO_LONG: "请输入6～16位密码",
		PWD_TOO_SHORT: "请输入6～16位密码",
		PWD_TOO_SIMPLE: "请输入6～16位数字+字母组合",
		CONFIRM_PWD_MISMATCHED: "两次输入的密码不一致",
		VALID_MOBILE_NUM: "请输入有效的联系方式",
		IS_REQUIRED: "请输入",
		VALID_EMAIL: "请输入有效的邮箱地址",
		EMAIL_TOO_LONG: "邮箱地址太长，请输入有效的邮箱地址",
		COMPANY_NAME_TOO_LONG: "公司名字过长，请输入不超过50个字符",
		COMPANY_URL_TOO_LONG: "公司主页链接过长，请输入不超过256个字符",
		DONT_AGREE: "您没有同意服务协议"
	}
	
	function go(url, m, uri, callback,parray) {
		$.ajax({
	        url : "/json/purview.action?op=Permissi.verifyUrl&tz="+ Math.random(),
	        type : "post",
	        dataType : "json",
	        data : {uri:uri,mid:m},
	        async : false,
	        cache : false,
	        success : function(data) {
	        	if (data.data != undefined && data.data.result != undefined) {
	        		var result = data.data.result;
	        		if (parseInt(result) == 0) {
	        			if (callback == undefined) {
	        				window.location=url;
	        			} else {
	        				var p = new Array(20);
	        				if (parray != undefined && parray.length > 0) {
		        				var param = parray.split(",");
		        				for (var i = 0; i < param.length; i++) {
		        					p[i] = param[i];
		        				}
	        				}
	        				callback(p[0],p[1],p[2],p[3],p[4],p[5],p[6],p[7],p[8],p[9],p[10],p[11],p[12],p[13],p[14],p[15],p[16],p[17],p[18],p[19]);
	        			}
	        		} else if (parseInt(result) == 1) {
	        			alert_d("地址有误");
	        		} else if (parseInt(result) == 2) {
	        			alert_d("服务异常请稍候再试");
	        		} else if (parseInt(result) == 3) {
	        			popUpLogin();
	        		} else if (parseInt(result) == 4) {
	        			popUpActivation();
	        		} else if (parseInt(result) == 5) {
	        			popUpActivation();
	        		}
	        	}
	        },
	        error : function(msg) {
	        }
	    });
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
	
	
	 $(function(){
 
	    $("#copy_url").click(footCopyToClipboard);
	    $("#url_content").keydown(function(e){
	        var key =  e.which;
	        if(key == 8){
	            return false;
	        }
	    });
	    
	        $('#go_free_adapt').bind({
	            click: function() {
	            	go('none','100','/real.action?op=RealAuto.create',formSubmit);
	                //$("#create_adapt_form").submit();
	            }
	        });
	
		   $('#go_umeng_adapt').bind("click", function(){
			   	go('none','100','/real.action?op=RealAuto.create',formSubmit);
		      	//$("#create_adapt_form").submit();
	        });
		   
		   $("#normal_create").click(function(){
			   document.location.href="-next=-app-member_upload-.htm"/*tpa=http://www.bangcle.com/app/member_upload*/;
		   });
		   
		   $("#fast_experience").click(function(){
			   fastExperience();
		   });
		   
		   $("#close_experience_dislog").click(function(){
		   		$("#create_dialog_wp").hide();
		   		$("#create_dialog_choose").hide();
		   });
		   
		   //if (parseInt("1") == 1) {
			   //nativeExperience();
		   //}
        if (parseInt("1") != 1) {
            $("#close").bind("click", function(){
                activityRecord();
                $("#dialog_ucad_w").hide();
                $("#dialog_ucad").hide();
            });
 
            $("#join_button").bind("click", function(){
                activityRecord();
                $("#dialog_ucad_w").hide();
                $("#dialog_ucad").hide();
            });
        }
 
    });
 
    function activityRecord() {
        var actionurl = "/ajax/uc.action?op=Users.activityRecord";
        var rd = Math.random();
        $.ajax({
            url : actionurl,
            type : "post",
            dataType : "json",
            data:null,
            async : true,
            cache : false,
            success : function(result) {
            },
            error : function(msg) {
            }
        });
    }
    
    function formSubmit(){
    	$("#create_adapt_form").submit();
    }
    
    function createAdapt(){
    $("#create_adapt_form").submit();
    }
    
    function footCopyToClipboard(){
    var txt = $("#url_content").val();
    if(window.clipboardData) {
        window.clipboardData.clearData();
        window.clipboardData.setData("Text", txt);
        alert("复制成功！");
    } else if(navigator.userAgent.indexOf("Opera") != -1) {
        window.location = txt;
    } else if (window.netscape) {
        try {
            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
        } catch (e) {
            alert("被浏览器拒绝！\n请在浏览器地址栏输入'about:config'并回车\n然后将'signed.applets.codebase_principal_support'设置为'true'");
            return;
        }
        var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
        if (!clip)
            return;
        var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
        if (!trans)
            return;
        trans.addDataFlavor('text/unicode');
        var str = new Object();
        var len = new Object();
        var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
        var copytext = txt;
        str.data = copytext;
        trans.setTransferData("text/unicode",str,copytext.length*2);
        var clipid = Components.interfaces.nsIClipboard;
        if (!clip)
            return false;
        clip.setData(trans,null,clipid.kGlobalClipboard);
        alert("复制成功！");
    }
}
    function nativeExperience() {
    	$("#create_dialog_wp").show();
    	$("#create_dialog_choose").show();
    }
    
    function fastExperience() {
    	$("#create_dialog_wp").hide();
    	$("#create_dialog_choose").hide();
   		$("#common_iframe").attr("src", "http://realauto.testin.cn/real/nativeapp.action?op=App.experienceFirst");
    	$("#common_iframe").show();
    }
    
    
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
	
	
	function pop(status,appid,appname){
	    if (status==0){
		location.href = "-next=-app-examine--appname=.htm"/*tpa=http://www.bangcle.com/app/examine/?appname=*/+appname+"&r=r";
	    } else if(status==1 || status==3 || status==6){
		$("#common_iframe").attr("src", "/app/app_failed_tip/?appid="+appid+"&r=r");
		$("#common_iframe").show();
	    } 
	}
	
	function mopop(status,appid,appname){
	    if (status==0){
		location.href = "-next=-app-examine--appname=.htm"/*tpa=http://www.bangcle.com/app/examine/?appname=*/+appname+"&r=m";
	    } else if(status==1){
		$("#common_iframe").attr("src", "/app/app_failed_tip/?appid="+appid+"&r=m");
		$("#common_iframe").show();
	    } 
	}
	
// 初始化浮出框
$(function(){
    //$("#trigger4").powerFloat({
	//target:'<div style="margin:10px 10px 10px 10px"><b>此软件通过以下安全检测:</b><br/><br/><img style="vertical-align: middle" src="tencent_manager.png"/*tpa=http://www.bangcle.com/static/images/tencent_manager.png*//>腾讯安全检测中心 &nbsp; &nbsp;检测通过</div>',
	////target:'/app/test/',
	//targetMode:'html'
    //});
    $('a[name="trigger"]').each(function(i,o){
	var str = "";
	if($(o).attr('rel')=='n')
	    str = '<font color="red">未通过安检<font/>';
	else if($(o).attr('rel')=='y')
	    str = '通过安检';
	var detected_by = gettext("detected by")
	$(o).powerFloat({
	    //target:'<div style="margin:10px 10px 10px 10px"><b>'+ detected_by +'</b><br/></div>',
	    //targetMode:'html'
	});
    });
});

//initialize download reinforce package tip dialog
function downloadReinforcePkg(id) {
    /*
    var left = $(window).width()/2-163+"px";
    //var top = $(window).height()/2-74+"px";
    var top = $("#downloadReinforce_"+id).offset().top + "px";
    $("#down_pkg_tip").css("left",left);
    $("#down_pkg_tip").css("top",top);*/
    $("#down_pkg_wp").show();
    $("#down_pkg_tip").show();
    $("#rid").val(id);
}

function submitDownTip(){
    $("#down_pkg_wp").hide();
    $("#down_pkg_tip").hide();
    $("#down_tip").submit();
    if($("#i_known").attr("checked"))
	var tmp = setTimeout("location.reload()", 2000);
}