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

function passwordIsRight(){
		 var reg = /^[\w]{6,12}$/;
		 var password = document.all.password.value;
		 var password_re = document.all.password_re.value;
			if(password_re!=""&&password!=password_re){
				 document.all.access_password_right.innerHTML="";
				 document.all.deny_password_right.innerHTML="密码两次不一致";
				 buttonDisEnabled();
			 }
		 
		 else if(password.match(reg)){
			 document.all.deny_password_right.innerHTML="";
			 document.all.access_password_right.innerHTML="密码格式正确";
			 buttonEnabled();
		 } 
		 else if(password=""){
			 document.all.access_password_right.innerHTML="";
			 document.all.deny_password_right.innerHTML="密码不能为空！";
			 buttonDisEnabled();
		 }

		 else{
			 document.all.access_password_right.innerHTML="";
			 document.all.deny_password_right.innerHTML="密码格式不满足6-12位数字或字母";
			 buttonDisEnabled();
		 }
	 }
function passwordCheck(){
		 var reg = /^[\w]{6,12}$/;
		 var password = document.all.password.value;
		 var password_re = document.all.password_re.value;
		 if(password_re==""){
			 document.all.access_password.innerHTML="";
			 document.all.deny_password.innerHTML="密码不能为空!";
			 buttonDisEnabled();  
		 }
		 else if(!password_re.match(reg)){
			 document.all.access_password.innerHTML="";
			 document.all.deny_password.innerHTML="密码格式不满足6-12位数字或字母";
			 buttonDisEnabled();  
		 }
		 else if(password==password_re){
			 document.all.deny_password.innerHTML="";
			 document.all.access_password.innerHTML="密码可用";
			 buttonEnabled();
		 }
			
		 else{
			 document.all.access_password.innerHTML="";
			 document.all.deny_password.innerHTML="密码两次不一致";
			 buttonDisEnabled();
		 }
			 
	 }
function verifyCodeCheck(){	 
	 var verifyCode = document.all.verifyCode.value;//获得text的值
	 if(verifyCode==""){
		 document.all.deny_identify.innerHTML="验证码为空";
		 buttonDisEnabled();
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
		 		 buttonEnabled();
		 	 	}
		 	}
			else{
		     document.all.access_identify.innerHTML="";
			 document.all.deny_identify.innerHTML="验证码错误";
			 buttonDisEnabled();
		 	}
	 }
	 }
	 } 
function buttonDisEnabled(){
		   document.all.submitcheck.disabled = true;
	   } 
function buttonEnabled(){
	   if(document.all.access_password.innerHTML!=""&& document.all.access_password_right.innerHTML!=""&&document.all.access_identify.innerHTML!="")
	   document.all.submitcheck.disabled = false;
   }