package org.hit.dao;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.hit.domain.User;
import org.hit.util.MailUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowCallbackHandler;
import org.springframework.stereotype.Repository;
@Repository
public class UserDao {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	public int isUserAlreadyRegister(String username){
		String sql = "select count(*) from user where username = ? ";
		return jdbcTemplate.queryForInt(sql,new Object[]{username});
	}
	
	public int isRightUser(String username,String email,String password){
		int temp = 0;
		String sql = "select count(*) from user where (username = ? or email = ?) and password = ? ";
	    temp = jdbcTemplate.queryForInt(sql,new Object[]{username,email,password});
		String sqlStr = "select count(*) from user where (username = ? or email = ?) and password = ? and isvalid= 1";
		temp = temp + jdbcTemplate.queryForInt(sqlStr,new Object[]{username,email,password});
		return temp;
	}
	
	public int isEmailAlreadyRegister(String email){
		String sql = "select count(*) from user where email = ?";
		return jdbcTemplate.queryForInt(sql,new Object[]{email});
	}
	
	public int isEmailAlreadyCheck(String username,String verifycode,Long time ){
		String sql = "select count(*) from user where username = ? and verifycode = ? ";
		Long now = System.currentTimeMillis();
		long hour = (now - time)/(3600*1000);
		if(hour<MailUtil.validhour)
			return jdbcTemplate.queryForInt(sql,new Object[]{username,verifycode});
		else
			return 0;
	}
	
	public User findUserByUserName(final String username) {
		String sqlStr = " SELECT username,email,isValid "
				+ " FROM user where (username =? or email = ?)";
		final User user = new User();
		jdbcTemplate.query(sqlStr, new Object[] {username,username},
				new RowCallbackHandler() {
					public void processRow(ResultSet rs) throws SQLException {
						user.setUsername(rs.getString("username"));
						user.setEmail(rs.getString("email"));
						user.setValid(rs.getInt("isValid"));					}
				});
		return user;
	}
	
	public int insertUserInfo(User user) {
		String sqlStr = "insert into user (username,password,email,isvalid,verifycode) "
				+ " VALUES(?,?,?,?,?) ";
		Object[] args = { user.getUsername(), user.getPassword(),
				          user.getEmail(),user.getValid(),user.getVerifycode()};
		return jdbcTemplate.update(sqlStr, args);
	}
	
	public int updateUserVerifyCode(String username,String verifyCode){
		String sqlStr = "update user set verifycode = ? where username = ? ";
		Object[] args = {verifyCode,username};
		return jdbcTemplate.update(sqlStr, args);
	}
	
	public int makeUserValid(String username){
		String sqlStr = "update user set isvalid = 1 where username = ? ";
		Object[] args = {username};
		return jdbcTemplate.update(sqlStr, args);
	}
	
	public int updateUserPassword(String username,String password){
		String sqlStr = "update user set password = ? where username = ? ";
		Object[] args = {password,username};
		return jdbcTemplate.update(sqlStr, args);
	}
	
}
