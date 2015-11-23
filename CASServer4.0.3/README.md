# 基于casserver4.0.3的配置以及文档说明


## **1.工程名称**

casserver4.0.3

## **2.工程配置文件说明** 
默认容器为jetty 默认端口为8080 默认路径名称为casserver4.0.3，具体路径名以及修改可以在build.gradle下进行完成。如下图代码所示，可以进行修改。

 `jettyRun{
  contextPath = "CASServer4.0.3"
  httpPort = 8080
 }
`
`
 jettyRunWar{
 contextPath = "CASServer4.0.3"
 httpPort = 8080
 }
`

服务端默认设置为支持cookieSecure 没有设置cookie存活时间 默认cookie名为CASTGC 默认cookie路径为/cas如设置ticket的相关配置，可以修改spring-configuration文件夹下的ticketGrantingTicketCookieGenerator.xml文件中的ticketGrantingTicketCookieGenerator bean配置

如下图代码所示
`<bean id="ticketGrantingTicketCookieGenerator" class="org.jasig.cas.web.support.CookieRetrievingCookieGenerator"
 p:cookieSecure="true"
 p:cookieMaxAge="-1" 
 p:cookieName="CASTGC"
 p:cookiePath="/cas" />
</beans>
`

服务端的验证规则默认是对数据库进行查询判断用户是否符合验证规则  数据库的密码字段是通过md5加密的 数据库的数据源是在
webinf文件下的/deployerConfigContext.xml文件中 自定义了myUsersAuthenticationHandler如下图所示，可以根据需求自定义不同的验证规则。

`<map>
 <entry key-ref="proxyAuthenticationHandler" value-ref="proxyPrincipalResolver" />
 <entry key-ref="primaryAuthenticationHandler" value-ref="primaryPrincipalResolver" />
 <entry key-ref="myUsersAuthenticationHandler" value-ref="primaryPrincipalResolver" /> 
</map>
`
如下图所示为数据源的配置
`
<bean id="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource">
<property name="username" value="root"></property>
<property name="password" value=""></property>
<property name="driverClassName" value="com.mysql.jdbc.Driver"></property>
<property name="url" value="jdbc:mysql://localhost:3306/springmvc"></property>
</bean>
`  

如下图所示MD5加密规则的配置
`<bean id="passwordEncoder" class="org.jasig.cas.authentication.handler.DefaultPasswordEncoder"  c:encodingAlgorithm="MD5" p:characterEncoding="UTF-8"/>  
`

如下图所示为验证规则的配置
`
<bean id="myUsersAuthenticationHandler" class="org.jasig.cas.adaptors.jdbc.QueryDatabaseAuthenticationHandler"  
p:dataSource-ref="dataSource" p:passwordEncoder-ref="passwordEncoder"  
p:sql="SELECT password FROM user WHERE username=?"/>       
`
上述规则都可以依托于具体情况进行进一步的调整和修改。




与登录注册相关的数据库的数据源配置在myinit.xml文件中声明，对应的数据库sql文件在工程的根目录下。数据库存在user表和userinfo表
user表负责基本信息，userinfo表负责个人用户或者企业用户的详细信息。

负责扫描对应的包下的文件
`
<context:component-scan base-package="org.hit.dao"/>
<context:component-scan base-package="org.hit.service"/>
`

声明数据源
`
<bean id="dataSource" class="org.apache.commons.dbcp.BasicDataSource"
destroy-method="close" 
p:driverClassName="com.mysql.jdbc.Driver"
p:url="jdbc:mysql://localhost:3306/springmvc?useUnicode=true&amp;characterEncoding=UTF-8" 
p:username="root"
p:password="" />
`
jdbc模板的声明

`
<bean id="jdbcTemplate" class="org.springframework.jdbc.core.JdbcTemplate"
p:dataSource-ref="dataSource" />
`
事务的声明

`		
<bean id="transactionManager"
class="org.springframework.jdbc.datasource.DataSourceTransactionManager"
p:dataSource-ref="dataSource" />
`

`
<bean id="multipartResolver" class="org.springframework.web.multipart.commons.CommonsMultipartResolver"/> 
`


tiles解析器配置以及声明
`	
<bean id="tilesViewResolver" class="org.springframework.web.servlet.view.tiles3.TilesViewResolver">
<property name="order">
<value>1</value>
</property>
</bean>
`
`
<bean id="tilesConfigurer" class="org.springframework.web.servlet.view.tiles3.TilesConfigurer">
<property name="definitions">
<list>
<value>/WEB-INF/tiles.xml</value>
</list>
</property>
</bean>
`

为客户端返回的信息同样在webinf文件下的/deployerConfigContext.xml文件中进行自定义 在deployerConfigContext.xml中设置自身的<bean id="attributeRepository"/> 具体的返回信息借助 org.hit.casclient包下的java文件来定义通过自定义的设置和配置可以添加自己返回给客户端的属性，以一种map的形式返回给客户端。

`
public IPersonAttributes getPerson(String uid) {  
Map<String, List<Object>> attributes = new HashMap<String, List<Object>>();  
try {  
User user = userService.findUserByUserName(uid);  
attributes.put("username", Collections.singletonList((Object)user.getUsername()));  
attributes.put("email", Collections.singletonList((Object)user.getEmail()));  
attributes.put("address", Collections.singletonList((Object)URLEncoder.encode("北京", "UTF-8")));  
attributes.put("isvalid", Collections.singletonList((Object)user.getValid()));    
}
catch (UnsupportedEncodingException e) {  
e.printStackTrace();  
}  
return new AttributeNamedPersonImpl(attributes);  
}
`

在配置文件的声明方式为
`
<bean id="attributeRepository" class="org.hit.casclient.UserStubPersonAttributeDao"/>
`

默认系统发送验证邮箱是buptnsrc_cas@sina.com  默认密码是123456789 默认邮箱有效时间为24小时。默认发送主题等一系列的默认的邮箱配置也是在org.hit.util下的mailutil文件中进行配置


#### **工程建立**

window用户


 $ gradlew.bat build


 linux用户


$ ./gradlew build


第一次使用gradle建立工程，首先将下载对应版的gradle，所以需要耐心等待一段时间。
建立完成，如果没有报错，成功建立。

#### **运行web工程**

window用户


 $ gradlew.bat jettyRun


若停止当前运行，则打开新窗口


 $ gradlew.bat jettyStop



 linux用户


$ ./gradlew jettyRun


若停止当前运行，则打开新窗口


 $ ./gradlew jettyStop


