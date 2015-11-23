package org.hit.web;

import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.hit.domain.DetailInfo;
import org.hit.domain.User;
import org.hit.service.DetailInfoService;
import org.hit.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class DetailInfoController {
	@Autowired
	private DetailInfoService detailInfoService;
	@Autowired
	private UserService userService;
	@RequestMapping(value="/submitDetailInfo.html")
		 public ModelAndView detailCompanyInfo(
				 @RequestParam(value ="typechoose")String typechoose,
				 @RequestParam(value = "identity_pic", required = false) MultipartFile identity_pic,
				 @RequestParam(value ="enterprisename_identity")String enterprisename_identity,
				 @RequestParam(value ="license_nums")String license_nums,
				 @RequestParam(value = "license_pic", required = false) MultipartFile license_pic,
				 @RequestParam(value ="enter_productor_info")String enter_productor_info,
				 @RequestParam(value ="enter_phone_nums")String enter_phone_nums,
				 @RequestParam(value ="enter_work_place")String enter_work_place,
				 @RequestParam(value ="enter_web")String enter_web,
				 @RequestParam(value ="enter_scecure_question")String enter_scecure_question,
				 @RequestParam(value ="enter_scecure_answer")String enter_scecure_answer,
				 @RequestParam(value ="real_name")String real_name,
				 @RequestParam(value ="identity_nums")String identity_nums,
				 @RequestParam(value ="productor_info")String productor_info,
				 @RequestParam(value ="phone_nums")String phone_nums,
				 @RequestParam(value ="work_place")String work_place,
				 @RequestParam(value ="scecure_question")String scecure_question,
				 @RequestParam(value ="scecure_answer")String scecure_answer,
				 @RequestParam(value ="username")String username,
				 @RequestParam(value ="email")String email,
				 HttpServletRequest request, ModelMap model) {  
		         if(detailInfoService.isAlreadyDetailInfo(username))
		         return new ModelAndView("error","error","您已经提交过信息,请不要重复提交");	 
		         else
		         {
		        	 DetailInfo detailInfo = new DetailInfo();
		        	  detailInfo.setUsername(username);
				      detailInfo.setEmail(email);
		        	 if(typechoose.equals("1")){
		        		 System.out.println("type is "+typechoose);
		        		    detailInfo.setTel(phone_nums);
		        		    detailInfo.setUserrealname(real_name);
		        		    detailInfo.setUseridcard(identity_nums);
		        		    detailInfo.setUsertype("个人用户");
		        		    detailInfo.setAnswer(scecure_answer);
		        		    detailInfo.setProduceinfo(productor_info);
		        		    detailInfo.setQuestion(scecure_question);
		        		    if(identity_pic!=null){
		   		        	 String path = request.getSession().getServletContext().getRealPath("uploadIndividual");  
		   				        String identity_picName = identity_pic.getOriginalFilename();  
		   				        System.out.println(path);  
		   				        System.out.println(identity_picName);
		   				        File targetFile = new File(path,identity_picName);  
		   				        if(!targetFile.exists()){  
		   				            targetFile.mkdirs();  
		   				        }  
		   				        try {  
		   				        	identity_pic.transferTo(targetFile);  
		   				        } catch (Exception e) {  
		   				            e.printStackTrace();  
		   				        }  
		   				        detailInfo.setIdcardphoto(identity_picName);
		   		            }
		        		    detailInfo.setWorklocation(work_place);
		        		    
		        		    // set 没有的元素为 空
		        		   
		        		    detailInfo.setCompanyname("");
		        		    detailInfo.setCompanyregisternum("");
		        		    detailInfo.setWebsite("");
		        		    detailInfo.setRegisterpic("");
		        		    
		        	 }
		        	 else{
				         detailInfo.setCompanyname(enterprisename_identity);
				         detailInfo.setTel(enter_phone_nums);
				         detailInfo.setUsertype("企业用户");
				         detailInfo.setCompanyregisternum(license_nums);
				         detailInfo.setAnswer(enter_scecure_answer);
				         detailInfo.setProduceinfo(enter_productor_info);
				         detailInfo.setQuestion(enter_scecure_question);
				         if(license_pic!=null){
				        	 String path = request.getSession().getServletContext().getRealPath("uploadCompany");  
						        String license_picName =license_pic.getOriginalFilename();  
						        System.out.println(path);  
						        File targetFile = new File(path,license_picName);  
						        if(!targetFile.exists()){  
						            targetFile.mkdirs();  
						        }  
						        try {  
						        	license_pic.transferTo(targetFile);  
						        } catch (Exception e) {  
						            e.printStackTrace();  
						        }  
						        detailInfo.setRegisterpic(license_picName);
				         }
				  	     detailInfo.setUserrealname("");
				  	     detailInfo.setIdcardphoto("");
				  	     detailInfo.setUseridcard("");
				         detailInfo.setWebsite(enter_web);
				         detailInfo.setWorklocation(enter_work_place);
		        	 }
		        if(detailInfoService.insertDetailInfo(detailInfo))
		         {
		        	 if(userService.makeUserValid(username)){
		        	   return new ModelAndView("registerSuccess","username",username); 
		        	 }
		        	  else
		  				return new ModelAndView("error","error","更新信息异常！"); 
		         }
		     
		         else
				return new ModelAndView("error","error","添加信息异常！"); 
		        }
		    }  

	@RequestMapping(value="/checkAnswer.html")
	public void checkAnswer(HttpServletRequest request,@RequestParam(value ="username")String username, HttpServletResponse response){
		String question = detailInfoService.findDetailInfoByUserName(username).getQuestion();
		
		String answer = request.getParameter("answer");
		try {
			answer = URLDecoder.decode(answer, "UTF-8");
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		if( detailInfoService.checkAnswer(username, question, answer)){
		  try {
			response.getWriter().print("true");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	  }
	}
	@RequestMapping(value="/findQuestion.html")
	public void findQuestionPage(@RequestParam(value ="username")String username, HttpServletResponse response){
		try 
		{
			if(detailInfoService.findDetailInfoByUserName(username)!=null){
				 DetailInfo  detailInfo = detailInfoService.findDetailInfoByUserName(username);
				 System.out.println(detailInfo.getQuestion());
				 response.setCharacterEncoding("UTF-8");
				 response.getWriter().print(detailInfo.getQuestion());
			}
		
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	@RequestMapping(value="/newPassword.html")
	public ModelAndView newPasswordPage(HttpServletRequest request,@RequestParam(value ="username")String username){
		User user = userService.findUserByUserName(username);
		if(user.getEmail()==null){
			return new ModelAndView("error","error","您无权重置密码");
		}
		else
		{
			request.getSession().setAttribute("user", user);
			return new ModelAndView("newPassword");
		}
		}
	
	}

