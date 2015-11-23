/*
 * Created by cuidong on 15-7-29.
 */
//数据结构 list_1 表示大的分类 list_2表示小的分类 list_1[i] 对应着 list_2[i][]
var total = $("#masterSize").val();
var btn1Array = new Array();
var btn2Array = new Array();
var ul1Array = new Array();
var ul2Array = new Array();

var list_1 = new Array();
var list_2 = new Array();

list_1 = [
    "社交通信",
    "便捷生活",
    "影音视频",
    "拍摄优化",
    "主题壁纸",
    "理财购物",
    "系统工具",
    "资讯阅读",
    "办公学习",
    "旅游出行",
    "休闲娱乐"
];


list_2[0] = [
    "手机邮箱",
    "通话辅助",
    "聊天"
];
list_2[1] = [
    "天气",
    "备忘",
    "日历",
    "医疗健康",
    "运动健身",
    "饮食"
];
list_2[2] = [
    "网络电视",
    "视频播放器",
    "垂直视频",
    "音乐",
    "电台"
];
list_2[3] = [
    "照相",
    "图片美化",
    "摄影"
];
list_2[4] = [
    "桌面美化",
    "锁屏插件"
];
list_2[5] = [
    "手机支付",
    "金融理财",
    "股票证券",
    "银行",
    "网购"
];
list_2[6] = [
    "无线管理",
    "文件管理",
    "网络云盘",
    "二维码",
    "记事本",
    "流量统计",
    "优化",
    "安全",
    "浏览器",
    "输入法"
];
list_2[7] = [
    "新闻",
    "漫画",
    "电子书",
    "笑话",
    "字典",
    "阅读工具"
];
list_2[8] = [
    "办公",
    "笔记",
    "考试学习",
    "教育"
];
list_2[9] = [
    "地图导航",
    "旅游攻略",
    "购票",
    "酒店"
]
list_2[10] = [
    "游戏",
    "游戏攻略"
]


//print_1 对大分类的 ul 列表进行填写
//print_2 对小分类的 ul 列表进行填写
var print_1 = function(number,id){
    var html = "";
    for(var i in list_1){
        if(i != number){
            html += "<li onclick='change_1(" + i + "," + id + ")'><a href='javascript:void(0);'>" + list_1[i] + "</a> </li>";
        }
    }
    ul1Array[id].innerHTML = html;
}
var print_2 = function(number, number2, id){
    var html = "" ;
    for (var i in list_2[number]) {
        if(i != number2) {
            html += "<li onclick='change_2(" + number + "," + i + "," + id + ")'><a href='javascript:void(0);'>" + list_2[number][i] + "</a> </li>";
        }
    }
    ul2Array[id].innerHTML = html;
}
//change_1 动态改变大分类的button
//change_2 动态改变小分类的botton
//id 输入框编号 , number父分类编号(子分类横坐标)

var change_1 = function (number,id) {
    btn1Array[id].innerHTML = list_1[number] + "<span class='caret'></span>";
    print_1(number,id);
    change_2(number, 0 , id);
}

var change_2 = function (number, number2, id) {
    btn2Array[id].innerHTML = list_2[number][number2] + "<span class='caret'></span>";
    document.getElementById("category" + id).value = list_2[number][number2];
    print_2(number , number2 , id);
}



for (var index = 0; index < total; index++) {
    var btn1 = document.getElementById("dLabel1" + index);
    btn1Array[index] = btn1;
    var btn2 = document.getElementById("dLabel2" + index);
    btn2Array[index] = btn2;
    var ul1 = document.getElementById("list_1" + index);
    ul1Array[index] = ul1;
    var ul2 = document.getElementById("list_2" + index);
    ul2Array[index] = ul2;

    change_1(0,index);
    change_2(0,0,index);
}
