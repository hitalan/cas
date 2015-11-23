#### **工程名称**

casclient


#### **工程修改**

默认的端口为1314 默认的配置文件在resource文件夹下的config.properties文件中。通过修改此文件可以定义客户端访问服务端的url链接

#### **工程建立**

window用户

```
 $ gradlew.bat build

```
 linux用户

```
$ ./gradlew build

```
第一次使用gradle建立工程，首先将下载对应版的gradle，所以需要耐心等待一段时间。
建立完成，如果没有报错，成功建立。

#### **运行web工程**

window用户

```
 $ gradlew.bat jettyRun

```
若停止当前运行，则打开新窗口

```
 $ gradlew.bat jettyStop

```

 linux用户

```
$ ./gradlew jettyRun

```

若停止当前运行，则打开新窗口

```
 $ ./gradlew jettyStop

```
