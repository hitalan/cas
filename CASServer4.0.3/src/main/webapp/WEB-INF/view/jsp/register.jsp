<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" scope="session"/>
<html>
<head>
  <title>注册界面</title>
	<script type="text/javascript" language="javascript" src="${ctx}/js/register.js"></script>
  <style type="text/css">
    .registerbox{
      padding:0 15px !important;
    }
  </style>
</head>
<body>
<div class="register-container animated fadeInDown" style="z-index: 1">

 <div class="registerbox bg-white">

    <div class="logo">
      <img src="${ctx}/website/static/css/login/logo.jpg">
    </div>

    <div class="registerbox-title text-align-center">
      <span class="gray-dark">REGISTER</span>
    </div>

    <div class="registerbox-caption">
      <span class="gray-dark">请填写以下的信息</span>
    </div>

<form action="addUserInfo.html" method = "post">
    <div class="registerbox-textbox">
      <input type="text" id="username" name="username" onblur="usernameCheck()" class="form-control" placeholder="用户名">
      <font color="red" size="-1" id="deny"></font>
      <font color="green" size="-1" id="access"></font>
    </div>
    <div class="registerbox-textbox">
      <input type="email" id="email" name="email" class="form-control" onblur="emailCheck()" placeholder="注册邮箱">
      <font color="red" size="-1" id="deny_email"></font>
    <font color="green" size="-1" id="access_email"></font>
    </div>
    <div class="registerbox-textbox">
      <input type="password" id="password" name="password" class="form-control" onblur="passwordIsRight()" placeholder="密码">
      <font color="red" size="-1" id="deny_password_right"></font>
    <font color="green" size="-1" id="access_password_right"></font>
    </div>
    <div class="registerbox-textbox">
      <input type="password" id="password_re""  name="password_re"" class="form-control"   onblur="passwordCheck()" placeholder="确认您的密码">
      <font color="red" size="-1" id="deny_password"></font>
      <font color="green" size="-1" id="access_password"></font>
    </div>
    <div class="registerbox-textbox">
      <input type="text" name=verifyCode onblur="verifyCodeCheck()" class="form-control form-check" placeholder="验证码">
      <font color="red" size="-1" id="deny_identify"></font>
      <font color="green" size="-1" id="access_identify"></font>
      <div class="form-control form-check form-check-img">
      <img id="codeimg" name="codeimg" border=0 src="${ctx}/identifyCode/image.jsp">
      <a href="javascript:reloadImage('${ctx}/identifyCode/image.jsp')">看不清</a>
      </div>
    </div>



    <div class="registerbox-hasuser">
      <a href="/login.jsp" class="gray-dark">已经有账号，点击登陆</a>
    </div>

    <div class="registerbox-submit">
      <input type="submit"  id="submitcheck"  name="submitcheck"  disabled = "true" class="btn btn-blue pull-right " value="下一步">
    </div>
  </form>
  </div>
  <div class="logobox margin-bottom-30 bg-white">
  </div>
</div>


<!-- Javascript -->
<script src="${ctx}/website/static/loginjs/supersized.3.2.7.min.js"></script>
<script src="${ctx}/website/static/loginjs/supersized-init.js"></script>

</body>
</html>