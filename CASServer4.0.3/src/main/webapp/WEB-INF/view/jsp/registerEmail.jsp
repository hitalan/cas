<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" scope="session"/>
<html>
<script type="text/javascript" language="javascript" src="${ctx}/js/countdownRegister.js"></script>
<body>
<div class="register-container animated fadeInDown">
  <div class="registerbox bg-white">
    <div class="logo">
      <img src="${ctx}/website/static/css/login/logo.jpg">
    </div>

    <div class="registerbox-title gray-dark text-align-center">
      请进入邮箱激活账号
    </div>

    <div class="registerbox-caption">
      <a href="#">
        <img src="${ctx}/website/static/css/login/email.jpg" class="register-img">
      </a>
    </div>

    <div class="registerbox-textbox email-span">
      <p class="gray-dark font-130" id= "access">您已经成功发送邮件到邮箱，请及时完成验证</p>
          <font color="red" size="-1" id="deny"></font>
      <p class="orange">${user.email}</p>
      <p class="gray-dark">请24小时内进入邮件中的链接继续注册</p> 
      <form action="openyouremail.html" method="post">
      <input type="hidden" name = "username" id = "username" value = "${user.username}">
      <input type = "submit" class="btn btn-blue" value = "进入邮箱查看">
      </form> 
    </div>

    <div class="noReceive gray-dark">
      <p id="noReceive_email" class="blue">没有收到邮件?</p>
      <ul style="display: none">
        <li>1、请检查是否在垃圾邮件中</li>
        <li>2、如果还未收到
           <input type = "submit" id = "btn" disabled = "true" name = "btn"  class="btn btn-blue" value="点击再次发送邮件" onclick="start()" >
        </li>
        <li>3、重新发送邮件，还未收到？请试试
            <a href="#">更换邮箱</a>
        </li>
      </ul>
    </div>
  </div>
</div>

<script type="text/javascript">
  var ul=document.getElementsByTagName('ul')[0];
  var point=document.getElementById('noReceive_email');
  point.onclick=function(){
    ul.style.display='block';

  }
</script>
<!-- Javascript -->
<script src="${ctx}/website/static/loginjs/supersized.3.2.7.min.js"></script>
<script src="${ctx}/website/static/loginjs/supersized-init.js"></script>
</body>
</html>
