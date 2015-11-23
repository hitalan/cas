function toDomain(domain, obj){
    cleanSoMsg();
    cleanSuMsg();
    clearSoValue();
    clearValue();
    $("#content_span").show();
    $(".solution_complete").hide();
    $(".solution_menu_ul").children().attr('class','');
    $(obj).attr('class','active');
    $("div[name='domain']").hide();
    if(domain=='online-game') {
        $("#nav_span,#content_span").css('min-height','1700px');
    }else{
        $("#nav_span,#content_span").css('min-height','900px')
    }
    $("#"+domain).show();
}

$(function(){
    var domain = $("#h_domain").val();
    toDomain(domain, $("#li-"+domain)[0]);
});

//function getSolution(domain){
//    cleanSoMsg();
//    cleanSuMsg();
//    clearSoValue();
//    clearValue();
//    $("#domain").val(domain);
//    $("#content_span").hide();
//    $("#solution_complete").show();
//    $("#nav_span").css('min-height','900px')
//    $("#"+domain).show();
//}

//function requestSolution() {
//    cleanSoMsg();
//    var cnt = 0;
//    var name = $("#so_name").val();
//    if($.trim(name)==""){
//        $("#tip_so_name").text("请输入姓名");
//        cnt++;
//    }
//    if(name.length>25){
//        $("#tip_so_name").text("姓名不能超过25个字符");
//        cnt++;
//    }
//    var company = $("#so_company").val();
//    if($.trim(company)==""){
//        $("#tip_so_company").text("请输入公司");
//        cnt++;
//    }
//    if(company.length>50){
//        $("#tip_so_company").text("公司不能超过50个字符");
//        cnt++;
//    }
//    var title = $("#title").val();
//    if($.trim(title)==""){
//        $("#tip_so_title").text("请输入职务");
//        cnt++;
//    }
//    if(title.length>50){
//        $("#tip_so_title").text("职务不能超过50个字符");
//        cnt++;
//    }
//    var mail = $("#so_mail").val();
//    var reg_mail = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
//    if($.trim(mail)==""){
//        $("#tip_so_mail").text("请输入邮箱");
//        cnt++;
//    }
//    if(mail.length>60){
//        $("#tip_so_mail").text("邮箱不能超过60个字符");
//        cnt++;
//    }
//    if(!reg_mail.test(mail)){
//        $("#tip_so_mail").text("邮箱格式不正确");
//        cnt++;
//    }
//    var telephone = $("#telephone").val();
//    var mobile = $("#mobile").val();
//    var qq = $("#qq").val();
//    if($.trim(telephone)=="" && $.trim(mobile)=="" && $.trim(qq)==""){
//        $("#tip_contact").text("请至少输入一种联系方式");
//        cnt++;
//    }
//    if(telephone.length>20){
//        $("#tip_so_telephone").text("办公电话不能超过20个字符");
//        cnt++;
//    }
//    var reg_mobile = /^\d{11}$/;
//    if(mobile.length>0 && !reg_mobile.test(mobile)){
//        $("#tip_so_mobile").text("移动电话不正确");
//        cnt++;
//    }
//    var reg_qq = /^\d{5,12}$/;
//    if(qq.length>0 && !reg_qq.test(qq)){
//        $("#tip_so_qq").text("QQ号码不正确");
//        cnt++;
//    }
//    var question = $("#question").val();
//    if(question.length>120){
//        $("#tip_so_question").text("问题或建议不能超过120个字符");
//        cnt++;
//    }
//    var domain = $("#domain").val();
//    if (cnt==0){
//        $("#so_btn").hide();
//        $.ajax({
//            url:"/solution/get-solution/",
//            type:"POST",
//            data:{"name":name, "company":company,"title":title,"mail":mail, "telephone":telephone, "mobile":mobile, "qq":qq, "question":question, "domain":domain},
//            dataType:"json",
//            success:function(data){
//                if(data.status==1){
//                    $("#so_msg").text("已成功提交申请，稍后客服人员会与您联系！");
//                    clearSoValue();
//                    $("#so_btn").show();
//                } else {
//                    $("#so_msg").text("本次提交申请失败，请稍后再试！");
//                    $("#so_btn").show();
//                }
//            }
//        });
//    }
//}

