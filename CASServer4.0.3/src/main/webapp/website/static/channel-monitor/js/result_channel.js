$("#channel_monitor_li").addClass("open");
$("#channel_monitor_li .submenu").css('display', 'block');

$.get("/result.json?appid=${app.getAppId()}&type=0", function (data) {
    var html = "";
    for (var p in data) {
        var str = data[p];
        var appName = str["appName"];
        var packageName = str["packageName"];
        var appVersion = str["appVersion"];
        var channelName = str["channelName"];
        var downloadTimes = str["downloadTimes"];
        var appURLDownload = str["appURLDownload"];
        var reportURL = str["reportURL"];
        html += "<tr> <td>" + appName + "</td> <td>" + packageName + "</td> <td>" + appVersion + "</td> <td>" + channelName + "</td> <td>" + downloadTimes + "</td><td>" + appURLDownload + "</td><td>"+ reportURL + "</td> </tr>";
    }
    $("#legalNum").html(data.length);
    $("#legalBody").html(html);
})
$.get("/result.json?appid=${app.getAppId()}&type=3", function (data) {
    var html = "";
    for (var p in data) {
        var str = data[p];
        var appName = str["appName"];
        var packageName = str["packageName"];
        var appVersion = str["appVersion"];
        var channelName = str["channelName"];
        var downloadTimes = str["downloadTimes"];
        var appURLDownload = str["appURLDownload"];
        var reportURL = str["reportURL"];
        html += "<tr> <td>" + appName + "</td> <td>" + packageName + "</td> <td>" + appVersion + "</td> <td>" + channelName + "</td> <td>" + downloadTimes + "</td><td>" + appURLDownload + "</td><td>"+ reportURL + "</td> </tr>";
    }
    $("#phishingNum").html(data.length);
    $("#phishingBody").html(html);
})
$.get("/result.json?appid=${app.getAppId()}&type=2", function (data) {
    var html = "";
    for (var p in data) {
        var str = data[p];
        var appName = str["appName"];
        var packageName = str["packageName"];
        var appVersion = str["appVersion"];
        var channelName = str["channelName"];
        var downloadTimes = str["downloadTimes"];
        var appURLDownload = str["appURLDownload"];
        var reportURL = str["reportURL"];
        html += "<tr> <td>" + appName + "</td> <td>" + packageName + "</td> <td>" + appVersion + "</td> <td>" + channelName + "</td> <td>" + downloadTimes + "</td><td>" + appURLDownload + "</td><td>"+ reportURL + "</td> </tr>";
    }
    $("#privateNum").html(data.length);
    $("#privateBody").html(html);
})
