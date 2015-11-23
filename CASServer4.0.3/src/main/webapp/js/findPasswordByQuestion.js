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

function checkAnswer(){
	 var username = document.all.username.value;//获得text的值
   //var question =  encodeURI(encodeURI(document.all.question.innerHTML));
	 var answer = encodeURI(encodeURI(document.all.answer.value));
		var request = createXmlHttpRequest();//创建request的对象
		request.open("post","checkAnswer.html?username="+username+"&answer="+answer);
	 	request.send();
	 	request.onreadystatechange = function(){
		 if(request.readyState==4&request.status==200)
	 	{
		 var value = request.responseText;
	 	 if(value=="true"){
	 	     document.all.success.innerHTML="答案成功";
	 		 document.all.failed.innerHTML="";
	 		 document.all.byanswer.disabled = false;
	 	 }
	 	}
		 
		else{
	     document.all.failed.innerHTML="答案失败";
		 document.all.success.innerHTML="";
		 document.all.byanswer.disabled = true;
	 	}
      }	
}


function userCheck(){	 
    
	 var username = document.all.username.value;//获得text的值
	 if(username==""){
		 document.all.deny.innerHTML="用户名或邮箱不能为空";
	 }
	 else{
		var request = createXmlHttpRequest();//创建request的对象
		request.open("post","findQuestion.html?username="+username);
	 	request.send();
	 	request.onreadystatechange = function(){
		 if(request.readyState==4&request.status==200)
	 	{
		 var value = request.responseText;
	 	 if(value!=""){
	 	     document.all.question.innerHTML=value;
	 		 document.all.deny.innerHTML="";
	 	 }
	 	}
		 
		else{
	     document.all.deny.innerHTML="填入的用户或者邮箱错误";
		 document.all.access.innerHTML="";
	 	}
      }
	 }
	 }
	 