function cleanSoMsg(){
$("#tip_so_name").text("");
$("#tip_so_company").text("");
$("#tip_so_title").text("");
$("#tip_so_mail").text("");
$("#tip_contact").text("");
$("#tip_so_telephone").text("");
$("#tip_so_mobile").text("");
$("#tip_so_qq").text("");
$("#tip_so_question").text("");
$("#so_msg").text("");
}

function clearSoValue(){
$("#so_name").val("");
$("#so_company").val("");
$("#title").val("");
$("#so_mail").val("");
$("#telephone").val("");
$("#mobile").val("");
$("#qq").val("");
$("#question").val("");
}

function cleanSuMsg(){
$("#tip_name").text("");
$("#tip_company").text("");
$("#tip_mail").text("");
$("#tip_suggestion").text("");
$("#msg").text("");
}

function clearValue() {
$("#name").val("");
$("#company").val("");
$("#mail").val("");
$("#suggestion").val("");
}


function dosuggestion() {
    cleanSuMsg();
    var cnt = 0;
    var name = $("#name").val();
    if($.trim(name)==""){
        $("#tip_name").text("请输入姓名");
        cnt++;
    }
    if(name.length>25){
        $("#tip_name").text("姓名不能超过25个字符");
        cnt++;
    }
    var company = $("#company").val();
    /*if($.trim(company)==""){
        $("#tip_company").text("请输入公司");
        cnt++;
    }*/
    if(company.length>50){
        $("#tip_company").text("公司不能超过50个字符");
        cnt++;
    }
    var mail = $("#mail").val();
    var reg_mail = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if($.trim(mail)==""){
        $("#tip_mail").text("请输入邮箱");
        cnt++;
    }
    if(mail.length>60){
        $("#tip_mail").text("邮箱不能超过60个字符");
        cnt++;
    }
    if($.trim(mail)!=""&&!reg_mail.test(mail)){
        $("#tip_mail").text("邮箱格式不正确");
        cnt++;
    }
    var suggestion = $("#suggestion").val();
    if($.trim(suggestion)==""){
        $("#tip_suggestion").text("请输入问题或建议");
        cnt++;
    }
    if(suggestion.length>120){
        $("#tip_suggestion").text("问题或建议不能超过120个字符");
        cnt++;
    }
    if (cnt==0){
        $("#su_btn").hide();
        $.ajax({
            url:"/solution/suggestion/",
            type:"POST",
            data:{"name":name, "company":company,"mail":mail,"suggestion":suggestion},
            dataType:"json",
            success:function(data){
                if(data.status==1){
                    $("#msg").text("提交成功！");
                    clearValue();
                    $("#su_btn").show();
                } else {
                    $("#msg").text("本次提交失败！");
                    $("#su_btn").show();
                }
            }
        });
    }
}


/**---------------免费获取SDK----------------*/
var map = {
    "secu_board":"手机网游防外挂组件",
    "mob_aly_plug":"手机网游防外挂组件",
    "sms_hijack":"短信验证码防劫持组件",
    "antivirus":"App环境清场杀毒组件",
    "sub_protect":"App分区域保护组件"
    }
function getSdk(domain){
    cleanSdkMsg();
    clearSdkValue();
    cleanSuMsg();
    clearValue();
    $("#sdk_domain").val(domain);
    $("#content_span").hide();
    $("#sdk_complete").show();
    $("#nav_span").css('min-height','900px');
    $("#sdk_complete_title").text("免费试用"+map[domain]);
    //$("#"+domain).show();
}

