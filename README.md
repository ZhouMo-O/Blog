# 个人博客-sunset

### 项目介绍
一个基于Vue+express+mongodb的个人博客。


### 项目地址和更新
http://sunset.blog5.net.cn/ 

9/2刚刚上线完成移动端和pc端都测试了一下，还不错，但是权限管理还没做好，所以先不公布域名了。  
9/6这两天把线上路由刷新，还有域名访问的问题都解决了，部署这块应该不会有什么大问题了。剩下的就是专注开发了，做好了权限就开放访问。  
9/11最近没有更新因为在学一些新东西，感觉长进了不少，后续会用更加完美的解决方案，写出优美的代码;)  
9/17权限这块差不多了，后面打算把我的博客做成一个docker的分层部署，还要应用elasticSearch，这是未来的两个大的方向，但是在做这些工作之前我先要重构我的后端代码，还有就是完善一下前端的一些功能，总的来说我对现有的界面不是很满意  
9/25这几天在搞mininet，没来得及搞blog，今天打算把项目迁移到Vultr上去顺便自己搭一个shadowsocket。  
10/11最近一直在玩openwrt，在上面搭建ss全家桶还做了一个kcptun加速。然后今天还把我的blog迁移到vps上去了。现在这个vps上有我的vpn和我的web应用。最近又长进了不少);  
11/18这段时间把openwrt弄好了,还专门学习了shell脚本,写了一个可以自动获取shadowSockets最新配置的脚本,详情可以看我的blog,里面有更新文章。之前一直有计划，然后今天正式开始重构后端接口了。  
12/6昨天我的远端vps挂了，求助了support搞了大半天最后10月到12月的博客数据全没了。功能都还在，就是数据都没了，我好难过T_T，我写的功能的一些心得我都放在博客里了。不过现在的博客功能已经比较全面了，就是评论和点赞还没写，但是后面公司要来一个项目了 更新可能就没有那么快了。虽然更新一直也不快...毕竟公司事儿也多，但是这个项目对我特别重要。所以在后面的日子我要全力以赴，冲冲冲！！！  
1/9项目正常运行，后续请看我的个人博客  
2020/4/27博客已经停止更新，在开发新版本博客，详情请看我的项目列表



### 目录结构
https://www.processon.com/embed/mind/5d4b88d3e4b02c6fb787d627

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### run mongodb
```
mongod --dbpath "the mongo db path"
```

### run express
 ```
 cd Server
 node app.js
 ```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
