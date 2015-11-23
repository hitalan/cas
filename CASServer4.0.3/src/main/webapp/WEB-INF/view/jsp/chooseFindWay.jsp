<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" scope="session"/>
<html>
<body>
<script type="text/javascript" language="javascript" src="${ctx}/js/findCheck.js"></script>
<script type="text/javascript" language="javascript" src="${ctx}/js/findPasswordByQuestion.js"></script>
<script type="text/javascript" language="javascript" src="${ctx}/js/findPasswordByEmail.js"></script>
<div class="register-container animated fadeInDown" style="z-index: 1;margin:4% auto;">

   <div class="registerbox forgot-password bg-white">

        <div class="logo">
            <img src="${ctx}/website/static/css/login/logo.jpg">
        </div>

        <div class="registerbox-title text-align-center">
            <h1 class="gray-dark">Find Password</h1>
        </div>

        <div class="widget">
            <div class="widget-header bg-none margin-10">
                <span class="widget-caption">
                    请选择找回方式:
                </span>
            </div>
            <div class="widget-body no-padding bg-none">
                <div class="widget-main">
                    <div class="panel-group accordion" id="accordion">
                        <hr class="register-hr"/>
                        <div class="panel">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    
                                    
										<!--<a href="findPasswordByEmail.html"><input type="submit" id="byEmail"  name = "byEmail" disabled="true" value = "邮箱验证"></a>-->
									
                                    
                                    
                                     <a class="accordion-toggle collapsed" id="findbyEmail" data-toggle="collapse"
                                       data-parent="#accordion" disabled = "true" href="#One" aria-expanded="false">
                                                                                                                                                                   注册邮箱找回
                                    </a>
                                    
                                    
                                    
                                    
                                </h4>
                            </div>

                            <div class="panel-collapse collapse" id="One">
                                <div class="panel-body">
                                    <div class="panel-body-header">
                                        <p>您的注册邮箱为<span class="email_value">${user.email}</span></p>
                                    </div>

                                    <div class="panel-body-container">
     								 <input type="text" name=verifyCode onblur="verifyCodeCheck()" class="form-control form-check" placeholder="验证码">
      								 <font color="red" size="-1" id="deny_identify"></font>
                                     <font color="green" size="-1" id="access_identify"></font>
                                     <div class="form-control form-check form-check-img">
                                     <img id="codeimg" name="codeimg" border=0 src="${ctx}/identifyCode/image.jsp">
                                     <a href="javascript:reloadImage('${ctx}/identifyCode/image.jsp')">看不清</a>
                                    </div>
                                    </div>
                                     <div class="widget-caption" style="text-align: center;margin: 50px 0 0 0 ">
                                     <form action="findPasswordByEmail.html" method="post">
              					      <input type="submit" class="btn btn-blue" style="width: 50%;" disabled = "true" id="byEmail" name="byEmail" value="下一步"/>  
              					      <input type ="hidden" id = "user_name" name = "user_name" value="${user.username}"/>
              					    </form>
            						</div>
                                </div>
                            </div>

                        </div>

                        <hr class="register-hr"/>

                        <div class="panel">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a class="accordion-toggle collapsed" data-toggle="collapse"
                                       data-parent="#accordion" href="#Second" aria-expanded="false">
                                        绑定手机号找回
                                    </a>
                                </h4>
                            </div>


                            <div class="panel-collapse collapse" id="Second">
                                <div class="panel-body">
                                    <div class="panel-body-header">
                                        <p>您的绑定手机号为<span class="email_value">188***2990</span></p>
                                    </div>
                                    <div class="panel-body-container">
                                        <input type="text" class="form-control form-check" placeholder="验证码">
                                        <div class="form-control form-check form-check-img">验证码图片</div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <hr class="register-hr"/>

                        <div class="panel">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                  
                                  <!--<a href="findPasswordByQuestion.html"><input type="submit" disabled="true" value = "密保验证"></a>-->
                                     <a class="accordion-toggle collapsed" data-toggle="collapse"
                                       data-parent="#accordion" href="#Third" aria-expanded="false">
                                                                                                                                           密保问题找回
                                    </a> 
                                </h4>
                            </div>


                            <div class="panel-collapse collapse" id="Third">
                                <c:if test="${!empty user.question}">
	                  			<div class="panel-body">
                                    <div class="panel-body-header">
                                        <p>密保问题：</p>
                                    </div>
                                    <div class="panel-body-container">
                                        <select class="form-control panel-body-container-l">
                                            <option value="1">${user.question}</option>
                                           <!--  <option value="2">童年最好的朋友</option>
                                            <option value="3">初中的学校</option>-->
                                        </select>
                                        <input type="text" id = "answer" value="" onblur="checkAnswer()" placeholder = "密保问题答案" class="form-control panel-body-container-l">
                                  		<font color="red" size="-1" id="failed"></font>
										<font color="green" size="-1" id="success"></font>
                                    </div>
                                     <div class="widget-caption" style="text-align: center;margin: 50px 0 0 0 ">
              							<form action="newPassword.html" method ="post">
              							 <input  type ="submit"  class="btn btn-blue" id="byanswer" disabled="true"  style="width: 50%;" value = "新密码">
            						    <input type ="hidden" id = "username" name = "username" value="${user.username}"/>
            						    </form>
            						</div>
                                </div>
	                           </c:if>  
	                           <c:if test="${empty user.question}">
	                  			<div class="panel-body">
                                    <div class="panel-body-header">
                                        <p>您没有设置密保问题，请使用其他方法找回</p>
                                    </div>
                                </div>
	                           </c:if>  
                 
                            </div>
                            <hr class="register-hr"/>
                        </div>

                    </div>
                </div>
            </div>
        <!--     <div class="widget-caption" style="text-align: center;margin: 50px 0 0 0 ">
                <button class="btn btn-blue" style="width: 50%;">下一步</button>
            </div>--> 
        </div>
    </div>
        <div class="logobox margin-bottom-30 bg-white">
    </div>
</div>
<script src="${ctx}/website/static/loginjs/supersized.3.2.7.min.js"></script>
<script src="${ctx}/website/static/loginjs/supersized-init.js"></script>
</body>
</html>
