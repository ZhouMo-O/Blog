const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        unique:true,
        default: true
    },
    name: {
        type: String,
        default: true,
    },
    password: {
        type: String,
        set(val){
            return require('bcrypt').hashSync(val,10)   //引入包之后直接使用hash方法，接收两个参数一个是要加密的值一个是加密的等级
        },
        default: true,
    },
})


exports.user = mongoose.model('user', userSchema);