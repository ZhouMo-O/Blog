const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    title: {
        type: String,
        default: true
    },
    markdown: {
        type: String,
        default: true,
    },
    html: {
        type: String,
        default: true,
    },
    Intro: {
        type: String,
        default: '点击查看详情'
    },
    blog: {
        type: Number,
        default: 0
    },
    like: {
        type: Number,
        default: 0
    },
    read: {
        type: Number,
        default: 0
    },
    comment: {
        type: Array,
        default: 0
    },
    author: {
        type: String,
        default: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    parent: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'tag',
    }

})


module.exports = mongoose.model('blog', Schema);