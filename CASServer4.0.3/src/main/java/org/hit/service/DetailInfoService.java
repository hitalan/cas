package org.hit.service;

import org.hit.dao.DetailInfoDao;
import org.hit.domain.DetailInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class DetailInfoService {
	@Autowired
	private DetailInfoDao detailInfoDao;
	public boolean insertDetailInfo(DetailInfo detailInfo){
		int count = detailInfoDao.insertDetailInfo(detailInfo);
		return count>0;
	}
	public boolean isAlreadyDetailInfo(String username){
		int count =  detailInfoDao.isAlreadyDetailInfo(username);
		return count>0;
	}
	public  boolean checkAnswer(String username,String question,String answer){
		int count =  detailInfoDao.checkAnswer(username, question, answer);
		return count>0;
	}
	public  DetailInfo  findDetailInfoByUserName(final String username){
		return  detailInfoDao.findDetailInfoByUserName(username);
	}
}
