function reloadImage(imgurl){
          var getimagecode=document.getElementById("codeimg");
          getimagecode.src= imgurl + "?id=" + Math.random();
}

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
function verifyCodeCheck(){	 
	 var verifyCode = document.all.verifyCode.value;//获得text的值
	 if(verifyCode==""){
		 document.all.deny_identify.innerHTML="验证码为空";
		   document.all.byEmail.disabled = true;
	 }
	 else
	 {
		 var request = createXmlHttpRequest();//创建request的对象
			request.open("POST","checkCode.html?verifyCode="+verifyCode,true);
		 	request.send();
		 	request.onreadystatechange = function(){
			 if(request.readyState==4&request.status==200)
		 	{
			 var value = request.responseText;
		 	 if(value=="true"){
		 		 document.all.deny_identify.innerHTML="";
		 		 document.all.access_identify.innerHTML="验证码正确";
		 		document.all.byEmail.disabled = false;
		 	 	}
		 	}
			else{
		     document.all.access_identify.innerHTML="";
			 document.all.deny_identify.innerHTML="验证码错误";
			 document.all.byEmail.disabled = true;
		 	}
	 }
	 }
	 } 