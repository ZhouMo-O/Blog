const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    tagName: {
        type: String
    }
})

module.exports = mongoose.model('tag', Schema)