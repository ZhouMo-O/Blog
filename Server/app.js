const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const port = 3333;
const BlogRouter = require('./Api/Api').BlogRouter;



///---------------------中间件--------------------------
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({
    extended: false
})



///-----------------------路由----------------------------
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


app.post('/sendBlog', urlencodedParser, BlogRouter.sendBlog)

app.get('/findAllBlog', BlogRouter.findAllBlog)

app.get('/findBlog/:id', urlencodedParser, BlogRouter.findBlog)

app.post('/deleteBlog/:id', urlencodedParser, BlogRouter.deleteBlog)
//---------------------数据库服务--------------------------
mongoose.connect('mongodb://localhost/blog', {
        useNewUrlParser: true
    })
    .then(() => {
        console.log('数据库连接成功')
        app.listen(port, () => {
            console.log(`create server ok port*${port}`)
        })
    })
    .catch((err) => {
        console.log(err + "数据库连接失败,请检查数据库路径")
    })