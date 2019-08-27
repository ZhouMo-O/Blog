const express = require('express');
const db = require('../db/db').blogDb;


class BlogRouter {
    //存储blog
    constructor(obj) {
        console.log(obj)
    }

    static sendBlog(req, res) {
        db.save(req.body.markdown, req.body.html, req.body.title, req.body.Intro)
            .then((data) => {
                console.log(data);
                console.log(`添加博客:${req.body.title}`);
            })
            .catch(err => {
                console.log(err);
            })
    }

    static findAllBlog(req, res) {
        db.findAll()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    static findBlog(req, res) {
        db.findBlog(req.params.id)
            .then(data => {
                console.log(`查找博客:${data.title}id:${data.id}`);
                res.json(data)
            })
            .catch(err => {
                console.log(err);
            })
    }


    static deleteBlog(req, res) {
        db.deleteOneBlog(req.params.id)
            .then(data => {
                res.json(data);
                console.log('删除成功');
            })
            .catch(err => {
                console.log(err);
            })
    }

    static Editblog(req, res) {
        db.Editblog(req.params.id, req.body.markdown, req.body.html, req.body.title, req.body.Intro)
            .then(data => {
                console.log("更新完毕");
            })
            .catch(err => {
                console.log(err);
            })
    }

    //user
    static userLogin(req,res){
        console.log(req.body);
        let user = db.findOneUser(req.body.id);
        res.json('login')
    }

    static userRegister(req,res){
        console.log(req.body);
        let user = db.
        res.json('register');
    }

    static findUser(req,res){
        console.log(req.body);
        let user = db.findUser();
        res.send(user);
    }

    static findOneUser(req,res){
        console.log(req.body);
        let user = db.findOneUser(req.body.id);
        res.send(user);
    }
}

module.exports.BlogRouter = BlogRouter;