package org.hit.util;

import java.util.Random;

public class MailUtil {
public static String url = "http://localhost:8080/CASServer4.0.3";
public static String username = "buptnsrc_cas";
public static String password = "123456789";
public static String smtp = "smtp.sina.com";// smtp服务器
public static String from = "buptnsrc_cas@sina.com";// 邮件显示名称
public static String subject = "测试邮件";// 邮件标题
public static long time = System.currentTimeMillis();
public static long validhour = 24;
public static String  generateVerifyCode(){
	int max=99999;
    int min=10000;
    Random random = new Random();
    int s = random.nextInt(max)%(max-min+1) + min;
	return String.valueOf(s);
}
public static String getUserMail(String registerEmail) {
	int end = registerEmail.indexOf("@") + 1;
	String mailPostFix = registerEmail.substring(end);
	String mailAddress = null;
	if(mailPostFix.equals("163.com"))
		mailAddress = "mail.163.com";
	else if(mailPostFix.equals("vip.163.com"))
			mailAddress = "vip.163.com";
	else if(mailPostFix.equals("126.com"))
		mailAddress = "mail.126.com";
	else if(mailPostFix.equals("qq.com"))
		mailAddress = "mail.qq.com";
	else if(mailPostFix.equals("vip.qq.com"))
		mailAddress = "mail.qq.com";
	else if(mailPostFix.equals("foxmail.com"))
		mailAddress = "mail.qq.com";
	else if(mailPostFix.equals("gmail.com"))
		mailAddress = "mail.google.com";
	else if(mailPostFix.equals("sohu.com"))
		mailAddress = "mail.sohu.com";
	else if(mailPostFix.equals("tom.com"))
		mailAddress = "mail.tom.com";
	else if(mailPostFix.equals("vip.sina.com"))
		mailAddress = "vip.sina.com";
	else if(mailPostFix.equals("sina.com.cn"))
		mailAddress = "mail.sina.com.cn";
	else if(mailPostFix.equals("sina.com"))
		mailAddress = "mail.sina.com.cn";
	else if(mailPostFix.equals("yahoo.com.cn"))
		mailAddress = "mail.cn.yahoo.com";
	else if(mailPostFix.equals("yahoo.cn"))
		mailAddress = "mail.cn.yahoo.com";
	else if(mailPostFix.equals("yeah.net"))
		mailAddress = "www.yeah.net";
	else if(mailPostFix.equals("21cn.com"))
		mailAddress = "mail.21cn.com";
	else if(mailPostFix.equals("hotmail.com"))
		mailAddress = "www.hotmail.com";
	else if(mailPostFix.equals("sogou.com"))
		mailAddress = "mail.sogou.com";
	else if(mailPostFix.equals("188.com"))
		mailAddress = "www.188.com";
	else if(mailPostFix.equals("139.com"))
		mailAddress = "mail.10086.cn";
	else if(mailPostFix.equals("189.cn"))
		mailAddress = "webmail30.189.cn/w2/";
	else if(mailPostFix.equals("wo.com.cn"))
		mailAddress = "mail.wo.com.cn/smsmail";
	else if(mailPostFix.equals("etang.com"))
		mailAddress = "mail.etang.cn";
	else if(mailPostFix.equals("eyou.com"))
		mailAddress = "www.eyou.com";
	else if(mailPostFix.equals("56.com"))
		mailAddress = "www.56.com/home.html";
	else if(mailPostFix.equals("chinaren.com"))
		mailAddress = "mail.chinaren.com/";
	else if(mailPostFix.equals("mail.com"))
		mailAddress = "www.mail.com/int/";
	else
		mailAddress = "I am sorry , We have not included your mailbox!";
	return mailAddress;
}
public static String dealWithEmailDisplay(String email){
    StringBuffer buffer = new StringBuffer();
	buffer.append(email);
	int i  = buffer.lastIndexOf("@");
	for(int j=3;j<i;j++)
		buffer.setCharAt(j, '*');
	return buffer.toString();
}
}
