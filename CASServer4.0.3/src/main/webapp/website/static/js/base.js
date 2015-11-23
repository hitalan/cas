//基本校验
var Validator = {

	//byte length
    byteLength : function(msg) {
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

	//check email
	isEmail: function (str) {
	  var reg = /^([a-zA-Z0-9_-]).+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
	  var flag = reg.test(str);
	  return flag;
	},

	//check mobile
	isMobileNum: function(str) {
		var reg = /^1\d{10}$/;
		var flag = reg.test(str);
		return flag;
	},

	//a-z A-Z
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

    //检测（允许中文，英文，字母，数字，"_"，"."）
    isCNDefaultStr : function(str) {
        var flag = true;
        var testStr = /^[\u4e00-\u9fa5a-zA-Z0-9\.\_]*$/;
        return testStr.test(str);
    },

    //检测（允许英文，字母，数字，"_"，"."）
    isDefaultStr : function(str) {
        var flag = true;
        var testStr = /^[\a-zA-Z0-9\.\_]*$/;
        return testStr.test(str);
    },

    //是否是空串
	isEmpty: function(str) {
		return str.replace(/^\s+|\s+$/g,'') == "";
	},

	//图片格式
	isImg: function(str) {
	  var reg = /.+(\.gif|\.jpg|\.jpeg|\.png)$/i;
	  var flag = reg.test(str);
	  return flag;
	},
	
	//判断是否为url路径
	isUrl:function(str){
		return (/^(http:|ftp:)\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"])*$/).test(str);
	},
	
	//检查下载.apk文件url地址
	isUploadUrl:function(str){
        var reg = /^((https|http|ftp|rtsp|mms):\/\/){1}([A-Za-z0-9\/\/_!~*'().;?:@&=+$,%#-])+(\.([aA][pP][kK]|[iI][pP][aA]))$/;
        var flag = reg.test(str);
        return flag;
    },
	
	//检查下载.apk文件url地址
	isAppFile:function(str){
        var reg = /\.([aA][pP][kK]|[iI][pP][aA])$/i;
        var flag = reg.test(str);
        return flag;
    }
};

//浏览器类型及版本判断
var Browser = {
	IE:window.ActiveXObject?true:false,
	FF:(navigator.userAgent.indexOf('Firefox') >= 0)?true:false,
	Chrome:(navigator.userAgent.indexOf('Chrome') >= 0)?true:false,
	Opera:window.opera?true:false,
	Safari:(navigator.userAgent.indexOf('Safari') >= 0)?true:false,
	//版本判断
	version:function(v) {
		var nav = navigator.userAgent.toLowerCase();
		if(!v) return;
		switch(v) {
			case 'IE':return nav.match(/msie ([\d.]+)/)[1];break;
			case 'FF': return nav.match(/firefox\/([\d.]+)/)[1];break;
			case 'Chrome': return nav.match(/chrome\/([\d.]+)/)[1];break;
			case 'Opera': return nav.match(/opera\/([\d.]+)/)[1];break;
			case 'Safari': return nav.match(/version\/([\d.]+)/)[1];break;
		}
	},
	IE6:function() { return !!(browser.IE && parseInt(browser.vesion('IE'))<7)}
};

//数组相关
var ArrayExpand = {
	//判断一个对象是否为数组
	isArray:function(value) {
		return Object.prototype.toString.apply(value) === '[object Array]';
	},
	
	//返回一个数在一个数组中的位置
	indexOf:function(arr,value) {
	   for (var i = 0, il = arr.length; i < il; i++) { 
	     if (arr[i] == value) return i;
	   }
	   return -1;	
	},	
	
	//数组元素去重
	unique:function(arr){
		var len = arr.length;
		for (var i=0, il = len; i < il; i++) {
			var it = arr[i];
			for (var j = len - 1; j>i; j--) {
				if (arr[j] == it) arr.splice(j, 1);
			}
		}
		return arr;		
	},
	
	//最小值
	minInt:function(arr) {
		var temp = arr[0];
	    for(var i=0;i<arr.length;i++) {
			if(arr[i]<temp) temp = arr[i];
			}
	   return temp;
	},
	
	//最大值
	maxInt:function(arr) {
		var temp = arr[0];
	    for(var i=0;i<arr.length;i++) {
			if(arr[i]>temp) temp = arr[i];
			}
	   return temp;
	},
	
	//删除数组中指定索引的值
	removeAt:function (arr, index) {
        var items = [];
        if (index >= arr.length) return;
        else {
		items = arr.slice(0, index).concat(arr.slice(index + 1, arr.length));
        return items;
		}
    },
    
	//将任何对象转换为数组
	makeArray:function(o) {
       if(o == null) return [];
	   if(!o.length || typeof o === 'string') return [o];
	   var result = [];
	   for(var i=0;i<o.length;i++) 
	      result[i] = o[i];
		return result;
	}
};

//cookie的基本操作
var Cookie = {
	get: function(name){
        var tmp, reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)","gi");
		if( (tmp = reg.exec( unescape(document.cookie) )) )
			return(tmp[2]);
		return null;
    },
    set: function(name, value ,expires, path, domain){
        var str = name + "=" + escape(value);
		if (expires != null || expires != '') {
			if (expires == 0) {expires = 100*365*24*60;}
			var exp = new Date();
			exp.setTime(exp.getTime() + expires*60*1000);
			str += "; expires=" + exp.toGMTString();
		}
		if (path) {str += "; path=" + path;}
		if (domain) {str += "; domain=" + domain;}
		document.cookie = str;
    },
    del: function(name, path, domain){
        document.cookie = name + "=" +
			((path) ? "; path=" + path : "") +
			((domain) ? "; domain=" + domain : "") +
			"; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }	
};

//其他常用公共操作
var Utils = {
		
	//货币格式化
	formatCurrency: function(num) {
		num = num.toString().replace(/\$|\,/g,'');  
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
	},
	
	//图片等比缩放显示
	resizePic: function(obj, rw,rh) {
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
};