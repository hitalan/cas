package org.hit.casclient;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.hit.domain.User;
import org.hit.service.UserService;
import org.jasig.services.persondir.IPersonAttributes;
import org.jasig.services.persondir.support.AttributeNamedPersonImpl;
import org.jasig.services.persondir.support.StubPersonAttributeDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
@Component(value="attributeRepository")  
public class UserStubPersonAttributeDao extends StubPersonAttributeDao {
	@Autowired
	private UserService userService;
	    @Override  
	    public IPersonAttributes getPerson(String uid) {  
	        Map<String, List<Object>> attributes = new HashMap<String, List<Object>>();  
	        try {  
	            User user = userService.findUserByUserName(uid);  
	            attributes.put("username", Collections.singletonList((Object)user.getUsername()));  
	            attributes.put("email", Collections.singletonList((Object)user.getEmail()));  
	            attributes.put("address", Collections.singletonList((Object)URLEncoder.encode("北京", "UTF-8")));  
	            attributes.put("isvalid", Collections.singletonList((Object)user.getValid()));    
	        } catch (UnsupportedEncodingException e) {  
	            e.printStackTrace();  
	        }  
	        return new AttributeNamedPersonImpl(attributes);  
	    }  
	}  

