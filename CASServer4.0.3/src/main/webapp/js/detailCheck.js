	 function realNameCheck(){
		 var realname = document.all.realname.value;
		   if(realname==""){
			 document.all.deny_realname.innerHTML="真实姓名不能空缺";
			 buttonDisEnabled();  
		     }
		   else{
			   
			   document.all.deny_realname.innerHTML="";
			   buttonEnabled();  
		   }
			
	  }	 
	 function telCheck(){
		 var tel = document.all.tel.value;
		   if(tel==""){
			 document.all.deny_tel.innerHTML="联系电话不能为空";
			 buttonDisEnabled();  
		   }
		   else{
			   document.all.deny_tel.innerHTML="";
			   buttonEnabled();  
		   }
			
		   
	  }
	 
	   function buttonDisEnabled(){
		   document.all.submit.disabled = true;
	   } 
	   
	   function buttonEnabled(){
		   if(document.all.deny_realname.innerHTML==""&&document.all.deny_tel.innerHTML=="")
		   document.all.submit.disabled = false;
	   } 
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
		 function realNameCheck(){
			 var realname = document.all.realname.value;
			   if(realname==""){
				 document.all.deny_realname.innerHTML="真实姓名不能空缺";
				 buttonDisEnabled();  
			     }
			   else{
				   
				   document.all.deny_realname.innerHTML="";
				   buttonEnabled();  
			   }
				
		  }
		 
		 
		 function companyNameCheck(){
			 var company = document.all.company.value;
			   if(company==""){
				 document.all.deny_company.innerHTML="企业名称不能为空";
				
				 buttonDisEnabled();  
			   }
			   else{
				   document.all.deny_company.innerHTML="";
					 buttonEnabled();  
				    
			   }
		  }
		 
		 
		 function telCheck(){
			 var tel = document.all.tel.value;
			   if(tel==""){
				 document.all.deny_tel.innerHTML="联系电话不能为空";
				 buttonDisEnabled();  
			   }
			   else{
				   document.all.deny_tel.innerHTML="";
				   buttonEnabled();  
			   }
				
			   
		  }
		 
		   function buttonDisEnabled(){
			   document.all.submit.disabled = true;
		   } 
		   
		   function buttonEnabled(){
			   if(document.all.deny_realname.innerHTML==""&&document.all.deny_company.innerHTML==""&&document.all.deny_tel.innerHTML=="")
			   document.all.submit.disabled = false;
		   } 