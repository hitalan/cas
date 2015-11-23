/**
 * Created by cuidong on 15-10-9.
 */
    //左侧的nav导航栏控制 ============start================
var select_label=function(){
    var breadcrumb=document.getElementsByClassName('breadcrumb')[0];
    for(var i=breadcrumb.firstElementChild; i.nextElementSibling!=null;i= i.nextElementSibling);
    var label= i.innerHTML;

    var nav_label=document.getElementsByClassName('sidebar-menu')[0].getElementsByTagName('span');
    var nav_li=document.getElementsByClassName('sidebar-menu')[0].getElementsByTagName('li');
    //初始化所有的 className
    for(var i in nav_li) nav_li[i].className='';
    //标记 最里面的li
    var flag=true;
    for(var j in nav_label){
        if(nav_label[j].innerHTML==label){
            //从最里面开始遍历其父节点
            for(var p=nav_label[j].parentNode; p.tagName!='DIV';p= p.parentNode){
                //判断是否是里层的li
                if(p.tagName=='LI'){
                    if(flag){
                        p.className='active';
                        flag=false;
                    }else p.className='open';
                }
            }
        }
    }
}
select_label();

//导航栏控制 ===============end============================

//动态添加breadcrumb内容=================start==================

var breadcrumb=document.getElementsByClassName('breadcrumb')[0];
var li=breadcrumb.getElementsByTagName('li');
//选取第一个元素进行处理

//insertBefore必须用在父元素上
for(var i=0;i<li.length-1;i++){
    var a=document.createElement('a');
    a.href="#";
    a.innerHTML=li[i].textContent;
    li[i].textContent='';
    li[i].appendChild(a);
    if(i==0){
        a.href='/';
        var tagi=document.createElement('i');
        tagi.className='fa fa-home';
        li[0].insertBefore(tagi,li[0].firstChild);
    }
}

//动态添加breadcrumb内容==================end======================