// 这个文件主要是做DB操作
const mongoose = require('mongoose');
require("../../model/blog");
const db = mongoose.model('blog');
require("../../model/user");
const user = mongoose.model('user');

class blogDb {
    //存博客
    static save(markdown, html, title, Intro) {
        let newBlog = new db({
            markdown: markdown,
            html: html,
            title: title,
            Intro: Intro
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
    static Editblog(id, markdown, html, title, Intro) {
        return db.findOne({
                _id: id
            })
            .then(data => {
                data.markdown = markdown;
                data.html = html;
                data.title = title;
                data.Intro = Intro;
                return data.save();
            })
            .catch(err => {
                console.log(err);
            })

    }

    static findUser(){
        return user.find().then(data=>{
            return data;
        })
        .catch(err=>{
            console.err(err);
        })
    }

    static findOneUser(id){
        return user.find({
            _id:id
        }).then(data=>{
            return data;
        })
        .catch(err=>{
            console.err(err);
        })
    }
}

module.exports.blogDb = blogDb;