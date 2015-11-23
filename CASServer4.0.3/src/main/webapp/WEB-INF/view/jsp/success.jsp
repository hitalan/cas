<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
 <base href="<%=basePath%>">
  <head>
  	<script type="text/javascript" language="javascript" src="${ctx}/js/register.js"></script>
    <title>My JSP 'success.jsp' starting page</title>
  </head>
  
  <body>
    <c:if test="${!empty success}">
	   <font color="green"><c:out value="${success}" /></font>
	</c:if>  
    This is my  success JSP page. <br>
    <span id="jumpTo">5</span>秒后自动跳转到登录界面
<script type="text/javascript">countDown(5,'<%=basePath%>index.jsp');</script>  
  </body>
</html>
