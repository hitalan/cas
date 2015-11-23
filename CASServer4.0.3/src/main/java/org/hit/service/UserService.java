package org.hit.service;

import org.hit.dao.UserDao;
import org.hit.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class UserService {
@Autowired
private UserDao userDao;

public boolean isUserAlreadyRegister(String username){
	int count = userDao.isUserAlreadyRegister(username);
	return count>0;
}


public int  isRightUser(String username,String email,String password){
	int count = userDao.isRightUser(username, email, password);
	return count;
}


public boolean isEmailAlreadyRegister(String email){
	int count = userDao.isEmailAlreadyRegister(email);
	return count>0;
}


public boolean insertUserInfo(User user) {
	int count = userDao.insertUserInfo(user);
	return count>0;
}

public boolean isEmailAlreadyCheck(String username,String verifycode,Long time ){
	int count = userDao.isEmailAlreadyCheck(username, verifycode, time);
	return count>0;
	
}

public User findUserByUserName(final String username){
	User user = userDao.findUserByUserName(username);
	return user;
}

public boolean makeUserValid(String username){
	int count = userDao.makeUserValid(username);
	return count>0;

}

public boolean updateUserVerifyCode(String username,String verifyCode){
	int count = userDao.updateUserVerifyCode(username, verifyCode);
	return count>0;
}

public boolean updateUserPassword(String username,String password){	
	int count = userDao.updateUserPassword(username, password);
	return count>0;
}


}
