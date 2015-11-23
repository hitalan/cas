<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" scope="session"/>
<html>
<body>
<script type="text/javascript" language="javascript" src="${ctx}/js/forgetPassword.js"></script>
<div class="login-container animated fadeInDown" style="z-index: 1">

    <div class="loginbox">

        <div class="logo">
            <img src="${ctx}/website/static/css/login/logo.jpg">
        </div>

        <form method="post" action="findPassword.html" id="loginForm">
            <div class="loginbox-title margin-bottom-30 padding-top-30">
                <h1 class="gray-dark">填写账户信息</h1>
            </div>
            <div class="loginbox-textbox">
                    <input class="form-control" name="username" id="username" onblur="userInfoCheck()"  placeholder="用户名或注册邮箱" type="text">
                    <font color="red" size="-1" id="deny"></font>
      				<font color="green" size="-1" id="access"></font>
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
                <input type="submit" id="submit" name = "submit" disabled = "true" class="btn  btn-blue btn-block" value="下一步">
            </div>
        </form>
    </div>

    <div class="logobox margin-bottom-30">
    </div>
</div>


<!-- Javascript -->
<script src="${ctx}/website/static/loginjs/supersized.3.2.7.min.js"></script>
<script src="${ctx}/website/static/loginjs/supersized-init.js"></script>

</body>
</html>