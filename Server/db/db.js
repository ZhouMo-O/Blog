// 这个文件主要是做DB操作
const mongoose = require('mongoose');
require("../../model/blog");
const db = mongoose.model('blog');

class blogDb {
    //存博客
    static save(markdown, html, title) {
        let newBlog = new db({
            markdown: markdown,
            html: html,
            title: title
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
    //查找一个博客
    static findBlog(id) {
        return db.findOne({
            _id: id
        })
    }
    //删除一个博客
    static deleteOneBlog(id) {
        return db.deleteOne({
            _id: id
        })
    }
    //编辑博客
    static Editblog(id, markdown, html) {
        return db.findOne({
                _id: id
            })
            .then(blog => {
                blog.markdown = markdown;
                blog.html = html;
            })
    }
}

module.exports.blogDb = blogDb;