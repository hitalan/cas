package org.hit.dao;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.hit.domain.DetailInfo;
import org.hit.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowCallbackHandler;
import org.springframework.stereotype.Repository;
@Repository
public class DetailInfoDao {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	public int insertDetailInfo(DetailInfo detailInfo) {
		String sqlStr = "insert into detailUserInfo (username,email,usertype,userrealname,useridcard,idcardphoto,companyname,companyregisternum," +
				"registerpic,producerinfo,tel,worklocation,website,question,answer) "
				+ " VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ";
		Object[] args = { detailInfo.getUsername(), detailInfo.getEmail(),detailInfo.getUsertype(),detailInfo.getUserrealname(),detailInfo.getUseridcard(),
				detailInfo.getIdcardphoto(),detailInfo.getCompanyname(),detailInfo.getCompanyregisternum(),detailInfo.getRegisterpic(),detailInfo.getProduceinfo(),
				detailInfo.getTel(),detailInfo.getWorklocation(),detailInfo.getWebsite(),detailInfo.getQuestion(),detailInfo.getAnswer()};
		return jdbcTemplate.update(sqlStr, args);
	}
	public  int isAlreadyDetailInfo(String username){
		String sql = "select count(*) from detailuserinfo where username = ?";
		return jdbcTemplate.queryForInt(sql,new Object[]{username});
	}
	
	
	public  int checkAnswer(String username,String question,String answer){
		String sql = "select count(*) from detailuserinfo where username = ? and question = ? and answer = ? ";
		return jdbcTemplate.queryForInt(sql,new Object[]{username,question,answer});
	}
	
	public  DetailInfo  findDetailInfoByUserName(final String username) {
		String sqlStr = " SELECT username,email,question,answer "
				+ " FROM detailuserinfo where (username =? or email = ?)";
		final DetailInfo detail = new DetailInfo();
		jdbcTemplate.query(sqlStr, new Object[] {username,username},
				new RowCallbackHandler() {
					public void processRow(ResultSet rs) throws SQLException {
						detail.setUsername(rs.getString("username"));
						detail.setEmail(rs.getString("email"));
						detail.setQuestion(rs.getString("question"));
						detail.setAnswer(rs.getString("answer"));
					}
				});
		return detail;
	}
	
	
	
}
