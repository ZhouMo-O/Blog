const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const port = 3333;
const Api = require('./Api/Api').BlogRouter;



///---------------------中间件--------------------------
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({
    extended: false
})

//让路由可以接收json数据

app.use(express.json())



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

//blog
app.post('/sendBlog', urlencodedParser, Api.sendBlog)

app.get('/findAllBlog', Api.findAllBlog)

app.get('/findBlog/:id', urlencodedParser, Api.findBlog)

app.post('/deleteBlog/:id', urlencodedParser, Api.deleteBlog)

app.post('/Editblog/:id', urlencodedParser, Api.Editblog)

//user
app.post('/login',urlencodedParser,Api.userLogin);

app.post('/register',urlencodedParser,Api.userRegister);

app.get('/findUser',urlencodedParser,Api.findUser);

app.get('/findOneUser',urlencodedParser,Api.findOneUser);
//---------------------数据库服务--------------------------
mongoose.connect('mongodb://localhost:27017/blog', {
        useNewUrlParser: true,
        useCreateIndex:true
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