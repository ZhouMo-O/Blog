// 这个文件主要是做DB操作
const mongoose = require('mongoose');
require("../../model/blog");
const db = mongoose.model('blog');

class blogDb {
    //存博客
    static save(markdown, html) {
        let newBlog = new db({
            markdown: markdown,
            html: html,
        })
        return newBlog.save();
    }

    //查找所有博客
    static findAll() {
        return db.find({})
            .sort({
                date: 'desc'
            })
    }

    static findBlog(id) {
        return db.findOne({
            _id: id
        })
    }

    static deleteOneBlog(id) {
        return db.deleteOne({
            _id: id
        })
    }
}

module.exports.blogDb = blogDb;