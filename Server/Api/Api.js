const express = require('express');
const db = require('../db/db').blogDb;
const user = require('../../model/user');
const openWrt = require('../../model/oepnwrt');
const assert = require('http-assert');
const jwt = require('jsonwebtoken');
const multer = require('multer')

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
    static async userLogin(req, res, next) {
        console.log(req.body)
        let {
            username,
            password
        } = req.body;
        let AdminUser = await user.findOne({
            username
        }).select('+password')
        if (!AdminUser) {
            res.status(422).send({
                message: '用户不存在'
            })
        }
        const InVaild = require('bcrypt').compareSync(password, AdminUser.password);
        if (!InVaild) {
            res.status(422).send({
                message: '密码错误'
            })
        }

        const token = jwt.sign({
            id: AdminUser._id
        }, 'sometime')
        res.end(token);
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

    static async EditUser(req, res) {
        console.log(req.body)
        let Adminuser = await user.findByIdAndUpdate(
            req.params.id,
            req.body
        )
        if (Adminuser) {
            res.status(200).send({
                message: '修改密码成功'
            })
        } else {
            res.status(401).send({
                message: '修改密码失败'
            })
        }
    }

    static async authVerify(req, res) {
        console.log('权限校验') //在外部我已经挂载了一个权限校验的中间件，所以权限校验甚至可以通过请求别的带有权限校验中间件的Api去实现，但是为了Api更加的合理，可读，
        //我才又写了一个Api即使这个Api里就一个console但是别人看起来就知道这个是用来给前端做权限验证的Api，而且后续也可以增加别的功能
    }

    static async errHandle(err, req, res, next) {
        res.status(err.statusCode || 500).send({
            message: err.message
        })
    }

    //openwrt
    static async openWrtEdit(req, res) {
        console.log(req.body);
        let model = await openWrt.create(req.body);
        res.send(model);

    }

    static async getOpenWrtConfig(req, res) {
        let config = await openWrt.find({})
        res.json(config[0])
    }

    static async putOpenWrtConfig(req, res) {
        console.log(req.body)
        let Adminuser = await openWrt.findByIdAndUpdate(
            req.params.id,
            req.body
        )
        if (Adminuser) {
            res.status(200).send({
                message: '修改配置文件成功'
            })
        } else {
            res.status(401).send({
                message: '修改配置文件失败'
            })
        }
    }
}

module.exports.BlogRouter = BlogRouter;