	/** debug????????firebug?????????????
	 * ????????????firebug?????????????alert????
	 * ????logit("a", b)*/
	function logit(key, value) {
		try {
			console.log(key, value );
		} catch(e) {
			alert(key + " : " + value);
		}
	}
    
  	function allErrorDialog() {
		var err = "?????????????????????";
		if ($("#all_error_dialog_div").is(":visible")) {
			return false;
		}
  		$("#all_error_dialog_div").html(err).fadeIn(200).delay(3000).fadeOut(600);
  	}
  	
  	/** ?????????? */
	function cancelErrorDialog() {
		$("#all_error_dialog_div").dialog("destroy");
	}
 
	/**
	 * ???????????????????????????????????
	 * @param opt [{"id": "side-bar", "h":100}....]
	 */
	function autoSize(opt){//alert(mainId);
		var height = document.documentElement.clientHeight;
		var h;
		$.each(opt, function(i, v){
			h = height - v["h"];
			$('#'+v["id"]).css('height',h+'px');
		});
//		$('#'+sideId).css('height',(height-220)+'px');
//		$('#'+mainId).css('height',(height-186)+'px');
	}
	
	function checkUserSession(data){
		if (data == null || data.length <= 0) {
			return 0;
		}
		if (data.indexOf("getUserSessionIsError") >= 0) {
			document.location.href = '/portal.action?op=Portal.login';
			return 1;
		}
		return 0;
	}
 
	/*datepicker local to zh-CN*/
	function localDatePicker() {
		$.datepicker.regional['zh-CN'] = { 
	        clearText: '????', 
	        clearStatus: '???????????', 
	        closeText: '???', 
	        closeStatus: '?????????', 
	        prevText: '<????', 
	        prevStatus: '???????', 
	        prevBigText: '<<', 
	        prevBigStatus: '????????', 
	        nextText: '????>', 
	        nextStatus: '???????', 
	        nextBigText: '>>', 
	        nextBigStatus: '????????', 
	        currentText: '????', 
	        currentStatus: '???????', 
	        monthNames: ['???','????','????','????','????','????', '????','????','????','???','????','?????'], 
	        monthNamesShort: ['?','??','??','??','??','??', '??','??','??','?','??','???'], 
	        monthStatus: '????¡¤?', 
	        yearStatus: '???????', 
	        weekHeader: '??', 
	        weekStatus: '???????', 
	        dayNames: ['??????','?????','?????','??????','??????','??????','??????'], 
	        dayNamesShort: ['????','???','???','????','????','????','????'], 
	        dayNamesMin: ['??','?','??','??','??','??','??'], 
	        dayStatus: '???? DD ???????', 
	        dateStatus: '??? m?? d??, DD', 
	        dateFormat: 'yy-mm-dd', 
	        firstDay: 1, 
	        initStatus: '?????????', 
	        isRTL: false
	    }; 
        
    	$.datepicker.setDefaults($.datepicker.regional['zh-CN']);
	}
    
    /** ???? */
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
	 * ???????? 
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
	 * ????????
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
	 * ?????
	 */
    function alert_d(message){
        $("#dialog_main").html(message);
        $("#dialog").dialog({
            title: '??????',
            modal: true,
            width: 380,
//            resizable:true,
//            overlay: {
//                opacity: 0.5,
//                background: "black"
//            },
            buttons: {
                "???": function(){
                    $(this).dialog("close");
                }
            }
        });
    }
    
    /**
     * ??????
     */
    function confirm_d(message, callback){
        if ($("#dialogconfirm").length == 0) {
            $("body").append('<div id="dialogconfirm" class="dialog" ><div id="dialog_main" class="dialog_main"></div></div>');
            $("#dialogconfirm").dialog({
                autoOpen: false,
                title: '??????',
                modal: true,
                resizable:false,
                overlay: {
                    opacity: 0.5,
                    background: "black"
                },
                buttons: {
                    "???": function(){
                        callback();
                        $(this).dialog("close");
                    },
                    "???": function(){
                        $(this).dialog("close");
                    }
                }
            });
        }
        $("#dialogconfirm").dialog("open");    
    }
 
    //??????????????????????????????????????
    function autoLogin(email) {
        $("#user_info").val(email);
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
	        				document.location.href=url;
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
	        			alert_d("???????");
	        		} else if (parseInt(result) == 2) {
	        			alert_d("???????????????");
	        		} else if (parseInt(result) == 3) {
	        			popUpLogin();
	        		} else if (parseInt(result) == 4) {
	        			popUpActivation();
	        		} else if (parseInt(result) == 5) {
	        			if (uri == "/zone.action?op=ZoneIndex.zonePostApp") {
	        				popUpLogin();
	        			} else {
		        			popUpActivation();
	        			}
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
	
	var payDownLoadTips = function() {
		alert_d("????????????????????????????????????—¨???????????????????????????");
	}
	
	var payViewErrorReportTips = function() {
		alert_d("?????????????????????????App??????????????????????");
	}
	
	var payGroupReportTips = function() {
		alert_d("??????????????????????????????????????—¨?????????????????????");
	}
	
	var payDialogLogTips = function() {
		alert_d("???????????????????????????????????????????????????????");
	}
	
	
	
	// create Date object for current location
	globaldate = new Date();
	// obtain local UTC offset and convert to msec
	localOffset = globaldate.getTimezoneOffset() * 60000;
	
	
 
function init(){
	$("#cc_critical_errors").bind({
		click: function(){
			$("#cc_all_devices").removeClass("cur");
			$("#cc_critical_errors").addClass("cur");
			$("#show_critical_errors").show();
			$("#show_all_devices").hide();
		}
	});
	
	$("#cc_all_devices").bind({
		click: function(){
			$("#cc_all_devices").addClass("cur");
			$("#cc_critical_errors").removeClass("cur");
			$("#show_critical_errors").hide();
			$("#show_all_devices").show();
		}
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
 
        });
	
	
	
	
	$(function(){
 
$("#download").bind({
		click: function() {
			var adpId = $(this).attr("adpId");
			$.ajax({
		        url : "/json/nativeapp.action?op=Report.exportAll",
		        type : "post",
		        dataType : "json",
		        data : {adpId:adpId},
		        async : true,
		        cache : false,
		        success : function(data) {
		        	if (data.data == undefined) {
		        		alert("error");
		        	}
		           	var errorCode = data.data.errCode;
		           	if (parseInt(errorCode) > 0) {
		           		window.location.reload(true);
		           	} else {
		        		alert("error");
		           	}
		        },
		        error : function(msg) {
		            alert("error");
		        }
		    });
		}
	});
});


/** reportDetail , range */
 
function createCORSRequest(method, url){
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr){
        xhr.open(method, url, true);
        xhr.withCredentials = true;
    } else if (typeof XDomainRequest != "undefined"){
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}
 
function showDetailLogs(appName, modelName, reportTime , logUrl,rangedd){
	
	if (modelName == null || modelName.length < 1
		|| logUrl == null 
		|| logUrl.length < 1
		|| rangedd == null
		|| rangedd.length < 1) {
		return;
	}
	
	mainData(appName, modelName);
	
	deviceLogTitleData(reportTime, logUrl);
	
	var reqUrl =  'http://42.121.98.187:8077' + "/logger.pyc/range?url=" + logUrl + "&range=" + rangedd;
	var request1 = createCORSRequest("GET", reqUrl);
			if (request1){
				request1.onload = function(){
				
				var result = request1.responseText;
				
				if(result == null){
					return;
				}
 
				var ress = JSON.parse(result);
                
				if (ress == null) {
					return;
				}
				
				var code = ress.code;
				var ranges = ress.ranges;
				if (code == null || code == undefined || code != 0
				      	  || ranges == null ||  ranges == undefined
				          || ranges.length < 1) {
					return;
				}
				
       			var data = ranges[0];
               	if (data == null) {
             		return;
               	}
 
               	var detailInfos = data.lines;
               	if (detailInfos == null || detailInfos == undefined || detailInfos.length < 1) {
             		return;
               	}
                 	// data 
                 	composeData(detailInfos);
                 	$(".ui-dialog-title").html(appName + "-" + modelName + " Log");
                 	$("#logs_main_0_show").show();
                 	$("#logs_main_0_show").dialog({
						modal: true,
						width: 960
					});   	 	
				};
				request1.send();
			}   
}
 
function mainData(appName, modelName){
 $("#logs_main_0_show").attr("title", appName + "-" + modelName + " Log");
}
 
function deviceLogTitleData(reportTime, logUrl){
	var  data = "<strong>";	    
		 data += "<a href=\"" + logUrl + "\" class=\"icon_download\">Download Log</a>";
		 data += "</strong>";
		 data += reportTime;
 $("#logs_main_1_show").html(data);
}
 
/** data */
function composeData(detailInfos){
 
		if (detailInfos == null || detailInfos.length < 1) {
			return false;
		}
	
		var data = "" ;
		var tmpTr = "<tr style=\"{0}\"><td><span class=\"{1}\" title=\"{2}\">{3}</span></td></tr>" ;
		var tmpTrStyle = "";
		var errFlag = "";
		
	 for (var i = 0; i < detailInfos.length; i++ ) {
	 	 	var tmpVar = $.trim(detailInfos[i]);
	 		if (tmpVar == null || tmpVar.length < 1 ) {
	 			continue;
	 		}
	 	
	 		var flag = tmpVar.substring(0,1);
	 		if (flag != null && flag.length > 0) {
	 		 switch (flag) {
                case 'f':
                	tmpTrStyle = "color:#F00;";
                	errFlag = "error";
                    break;
 
                case 'e':
                    tmpTrStyle = "color:#F00;";
                    break;
 
                case 'w':
                	tmpTrStyle = "color:#F60;";
                    break;
                case 'd':
                    tmpTrStyle = "color:#03F;";
                    break;
                case 'i':
                	tmpTrStyle = "color:#080;";
                    break;
            	}
	 		}
	 		
	 		var content = "";
	 		if (tmpVar.length > 1) {
	 			content = tmpVar.substring(1,tmpVar.length);
	 		}
	 		
	 		var reVarData = tmpTr;
	 		reVarData = reVarData.replace('{0}', tmpTrStyle);
	 		reVarData = reVarData.replace('{1}', errFlag);
            reVarData = reVarData.replace('{2}', content);
            
            if (content != null) {
           		content =  content.replace(/\s/g,'<i></i>');
            }
            
            reVarData = reVarData.replace('{3}', content);
            
            data += reVarData;
            errFlag = "";
            tmpTrStyle = "";
	 }
	 
	$("#logs_main_3_show").html(data);
}