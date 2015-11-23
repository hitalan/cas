<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" scope="session"/>
<html>
<head>
  <style type="text/css">
    .registerbox{
      padding:0 15px !important;
    }
  </style>
  <script>
    function to_enterprise(){
      document.getElementById("enterprise-textboxes").style.display="block";
      document.getElementById("personal-textboxes").style.display="none";
      document.getElementById("typechoose").value = 2;
    }
    function to_personal(){
      document.getElementById("enterprise-textboxes").style.display="none";
      document.getElementById("personal-textboxes").style.display="block";
 	  document.getElementById("typechoose").value = 1;
    }

    function check(){

    }
    </script>
</head>
<body>
<div class="register-container animated fadeInDown" style="z-index: 1;margin:4% auto;">

  <div class="registerbox bg-white">

    <div class="logo">
      <img src="${ctx}/website/static/css/login/logo.jpg">
    </div>

    <div class="registerbox-title text-align-center">
      <span class="gray-dark">REGISTER</span>
    </div>

    <div class="registerbox-caption">
      <span class="gray-dark">请填写以下的信息</span>
    </div>

<form  action= "submitDetailInfo.html" method ="post" enctype="multipart/form-data">
<input type="hidden" id = "typechoose" name = "typechoose" value="1"> 
<input type="hidden" id = "username" name = "username" value="${user.username}"> 
<input type="hidden" id = "email" name = "email" value="${user.email}"> 
      <div class="registerbox-textbox gray-dark" >
         用户名:<span>${user.username}</span>
      </div>
      <div class="registerbox-textbox gray-dark">
        注册邮箱:<span>${user.email}</span>
      </div>
      <div class="registerbox-textbox gray-dark">
        用户类型:
        <div class="row">
          <div class="col-lg-5 col-md-5 col-sm-5">
          <div class="radio">
            <label>
              <input id="user_type" name="user_type" type="radio" checked="checked" onchange="to_personal()">
              <span class="text">个人用户 </span>
            </label>
          </div>
            </div>
          <div class="col-lg-5 col-md-5 col-sm-5">
          <div class="radio">
            <label>
              <input name="user_type" type="radio" class="inverted" onchange="to_enterprise()">
              <span class="text">企业用户</span>
            </label>
          </div>
          </div>
        </div>
      </div>
      <div id="personal-textboxes">
      <div class="registerbox-textbox">
        <span class="input-icon">
        <i class="fa fa-star red"></i>
        <input type="text" id="real_name" name="real_name" class="form-control" placeholder="真实姓名">
          </span>
      </div>
          <div class="registerbox-textbox">
        <input type="text" id="identity_nums" name="identity_nums" class="form-control" placeholder="身份证号码">
      </div>
      <div class="registerbox-textbox">
        <div class="input-group input-group-sm">
        <input type="text" id="identity_pic_assist" name="identity_pic_assist" class="form-control" placeholder="身份证照片" >
          <span class="input-group-btn">
          <button type="button" class="btn btn-default" onclick="document.getElementById('identity_pic').click()">选择</button>
            </span>
        <input type="file" id="identity_pic" name="identity_pic" onchange="document.getElementById('identity_pic_assist').value=this.value" style="display:none;">
        </div>
        </div>
      <div class="registerbox-textbox">
        <input type="text" id="productor_info"  name="productor_info" class="form-control" placeholder="出品人信息">
      </div>
      <div class="registerbox-textbox">
        <span class="input-icon">
          <i class="fa fa-star red"></i>
          <input type="text" id="phone_nums"  name="phone_nums" class="form-control" placeholder="联系电话">
        </span>
      </div>
      <div class="registerbox-textbox">
        <input type="text" id="work_place"  name="work_place" class="form-control" placeholder="工作地点">
      </div>
      <div class="registerbox-textbox">
        <input type="text" id="scecure_question"  name="scecure_question" class="form-control" placeholder="密保问题">
      </div>
      <div class="registerbox-textbox">
        <input type="text" id="scecure_answer"  name="scecure_answer" class="form-control" placeholder="密保答案">
      </div>
      </div>

      <div id="enterprise-textboxes" style="display:none;">
        <div class="registerbox-textbox">
          <span class="input-icon">
          <i class="fa fa-star red"></i>
            <input type="text" id="enterprisename_identity" name="enterprisename_identity" class="form-control" placeholder="企业名称">
          </span>
        </div>
        <div class="registerbox-textbox">
          <input type="text" id="license_nums" name="license_nums" class="form-control" placeholder="营业执照注册号">
        </div>
        <div class="registerbox-textbox">
          <div class="input-group input-group-sm">
            <input type="text" id="license_pic_assist" name="license_pic_assist" class="form-control" placeholder="营业执照照片" >
          <span class="input-group-btn">
          <button type="button" class="btn btn-default" onclick="document.getElementById('license_pic').click()">选择</button>
            </span>
            <input type="file" id="license_pic" name="license_pic" onchange="document.getElementById('license_pic_assist').value=this.value" style="display:none;">
          </div>
        </div>
        <div class="registerbox-textbox">
          <input type="text" id="enter_productor_info"  name="enter_productor_info" class="form-control" placeholder="出品人信息">
        </div>
        <div class="registerbox-textbox">
           <span class="input-icon">
          <i class="fa fa-star red"></i>
          <input type="text" id="enter_phone_nums"  name="enter_phone_nums" class="form-control" placeholder="联系电话">
             </span>
        </div>
        <div class="registerbox-textbox">
          <input type="text" id="enter_work_place"  name="enter_work_place" class="form-control" placeholder="工作地点">
        </div>
        <div class="registerbox-textbox">
          <input type="text" id="enter_web"  name="enter_web" class="form-control" placeholder="公司网站">
        </div>
        <div class="registerbox-textbox">
          <input type="text" id="enter_scecure_question"  name="enter_scecure_question" class="form-control" placeholder="密保问题">
        </div>
        <div class="registerbox-textbox">
          <input type="text" id="enter_scecure_answer"  name="enter_scecure_answer" class="form-control" placeholder="密保答案">
        </div>
      </div>

      <div class="registerbox-submit" style="width: 70%; margin: 20px auto;" >
        <input type="submit" class="btn btn-blue pull-left" value="保存">
        <input type="submit" class="btn btn-blue  pull-right" value="取消">
      </div>
    </form>
  </div>

  <div class="logobox margin-bottom-30 bg-white">
  </div>

</div>
<script src="${ctx}/website/static/loginjs/supersized.3.2.7.min.js"></script>
<script src="${ctx}/website/static/loginjs/supersized-init.js"></script>
</body>
</html>