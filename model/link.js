const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    link: {
        type: String
    },
    linksIntro: {
        type: String
    }
})
module.exports = mongoose.model('links', Schema)