const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name: {
        type: String,
    },
    password: {
        type: String,
        set(val) {
            return require('bcrypt').hashSync(val, 10) //引入包之后直接使用hash方法，接收两个参数一个是要加密的值一个是加密的等级
        }
    }
})


exports.user = mongoose.model('user', Schema);