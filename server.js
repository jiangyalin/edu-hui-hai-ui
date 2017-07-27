var path = require('path');
var express = require('express');//引入exp require框架
var app = express();
var session = require('express-session');
var pkg = require('./package');//引入npm配置文件
var routes = require('./routes/');//引入入口模块

//设置模板目录
app.set('views',path.join(__dirname,'views'));

//设置模板引擎为ejs
app.set('view engine','ejs');

//设置静态文件目录
app.use(express.static(path.join(__dirname,'static')));

//设置模板全局变量（暂时可不写）
app.locals.blog = {
    title: pkg.name,
    description: pkg.description
};

//调用入口模块
routes(app);

//启动服务
app.listen(8081,function () {
    console.log("服务启动");
});