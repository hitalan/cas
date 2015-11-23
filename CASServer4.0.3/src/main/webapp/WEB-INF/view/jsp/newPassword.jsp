<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" scope="session"/>
<html>
<script src="${ctx}/website/static/loginjs/supersized.3.2.7.min.js"></script>
<script src="${ctx}/website/static/loginjs/supersized-init.js"></script>
<script type="text/javascript" language="javascript" src="${ctx}/js/resetPassword.js"></script>
<body>
<div class="login-container animated fadeInDown" style="z-index: 1">

 <div class="loginbox bg-white">

        <div class="logo">
            <img src="${ctx}/website/static/css/login/logo.jpg">
        </div>

        <form method="post" action="resetPassword.html" method="post">
            <div class="loginbox-title margin-bottom-30 padding-top-30">
                <h1 class="gray-dark">密码重置</h1>
            </div>
            
            

            <div class="loginbox-textbox">
                <input type="password" name="password" id="password" onblur="passwordIsRight()" placeholder="密码" class="form-control">
                <font color="red" size="-1" id="deny_password_right"></font>
    			<font color="green" size="-1" id="access_password_right"></font>
            </div>

            <div class="loginbox-textbox">
                <input type="password" name= "password_re"  id="password_re"  onblur="passwordCheck()" placeholder="确认密码" class="form-control">
            	<font color="red" size="-1" id="deny_password"></font>
    			<font color="green" size="-1" id="access_password"></font>
            </div>

            <div class="loginbox-textbox">
             <input type="text" name=verifyCode onblur="verifyCodeCheck()" class="form-control form-check" placeholder="验证码">
     			<font color="red" size="-1" id="deny_identify"></font>
      			<font color="green" size="-1" id="access_identify"></font>
      			<div class="form-control form-check form-check-img">
      			<img id="codeimg" name="codeimg" border=0 src="${ctx}/identifyCode/image.jsp">
      			<a href="javascript:reloadImage('${ctx}/identifyCode/image.jsp')">看不清</a>
      			</div>
            </div>

            <div class="loginbox-submit" style="margin:12% auto;">
                <input type="submit"  name= "submitcheck" id = "submitcheck" class="btn  btn-blue btn-block"  value="确认修改">
            </div>
        </form>
    </div>
    <div class="logobox margin-bottom-30 bg-white">
    </div>
</div>
</body>
</html>
