<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  
  <body>
      <c:if test="${!empty error}">
	   <font color="red"><c:out value="${error}" /></font>
	</c:if>  
    This is my error JSP page. <br>
  </body>
</html>