function cleanSdkMsg(){
$("#tip_sdk_name").text("");
$("#tip_sdk_company").text("");
$("#tip_sdk_title").text("");
$("#tip_sdk_mail").text("");
$("#tip_contact").text("");
$("#tip_sdk_telephone").text("");
$("#tip_sdk_mobile").text("");
$("#tip_sdk_qq").text("");
$("#tip_sdk_question").text("");
$("#sdk_msg").text("");
}

function clearSdkValue(){
$("#sdk_name").val("");
$("#sdk_company").val("");
$("#sdk_title").val("");
$("#sdk_mail").val("");
$("#sdk_telephone").val("");
$("#sdk_mobile").val("");
$("#sdk_qq").val("");
$("#sdk_question").val("");
}

function requestSdk() {
    cleanSdkMsg();
    var cnt = 0;
    var name = $("#sdk_name").val();
    if($.trim(name)==""){
        $("#tip_sdk_name").text("请输入姓名");
        cnt++;
    }
    if(name.length>25){
        $("#tip_sdk_name").text("姓名不能超过25个字符");
        cnt++;
    }
    var company = $("#sdk_company").val();
    if($.trim(company)==""){
        $("#tip_sdk_company").text("请输入公司");
        cnt++;
    }
    if(company.length>50){
        $("#tip_sdk_company").text("公司不能超过50个字符");
        cnt++;
    }
    var title = $("#sdk_title").val();
    if($.trim(title)==""){
        $("#tip_sdk_title").text("请输入职务");
        cnt++;
    }
    if(title.length>50){
        $("#tip_sdk_title").text("职务不能超过50个字符");
        cnt++;
    }
    var mail = $("#sdk_mail").val();
    var reg_mail = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if($.trim(mail)==""){
        $("#tip_sdk_mail").text("请输入邮箱");
        cnt++;
    }
    if(mail.length>60){
        $("#tip_sdk_mail").text("邮箱不能超过60个字符");
        cnt++;
    }
    if(!reg_mail.test(mail)){
        $("#tip_sdk_mail").text("邮箱格式不正确");
        cnt++;
    }
    var telephone = $("#sdk_telephone").val();
    var mobile = $("#sdk_mobile").val();
    var qq = $("#sdk_qq").val();
    if($.trim(telephone)=="" && $.trim(mobile)=="" && $.trim(qq)==""){
        $("#tip_contact").text("请至少输入一种联系方式");
        cnt++;
    }
    if(telephone.length>20){
        $("#tip_sdk_telephone").text("办公电话不能超过20个字符");
        cnt++;
    }
    var reg_mobile = /^\d{11}$/;
    if(mobile.length>0 && !reg_mobile.test(mobile)){
        $("#tip_sdk_mobile").text("移动电话不正确");
        cnt++;
    }
    var reg_qq = /^\d{5,12}$/;
    if(qq.length>0 && !reg_qq.test(qq)){
        $("#tip_sdk_qq").text("QQ号码不正确");
        cnt++;
    }
    var question = $("#sdk_question").val();
    if(question.length>120){
        $("#tip_sdk_question").text("问题或建议不能超过120个字符");
        cnt++;
    }
    var domain = $("#sdk_domain").val();
    if (cnt==0){
        $("#sdk_btn").hide();
        $.ajax({
            url:"/solution/get-sdk/",
            type:"POST",
            data:{"name":name, "company":company,"title":title,"mail":mail, "telephone":telephone, "mobile":mobile, "qq":qq, "question":question, "domain":domain},
            dataType:"json",
            success:function(data){
                if(data.status==1){
                    $("#sdk_msg").text("已成功提交申请，稍后客服人员会与您联系！");
                    clearSdkValue();
                    $("#sdk_btn").show();
                } else {
                    $("#sdk_msg").text("本次提交申请失败，请稍后再试！");
                    $("#sdk_btn").show();
                }
            }
        });
    }
}