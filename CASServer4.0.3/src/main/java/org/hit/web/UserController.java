package org.hit.web;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.hit.domain.DetailInfo;
import org.hit.domain.User;
import org.hit.service.DetailInfoService;
import org.hit.service.UserService;
import org.hit.util.MD5Util;
import org.hit.util.Mail;
import org.hit.util.MailUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class UserController {
@Autowired
private UserService userService;
@Autowired
private DetailInfoService detailInfoService;

@RequestMapping(value="/checkCode.html")
public void  checkCodePage(HttpServletRequest request,HttpServletResponse response){
	 HttpSession session = request.getSession();  
     String rand = (String)session.getAttribute("rand");  
	 String check = request.getParameter("verifyCode");
	 if(rand.equals(check))
		try {
			response.getWriter().print("true");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
}


//忘记密码界面
@RequestMapping(value="/forgetPassword.html")
public ModelAndView  forgetPasswordPage(HttpServletRequest request){
	 return new ModelAndView("forgetPassword");
}

@RequestMapping(value="/login.html")
public ModelAndView  loginPage(HttpServletRequest request){
	 return new ModelAndView("login");
}

//注册核查用户名是否注册的ajax验证
@RequestMapping(value="/registerCheck.html")
public void checkToPage(@RequestParam(value ="username")String username, HttpServletResponse response){
	try 
	{
		if(userService.isUserAlreadyRegister(username))
		response.getWriter().print("true");
	} catch (IOException e) {
		e.printStackTrace();
	}
}

//忘记密码填写用户名或者邮箱的ajax验证
@RequestMapping(value="/identifyCheck.html")
public void identifyCheckPage(@RequestParam(value ="username")String username, HttpServletResponse response){
	try 
	{
		if(userService.isUserAlreadyRegister(username)||userService.isEmailAlreadyRegister(username))
		response.getWriter().print("true");
	} catch (IOException e) {
		e.printStackTrace();
	}
}
//验证验证码是否正确的ajax验证
@RequestMapping(value="/loginVerifyIsValid.html")
public void checkVerifyCode(@RequestParam(value ="verifyCode")String verifyCode, HttpServletRequest request, HttpServletResponse response){
	try 
	{
		String randCode= (String)request.getSession().getAttribute("rand");
		if(verifyCode.equals(randCode))
		response.getWriter().print("true");
	} catch (IOException e) {
		e.printStackTrace();
	}
}

//验证 email是否已经注册过的ajax验证
@RequestMapping(value="/emailCheck.html")
public void checkEmailPage(@RequestParam(value ="email")String email, HttpServletResponse response){
	System.out.println("fuck"+email);
	try 
	{
		if(userService.isEmailAlreadyRegister(email))
		response.getWriter().print("true");
	} 
	catch (IOException e) {
		e.printStackTrace();
	}
}

@RequestMapping(value="/getRegisterCheck.html")
public  ModelAndView checkRegisterInfo(@RequestParam(value ="time")Long time,@RequestParam(value ="verifycode")String verifycode,@RequestParam(value ="user_name")String username,  HttpServletResponse response, HttpServletRequest request){
	if(userService.isEmailAlreadyCheck(username, verifycode, time)){
		User user= userService.findUserByUserName(username);
		System.out.println("fuck out fuck out "+user.getValid());
		if(user.getValid()==1){
			return new ModelAndView("error","error","您已经完成了认证工作，请不要重复认证，该链接已经失效");
			
		}
		else
		{
			   return new ModelAndView("addDetailInfo","user",user);		 
		}

 }
 else
	 return new ModelAndView("error","error","邮箱验证失败，可能是已经过期，或者验证码错误。请重新验证");
}


@RequestMapping(value="/findByEmailCheck.html")
public  ModelAndView checkFindByEmailInfo(@RequestParam(value ="time")Long time, @RequestParam(value ="user_name")String username,@RequestParam(value ="verifycode")String verifycode, HttpServletRequest request, HttpServletResponse response){
 if(userService.isEmailAlreadyCheck(username, verifycode, time)){
		User user = (User) request.getSession().getAttribute("user");
	 if(user==null){
	    user = userService.findUserByUserName(username);
	    request.getSession().setAttribute("user", user);
	 }
	 return new ModelAndView("newPassword","user",user);
	 
 }
	 
 else
	 return new ModelAndView("error","error","邮箱验证失败，可能是已经过期，或者验证码错误。请重新验证");

}



@RequestMapping(value="/addUserInfo.html")
public ModelAndView addUserInfo(@RequestParam(value ="email")String email,@RequestParam(value ="username")String username, @RequestParam(value ="password")String password,HttpServletRequest request,HttpServletResponse response) throws Exception{
		if(userService.findUserByUserName(username).getUsername()!=null){
			return new ModelAndView("error","error","您已经注册了，并已经发送邮件到您的邮箱,请不要重复提交");
		}
		else{	
		    User user = new User();
			user.setEmail(email);
			user.setPassword(MD5Util.md5Encode(password));
			user.setUsername(username);
			String verifyCode = MailUtil.generateVerifyCode();
			user.setVerifycode(verifyCode);
			user.setValid(0);
			if(userService.insertUserInfo(user)){
				String content = "欢迎您注册本网站，完成邮箱验证后您将享受更多的服务和操作<a href=\""+MailUtil.url+"/getRegisterCheck.html?user_name="+username+"&time="+MailUtil.time+"&verifycode="+verifyCode+"\">点击完成注册操作</a>";// 邮件内容
				Mail.sendAndCc(MailUtil.smtp, MailUtil.from, email, "", MailUtil.subject, content, MailUtil.username, MailUtil.password);
				request.getSession().setAttribute("user", user);
				return new ModelAndView("registerEmail","user",user);
			}

			else
				return new ModelAndView("error","error","注册遇到问题，请稍后再来");
		}
}

@RequestMapping(value="/register.html")
public ModelAndView registerPage(){
	return new ModelAndView("register");
}


@RequestMapping(value="/findPasswordByEmail.html")
public ModelAndView findByEmailPage(@RequestParam(value ="user_name")String username,HttpServletRequest request){
	User user = userService.findUserByUserName(username);
	String verifyCode = MailUtil.generateVerifyCode();
	if(userService.updateUserVerifyCode(username, verifyCode)){
	String content = "点击完成找回密码操作<a href=\""+MailUtil.url+"/findByEmailCheck.html?user_name="+user.getUsername()+"&time="+MailUtil.time+"&verifycode="+verifyCode+"\">找回密码</a>";// 邮件内容
	Mail.sendAndCc(MailUtil.smtp, MailUtil.from, user.getEmail(), "", MailUtil.subject, content, MailUtil.username, MailUtil.password);
	return new ModelAndView("forgetPasswordByEmail","user",user);
	}
	else
	return new ModelAndView("error","error","系统异常");
	
}



@RequestMapping(value="/reSendEmail.html")
public void reSendEmail(@RequestParam(value ="username")String username,@RequestParam(value ="type")String type,HttpServletRequest request, HttpServletResponse response){
	User user = (User) request.getSession().getAttribute("user");
	if(user==null){
		user = userService.findUserByUserName(username);
	}
	String verifyCode = MailUtil.generateVerifyCode();
	System.out.println("new verifyCode"+verifyCode+"new type"+type);
	if(userService.updateUserVerifyCode(user.getUsername(), verifyCode)){
		String content;
		if(type.equals("findPassword"))
			content = "点击完成找回密码操作<a href=\""+MailUtil.url+"/findByEmailCheck.html?user_name="+user.getUsername()+"&time="+MailUtil.time+"&verifycode="+verifyCode+"\">找回密码</a>";// 邮件内容
		else
			content = "欢迎您注册本网站，完成邮箱验证后您将享受更多的服务和操作<a href=\""+MailUtil.url+"/getRegisterCheck.html?user_name="+user.getUsername()+"&time="+MailUtil.time+"&verifycode="+verifyCode+"\">点击完成注册操作</a>";// 邮件内容
		Mail.sendAndCc(MailUtil.smtp, MailUtil.from, user.getEmail(), "", MailUtil.subject, content, MailUtil.username, MailUtil.password);
		try {
			response.getWriter().print("true");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}

@RequestMapping(value="/openyouremail.html")
public void openYourEmail(HttpServletRequest request, @RequestParam(value ="username")String username,HttpServletResponse response){
	User user = (User) request.getSession().getAttribute("user");
	if(user==null)
		user = userService.findUserByUserName(username);
	String url = MailUtil.getUserMail(user.getEmail());
    try {
		response.sendRedirect("http://"+url);
	} catch (IOException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}	
}


/*@RequestMapping(value="/findPasswordByEmail.html")
public String findPasswordByEmailPage(){
	return "findPasswordByEmail";
}*/

@RequestMapping(value="/findPassword.html")
public ModelAndView findPasswordPage(HttpServletRequest request,@RequestParam(value ="username")String username){
	User user = userService.findUserByUserName(username);
	user.setEmail(MailUtil.dealWithEmailDisplay(user.getEmail()));
	/*String verifyCode =MailUtil.generateVerifyCode(); 
	user.setVerifycode(verifyCode);
	userService.updateUserVerifyCode(username, verifyCode);*/
	DetailInfo info = detailInfoService.findDetailInfoByUserName(username);
	if(info!=null)
		user.setQuestion(info.getQuestion());
	return new ModelAndView("forget_password_chooseway","user",user);
}


@RequestMapping(value = "/checkLogin.html")
public ModelAndView loginCheck(HttpServletRequest request) throws Exception{
	
	int isValidUser =  userService.isRightUser(request.getParameter("username"), request.getParameter("username"), MD5Util.md5Encode(request.getParameter("password")));
 
	if (isValidUser==0) 
		return new ModelAndView("login", "error", "用户名或密码错误。");
	
	else if(isValidUser==1)
		return new ModelAndView("login", "error", "您的邮箱还未验证，请完成验证");
	
	else{
		User user = userService.findUserByUserName(request.getParameter("username"));
		request.getSession().setAttribute("user", user);
		return new ModelAndView("main");
	}
}


@RequestMapping(value="/resetPassword.html")
public ModelAndView reSetPassword(HttpServletRequest request){
	User user = (User) request.getSession().getAttribute("user");
	String password="";
	try {
		 password = MD5Util.md5Encode(request.getParameter("password"));
	} catch (Exception e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	if(userService.updateUserPassword(user.getUsername(), password)){
		request.getSession().setAttribute("changePassword", "哈哈哈哈哈哈终于监听到你了我是设置session的");
		 return new ModelAndView("changePasswordSuccess","user",user);	
	}
		
	else
		return new ModelAndView("error","error","修改密码出现错误");
}
	
}
