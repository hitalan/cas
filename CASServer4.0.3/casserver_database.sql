/*
Navicat MySQL Data Transfer

Source Server         : YAN
Source Server Version : 50624
Source Host           : localhost:3306
Source Database       : springmvc

Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001

Date: 2015-11-16 17:18:14
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `detailuserinfo`
-- ----------------------------
DROP TABLE IF EXISTS `detailuserinfo`;
CREATE TABLE `detailuserinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `usertype` varchar(255) NOT NULL,
  `userrealname` varchar(255) NOT NULL,
  `useridcard` varchar(255) DEFAULT NULL,
  `idcardphoto` varchar(255) DEFAULT NULL,
  `companyname` varchar(255) DEFAULT NULL,
  `companyregisternum` varchar(255) DEFAULT NULL,
  `registerpic` varchar(255) DEFAULT NULL,
  `producerinfo` varchar(255) DEFAULT NULL,
  `tel` varchar(255) NOT NULL,
  `worklocation` varchar(255) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `question` varchar(255) DEFAULT NULL,
  `answer` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of detailuserinfo
-- ----------------------------

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `verifycode` varchar(255) DEFAULT NULL,
  `isvalid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
