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

function sendMail(){
	
	 var username = document.all.username.value;//获得text的值
		var request = createXmlHttpRequest();//创建request的对象
		request.open("post","reSendEmail.html?username="+username+"&type=findPassword");
	 	request.send();
	 	request.onreadystatechange = function(){
		 if(request.readyState==4&request.status==200)
	 	{
		 var value = request.responseText;
	 	 if(value=="true"){
	 	     document.all.success.innerHTML="发送成功";
	 		 document.all.failed.innerHTML="";
			 document.all.openEmail.style.display = 'block';
	 	 }
	 	}
		 
		else{
	     document.all.failed.innerHTML="发送邮件失败";
		 document.all.success.innerHTML="";
	 	}
      }	
}


/*function userCheck(){	 
    
	 var username = document.all.username.value;//获得text的值
	 if(username==""){
		 document.all.deny.innerHTML="用户名或邮箱不能为空";
		 document.all.findByEmail.disabled = true;
	 }
	 else{
		var request = createXmlHttpRequest();//创建request的对象
		request.open("post","findPasswordCheck.html?username="+username);
	 	request.send();
	 	request.onreadystatechange = function(){
		 if(request.readyState==4&request.status==200)
	 	{
		 var value = request.responseText;
	 	 if(value!=""){
	 	     document.all.access.innerHTML=value;
	 		 document.all.deny.innerHTML="";
			 document.all.findByEmail.disabled = false;
	 	 }
	 	}
		 
		else{
	     document.all.deny.innerHTML="填入的用户或者邮箱错误";
		 document.all.access.innerHTML="";
		 document.all.findByEmail.disabled = true;
	 	}
      }
	 }
	 }*/
	 