<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" scope="session"/>
<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        <li data-target="#carousel-example-generic" data-slide-to="3"></li>
    </ol>
    <!-- wrapper for slides -->
    <div class="carousel-inner" role="listbox">
        <div class="item active">
            <img src="${ctx}/website/static/images_v2.10/carousel_imgs/aa.png" style="width: 100%;"/>
            <div class="carousel-caption">
                A
            </div>
        </div>
        <div class="item">
            <img src="${ctx}/website/static/images_v2.10/carousel_imgs/aa1.png" style="width: 100%;"/>
            <div class="carousel-caption">
                B
            </div>
        </div>
        <div class="item">
            <img src="${ctx}/website/static/images_v2.10/carousel_imgs/aa2.png" style="width: 100%;"/>
            <div class="carousel-caption">
                C
            </div>
        </div>
        <div class="item">
            <img src="${ctx}/website/static/images_v2.10/carousel_imgs/aa3.png" style="width: 100%;"/>
            <div class="carousel-caption">
                D
            </div>
        </div>

    </div>
    <!-- Controls -->
    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>

