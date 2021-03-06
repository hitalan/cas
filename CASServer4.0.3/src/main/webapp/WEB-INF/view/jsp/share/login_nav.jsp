<%--
  Created by IntelliJ IDEA.
  User: cuidong
  Date: 15-8-12
  Time: 上午10:15
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" scope="session"/>
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name='viewport' content='width=device-width, initial-scale=1'>
  <title><tiles:getAsString name="title"/></title>
  <tiles:insertAttribute name="header" />
  <script src="${ctx}/website/static/jquery/2.1.3/jquery.js"></script>
  <script src="${ctx}/website/static/bootstrap-default/3.3.4/js/bootstrap-3.3.4.js"></script>
  <script src="${ctx}/website/static/bootstrap-dashboard/0.0.1/flot/jquery.slimscroll.min.js"></script>

  <!-- CSS -->
  <link rel="stylesheet" href="${ctx}/website/static/css/login/reset.css"/>
  <link rel="stylesheet" href="${ctx}/website/static/css/login/supersized.css"/>

  <link rel="stylesheet" href="${ctx}/website/static/css/login/login.css"/>
</head>
<body>
  <tiles:insertAttribute name="body" />
</body>

<!--Beyond Scripts-->
<script src="${ctx}/website/static/bootstrap-dashboard/0.0.1/flot/beyond.min.js"></script>

<%--<!--Page Related Scripts-->--%>
<%--<<script src="/website/static/bootstrap-dashboard/0.0.1/flot/jquery.flot.js"></script>--%>
<%--<script src="/website/static/bootstrap-dashboard/0.0.1/flot/jquery.flot.orderBars.js"></script>--%>
<%--<script src="/website/static/bootstrap-dashboard/0.0.1/flot/jquery.flot.tooltip.js"></script>--%>
<%--<script src="/website/static/bootstrap-dashboard/0.0.1/flot/jquery.flot.resize.js"></script>--%>
<%--<script src="/website/static/bootstrap-dashboard/0.0.1/flot/jquery.flot.selection.js"></script>--%>
<%--<script src="/website/static/bootstrap-dashboard/0.0.1/flot/jquery.flot.crosshair.js"></script>--%>
<%--<script src="/website/static/bootstrap-dashboard/0.0.1/flot/jquery.flot.stack.js"></script>--%>
<%--<script src="/website/static/bootstrap-dashboard/0.0.1/flot/jquery.flot.time.js"></script>--%>
<%--<script src="/website/static/bootstrap-dashboard/0.0.1/flot/jquery.flot.pie.js"></script>--%>
<%--<script src="/website/static/bootstrap-dashboard/0.0.1/flot/flot-init.js"></script>--%>

<script type="text/javascript">
  $(window).bind("load", function () {

    /*Sets Themed Colors Based on Themes*/
    themeprimary = getThemeColorFromCss('themeprimary');
    themesecondary = getThemeColorFromCss('themesecondary');
    themethirdcolor = getThemeColorFromCss('themethirdcolor');
    themefourthcolor = getThemeColorFromCss('themefourthcolor');
    themefifthcolor = getThemeColorFromCss('themefifthcolor');

//			InitiateFlotBarChart.init();
//			InitiateFlotSelectableChart.init();
//			InitiateRealTimeChart.init();
//			InitiateStackedChart.init();
//			InitiateVisitorChart.init();
//			InitiateAnnotationChart.init();
//			InitiatePieChart.init();
//			InitiateHorizonalChart.init();
  });
</script>
</html>