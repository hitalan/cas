



function createXmlHttpRequest(){
	 var xmlreq=false;
	 if(window.XMLHttpRequest){
	 xmlreq=new XMLHttpRequest();
	 }else if(window.ActiveXobject){
	 try{
	 xmlreq = new ActiveXobject("Msxm12.XMLHTTP");
	 }catch(e1){
	 try{
	 xmlreq = new ActiveXobject("Miscoft.XMLHTTP");
	 }catch(e2){
	 }
	 }
	 }
	 return xmlreq;
	 }

var maxtime;
	if(window.name==''){ 
		maxtime = -1;
	}
	else
	{
		maxtime = window.name;
	}
  
function CountDown(){
	if(maxtime>=0){
		seconds = Math.floor(maxtime%60);
		msg = "距离下次发送邮件还有"+seconds+"秒";
		document.all["btn"].value = msg;
		--maxtime;
		window.name = maxtime; 
	}
  else
	{
	clearInterval(timer);
	document.all.btn.disabled = false;
	document.all["btn"].value = "点击再次发送邮件";
	}
}
function start(){
	document.all.btn.disabled = true;
	var username = document.all.username.value;
	maxtime = 1*20;
	var request = createXmlHttpRequest();//创建request的对象
  	 	request.open("post","reSendEmail.html?username="+username+"&type=register");
  	 	request.send();
  	 	request.onreadystatechange = function(){
  	 		if(request.readyState==4&request.status==200)
  	 		{
  	 			var value = request.responseText;
  	 			if(value=="true"){
  	 				/*document.all.deny.innerHTML="";
  	 				document.all.access.innerHTML="已经重新发送邮件到邮箱";*/
  	 			}
  	 		}	 
  	 		else
  	 		{
  	 			/*document.all.access.innerHTML="";
  	 			document.all.deny.innerHTML="发送邮箱失败";*/
  	 		}
  	 	}
	timer = setInterval("CountDown()",1000);
}
timer = setInterval("CountDown()",1000);