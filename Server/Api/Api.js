const express = require('express');
const db = require('../db/db').blogDb;
const user = require('../../model/user');
const assert = require('http-assert');


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
    static async userLogin(req, res) {
        let {
            username,
            password
        } = req.body;
        let AdminUser = await user.findOne({
            username
        })
        if (!AdminUser) {
            res.status(422).send({
                message: '用户不存在'
            })
        }
        // res.send(AdminUser);
    }

    static async userRegister(req, res) {
        let model = await user.create(req.body);
        res.send(model);
    }

    static async findUser(req, res) {
        let AdminUser = await user.find().limit(10);
        res.send(AdminUser)

    }
    static async findOneUser(req, res) {
        console.log(req.params.id);
        let adminUser = await user.findOne({
            _id: req.params.id
        })
        console.log(adminUser)
        res.send(adminUser);
    }
}

module.exports.BlogRouter = BlogRouter;