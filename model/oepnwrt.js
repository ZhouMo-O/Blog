const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    ss: {
        type: String,
        default: null
    },
    kcp: {
        type: String,
        default: null
    }

})


module.exports = mongoose.model('openWrt', Schema)