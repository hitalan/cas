<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" scope="session"/>
<html>
<script>
function countDown(secs,surl){          
	var jumpTo = document.getElementById('jumpTo');
	jumpTo.innerHTML=secs;  
	if(--secs>0){     
		setTimeout("countDown("+secs+",'"+surl+"')",1000);     
     }     
    else{       
		     location.href=surl;     
		}     
   } 
</script>
<body>
<div class="register-container animated fadeInDown">
  <div class="registerbox bg-white">
        <div class="logo">
            <img src="${ctx}/website/static/css/login/logo.jpg">
        </div>

        <div class="registerbox-title gray-dark text-align-center">
            完成密码重置
        </div>

        <div class="registerbox-caption">
            <a href="#">
                <img src="${ctx}/website/static/css/login/user.png" class="register-img">
            </a>
        </div>

        <div class="registerbox-textbox email-span">
            <p class="orange">${user.username}</p>
            <p class="gray-dark">已经重置密码.</p>
            <span id="jumpTo">5</span>秒后自动跳转到登录界面
            <script type="text/javascript">countDown(5,'index.jsp');</script>  
        </div>
    </div>
</div>

<!-- Javascript -->
<script src="${ctx}/website/static/loginjs/supersized.3.2.7.min.js"></script>
<script src="${ctx}/website/static/loginjs/supersized-init.js"></script>
</body>
</html>
