<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div class="navbar-inner">
    <div class="navbar-container">
        <!-- Navbar Barnd -->
        <div class="navbar-header pull-left">
            <a href="#" class="navbar-brand">
                <small>
                    <span style="line-height: 100%">手机应用安全</span>
                </small>
            </a>
        </div>
        <!-- /Navbar Barnd -->

        <div class="navbar-header pull-right">
            <div class="navbar-account">
                <ul class="account-area">

                        <li>
                            <a class="login-area dropdown-toggle" data-toggle="dropdown">
                                <section>
                                    <h2><span class="profile"><span>${username}</span></span></h2>
                                </section>
                            </a>
                            <!--Login Area Dropdown-->
                            <ul class="pull-right dropdown-menu dropdown-arrow dropdown-login-area">
                                <li><a href="/userinfo">个人中心</a></li>
                                <li class="divider "></li>
                                <li>
                                    <form action='/logout' method="post">
                                        <button type='submit' class="btn btn-link">退出</button>
                                    </form>
                                </li>
                            </ul>
                        </li>
                </ul>

                <div class="setting">
                    <a id="btn-setting" title="Setting" href="#">
                        <i class="icon glyphicon glyphicon-cog"></i>
                    </a>
                </div>

                <div class="setting-container">
                    <label>
                        <input type="checkbox" id="checkbox_fixednavbar">
                        <span class="text">Fixed Navbar</span>
                    </label>
                    <label>
                        <input type="checkbox" id="checkbox_fixedsidebar">
                        <span class="text">Fixed SideBar</span>
                    </label>
                    <label>
                        <input type="checkbox" id="checkbox_fixedbreadcrumbs">
                        <span class="text">Fixed BreadCrumbs</span>
                    </label>
                    <label>
                        <input type="checkbox" id="checkbox_fixedheader">
                        <span class="text">Fixed Header</span>
                    </label>
                </div>
            </div>
        </div>
    </div>
</div>