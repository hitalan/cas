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
		PWD_TOO_LONG: gettext("Please enter a value between 6 and 16 characters long."),
		PWD_TOO_SHORT: gettext("Please enter a value between 6 and 16 characters long."),
		PWD_TOO_SIMPLE: "请输入6～16位数字+字母组合",
		CONFIRM_PWD_MISMATCHED: gettext("Please enter the same value again."),
		VALID_MOBILE_NUM: "请输入有效的联系方式",
		IS_REQUIRED: gettext("Please enter"),
		VALID_EMAIL: gettext("Please enter a valid email address."),
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
	
	
	
	
	    var count = 4;
    var T;
    var success = "";
$(document).ready(function(){
    init();
    if(false) {
        T = window.setInterval(function(){
            if (count > 0) {
                $("#success").html(success + count + "秒后自动进入用户中心！");
            }
            if (count < 1) {
                window.clearInterval(T);
                window.location.href = "http://www.bangcle.com/uc.action?op=Users.index&authtoken="+"";
            }
            count--;
        }, 1000);
    }
});

function init() {
    $("#email")
            .focus(function () {
                clearErrMsg($("#err_reg_email"));
            })
            .blur(function () {
                validRegEmail();
            });
    $("#pwd")
            .focus(function () {
                clearErrMsg($("#err_reg_pwd"));
            })
            .blur(function () {
                validRegPwd();
            });
    $("#confim_pwd")
            .focus(function () {
                clearErrMsg($("#err_reg_confimPwd"));
            })
            .blur(function () {
                validConfimPwd();
            });
}
function reg() {
    if (validRegEmail() && validRegPwd() && validConfimPwd() && validAgreements()) {
        return true;
        $("#reg_form").submit();
    }
    return false;
}

function validRegEmail() {
    var strm = $.trim($("#email").val());
    if(""==strm) {
        $("#err_reg_email").css("display","block");
        $("#err_reg_email").text(Validator.IS_REQUIRED + gettext("email"));
        return false;
    }
    if (Validator.isMore($("#email").val(), 64)) {
        $("#err_reg_email").css("display","block");
        $("#err_reg_email").text(Validator.EMAIL_TOO_LONG);
        return false;
    }
    if (!Validator.isEmail($("#email").val())) {
        $("#err_reg_email").css("display","block");
        $("#err_reg_email").text(Validator.VALID_EMAIL);
        return false;
    }
    return true;
}

function validRegPwd() {
    var strm =$("#pwd").val();

    if(""==strm) {
        $("#err_reg_pwd").css("display","block");
        $("#err_reg_pwd").text(Validator.IS_REQUIRED + gettext("password"));
        return false;
    }
    if(Validator.isLess(strm, 6)) {
        $("#err_reg_pwd").css("display","block");
        $("#err_reg_pwd").text(Validator.PWD_TOO_SHORT);
        return false;
    }
    if(Validator.isMore(strm, 16)) {
        $("#err_reg_pwd").css("display","block");
        $("#err_reg_pwd").text(Validator.PWD_TOO_LONG);
        return false;
    }

//		if(Validator.isDigital(strm) || Validator.isAlpha(strm)) {
//		  $("#err_reg_pwd").css("display","block");
//		  $("#err_reg_pwd").text(Validator.PWD_TOO_SIMPLE);
//		  return false;
//		}
    return true;
}

//用户协议
function validAgreements() {
    var ret = false;
    var agreements = $("#agreements");
    if(agreements.length>0){
	if(agreements.attr("checked")=="checked"){
	    ret = true;
	} 
    } else {
	ret = true;
    }
    return ret;
}

function validConfimPwd(){
    var confimPwd = $.trim($("#confim_pwd").val());
    if(""==confimPwd) {
        $("#err_reg_confimPwd").css("display","block");
        $("#err_reg_confimPwd").text(Validator.IS_REQUIRED + gettext("confirm password"));
        return false;
    }

    var pwd = $.trim($("#pwd").val());
    if (confimPwd != pwd) {
        $("#err_reg_confimPwd").css("display","block");
        $("#err_reg_confimPwd").text(Validator.CONFIRM_PWD_MISMATCHED);
        return false;
    }
    return true;
}

function validIsStaff(){
    var is_staff=$('input:radio[name="is_staff"]:checked').val(); 
	if(!is_staff){ 
	    $("#err_is_staff").css("display","block");
	    $("#err_is_staff").text(gettext("Please select an individual or a  enterprise"));
	    return false; 
	} else{ 
	    return true
	} 
}

function showErrMsg(box, msg) {
    box.text(msg).css("color", "red").show();
}

function clearErrMsg(box) {
    box.each(function(){
        $(this).text("").hide();
    });
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

        })