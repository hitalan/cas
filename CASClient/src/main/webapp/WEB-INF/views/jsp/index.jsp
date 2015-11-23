<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="java.util.Map"%>
<%@ page import="org.hit.util.ConfigUtil"%> 
<%@ page import="java.net.URLDecoder"%>
<%@ page import="org.jasig.cas.client.util.AssertionHolder"%>
<%@ page import="org.jasig.cas.client.authentication.AttributePrincipal"%>
  
<script>  
function ssoLogout(){  
    if(confirm('确定要退出系统吗')){  
        top.location.href ='<%=org.hit.util.ConfigUtil.INSTANCE.getProperty("casServerLogoutUrl")%>';  
    }  
}  
</script>  
  
<body style="background-color:#CBE0C9;">  
    <span style="color:red; font-size:32px; font-weight:bold;">客户端登录成功</span>  
    <br>  
    <br>  
    <a href="javascript:ssoLogout();">我要登出</a>  
</body>  
  
<hr size="2"> 

<%
	AttributePrincipal principal = (AttributePrincipal)request.getUserPrincipal();
	Map<String, Object> attributes = principal.getAttributes();
	out.print("principal.getName()=" + principal.getName() + "<br/>");
	out.print("request.getRemoteUser()=" + request.getRemoteUser() + "<br/>");
	out.print("登录用户：" + attributes.get("userId") + "<br/>");
	out.print("登录时间：" + AssertionHolder.getAssertion().getAuthenticationDate() + "<br/>");
	out.print("-----------------------------------------------------------------------<br/>");
	for(Map.Entry<String,Object> entry : attributes.entrySet()){
		//服务端返回中文时需要encode,客户端接收显示中文时需要decode,否则会乱码
		out.print(entry.getKey() + "=" + URLDecoder.decode(entry.getValue().toString(), "UTF-8") + "<br/>");
	}
%>