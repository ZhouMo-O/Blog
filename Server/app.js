const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const port = 3333;
const Api = require('./Api/Api').BlogRouter;
const history = require('connect-history-api-fallback');
const tokenVerify = require('./middleware/auth');
///---------------------中间件--------------------------
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({
    extended: true
})

//让路由可以接收json数据
app.use(express.json())
app.use(history({
    htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
}));
app.use('/', express.static(__dirname + '/admin'))
app.use(require('cors')())
//错误处理程序，驳货err的错误信息
///-----------------------路由----------------------------



//blog

app.post('/api/sendBlog', urlencodedParser, tokenVerify(), Api.sendBlog)

app.get('/api/findAllBlog', Api.findAllBlog)

app.get('/api/findBlog/:id', urlencodedParser, Api.findBlog)

app.post('/api/deleteBlog/:id', tokenVerify(), urlencodedParser, Api.deleteBlog)

app.post('/api/Editblog/:id', tokenVerify(), urlencodedParser, Api.Editblog)

//user
app.post('/api/login', urlencodedParser, Api.userLogin);

app.post('/api/register', urlencodedParser, Api.userRegister);

app.get('/api/findUser', urlencodedParser, Api.findUser);

app.get('/api/findOneUser/:id', urlencodedParser, Api.findOneUser);

app.post('/api/authVerify', tokenVerify(), urlencodedParser, Api.authVerify);

app.use(Api.errHandle)
//---------------------数据库服务--------------------------
mongoose.connect('mongodb://localhost:27017/blog', {
        useNewUrlParser: true,
        useCreateIndex: true
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