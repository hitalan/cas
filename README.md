# 基于cas的单点认证登录系统的设计与实现


### **1. 工程介绍**
本工程是基于cas单点登录认证的客户端和服务端的功能实现。能够实现的功能室单点登录的认证，以及与登录相关的注册、验证、找回密码、注销等一系列的操作工作。

### **2. 相关链接**

**casgit 官网** [https://github.com/Jasig/cas](https://github.com/Jasig/cas)

**cas 官网** [http://jasig.github.io/cas/4.1.x/index.html](http://jasig.github.io/cas/4.1.x/index.html)

### **3. 子项目介绍**

**casclient** 是使用gradle构建的cas客户端的java web工程。

**casserver4.0.3**  使用gradle构建的基于cas4.0.3版本的cas服务端的java web工程。

### **4. gradle介绍**
> Gradle 是以 Groovy 语言为基础，面向Java应用为主。基于DSL（领域特定语言）语法的自动化构建工具。

> * 1. gradle对多工程的构建支持很出色，工程依赖是gradle的第一公民。
> * 2. gradle支持局部构建。
> * 3. 支持多方式依赖管理：包括从maven远程仓库、nexus私服、ivy仓库以及本地文件系统的jars或者dirs
> * 4. gradle是第一个构建集成工具（the first build integration tool），与ant、maven、ivy有良好的相容相关性。
> * 5. 轻松迁移：gradle适用于任何结构的工程（Gradle can adapt to any structure you have.）。你可以在同一个开发平台平行构建原工程和gradle工程。通常要求写相关测试，以保证开发的插件的相似性，这种迁移可以减少破坏性，尽可能的可靠。这也是重构的最佳实践。
> * 6. gradle的整体设计是以作为一种语言为导向的，而非成为一个严格死板的框架。
> * 7. 免费开源