# 个人博客-sunset

### 项目介绍
一个基于Vue+express+mongodb的全栈项目

### 项目展示
9/2刚刚上线完成移动端和pc端都测试了一下，还不错，但是权限管理还没做好，所以先不公布域名了。  
9/6这两天把线上路由刷新，还有域名访问的问题都解决了，部署这块应该不会有什么大问题了。剩下的就是专注开发了，做好了权限就开放访问。  
9/11最近没有更新因为在学一些新东西，感觉长进了不少，后续会用更加完美的解决方案，写出优美的代码;)  
9/17权限这块差不多了，后面打算把我的博客做成一个docker的分层部署，还要应用elasticSearch，这是未来的两个大的方向，带上在做这些工作之前我先要重构我的后端代码，还有就是完善一下前端的一些功能，总的来说我对现有的界面不是很满意

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
