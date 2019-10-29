const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    server: {
        type: String,
    },
    server_port: {
        type: Number,
    },
    passport: {
        type: String,
    },
    method: {
        type: String,
    },
    local_address: {
        type: String,
    },
    timeout: {
        type: Number,
    },
    reuser_port: {
        type: Boolean,
        default: true
    }
})


module.exports = mongoose.model('openWrt', Schema)