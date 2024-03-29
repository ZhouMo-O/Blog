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
app.use('/uploads', express.static(__dirname + '/uploads'));
//让路由可以接收json数据
app.use(express.json())
app.use(history({
    htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
}));
app.use('/', express.static(__dirname + '/admin'))
app.use(require('cors')())
//错误处理程序，驳货err的错误信息
///-----------------------路由----------------------------


//user
app.post('/api/login', urlencodedParser, Api.userLogin);

app.post('/api/register', urlencodedParser, Api.userRegister);

app.get('/api/findUser', urlencodedParser, Api.findUser);

app.get('/api/findOneUser/:id', urlencodedParser, Api.findOneUser);

app.post('/api/authVerify', tokenVerify(), urlencodedParser, Api.authVerify);

app.put('/api/editUser/:id', urlencodedParser, Api.EditUser);

//openwrt
app.post('/api/openWrtEdit', urlencodedParser, Api.openWrtEdit)

app.get('/api/getOpenWrtConfig', Api.getOpenWrtConfig);

app.put('/api/putOpenWrtConfig', Api.putOpenWrtConfig);

app.get('/api/getOpenWrtConfigStatus', Api.getOpenWrtConfigStatus)

require('./Api/restApi')(app) //通用函数
require('./plugins/db')(app) //数据库廉价而
require('./Api/tagApi')(app) //云标签Api
//---------------------数据库服务--------------------------
app.listen(port, () => {
    console.log(`create server ok port*${port}`)
})