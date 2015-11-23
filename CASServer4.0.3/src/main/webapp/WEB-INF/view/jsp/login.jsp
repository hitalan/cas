<%@ page pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" scope="session"/>
<html>
<head>
    <title>登陆界面</title>
    <link rel="icon" type="image/x-icon" href="${ctx}/favicon.ico"/>
	<script type="text/javascript" src="${ctx}/js/cas.js"></script>
	<script type="text/javascript" src="${ctx}/js/login.js"></script>
</head>
<body>

<div class="login-container animated fadeInDown" style="z-index: 1">
  <div class="loginbox bg-white">

    <div class="logo">
      <img src="${ctx}/website/static/css/login/logo.jpg">
    </div>
    
    
<form:form method="post" commandName="${commandName}" htmlEscape="true">
	<form:errors path="*" id="msg" cssClass="errors" element="div" htmlEscape="false"/>
	<input type="hidden" name="lt" value="${loginTicket}"/>
	<input type="hidden" name="execution" value="${flowExecutionKey}"/>
	<input type="hidden" name="_eventId" value="submit"/>
    <div class="loginbox-title margin-bottom-30 padding-top-30">
      <h1 class="gray-dark">SIGN IN</h1>
    </div>
    <div class="loginbox-textbox">
   				<c:if test="${not empty sessionScope.openIdLocalId}">
					<strong>${sessionScope.openIdLocalId}</strong>
					<input type="hidden" name="username" value="${sessionScope.openIdLocalId}"/>
				</c:if>
				<c:if test="${empty sessionScope.openIdLocalId}">
					<form:input tabindex="1" class="form-control" path="username" placeholder="帐号" htmlEscape="true"  size="25"/>
				</c:if>
    </div>
    <div class="loginbox-textbox">
    <form:password tabindex="2" path="password" placeholder="密码" class="form-control" htmlEscape="true" maxlength="16" size="25"/>
    </div>

      <div class="loginbox-textbox">
        <input type=text name=verifyCode onblur="verifyCodeCheck()" maxlength=4 value="" class="form-control form-check">
			<font color="red" size="-1" id="deny"></font>
            <font color="green" size="-1" id="access"></font>
        <img id="codeimg" name="codeimg" border=0 src="${ctx}/identifyCode/image.jsp" class="form-control form-check form-check-img" onClick="this.src='${ctx}/identifyCode/image.jsp?time'+Math.random();"></td>
      </div>

    <div class="loginbox-forgot">
      <a href="forgetPassword.html" class="gray-dark">忘记密码？</a>
    </div>
    
    <div class="loginbox-submit">
	<input type="submit" name ="submit" id ="submit" tabindex="4" class="btn  btn-blue btn-block" disabled="true" value="登录"/>
    </div>
    <div class="loginbox-signup">
      <a href="register.html" class="gray-dark">还没有注册？点我注册</a>
    </div>
</form:form>
  </div>

  <div class="logobox margin-bottom-30 bg-white">
  </div>
</div>
<!-- Javascript -->
<script src="${ctx}/website/static/loginjs/supersized.3.2.7.min.js"></script>
<script src="${ctx}/website/static/loginjs/supersized-init.js"></script>
</body>
</html>