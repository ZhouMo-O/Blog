const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const port = 3333;
const Api = require('./Api/Api').BlogRouter;



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

app.get('/', (req, res) => {
    res.send('test')
})

app.post('/sendBlog', urlencodedParser, Api.sendBlog)

app.get('/findAllBlog', Api.findAllBlog)

app.get('/findBlog/:id', urlencodedParser, Api.findBlog)

app.post('/deleteBlog/:id', urlencodedParser, Api.deleteBlog)

app.post('/Editblog/:id', urlencodedParser, Api.Editblog)
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