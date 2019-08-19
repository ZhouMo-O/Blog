const express = require('express');
const db = require('../db/db').blogDb;


class BlogRouter {
    //存储blog
    constructor(obj) {
        console.log(obj)
    }

    static sendBlog(req, res) {
        db.save(req.body.markdown, req.body.html)
            .then((data) => {
                console.log(data);
                console.log(`添加博客:${req.body.title}`);
            })
            .catch(err => {
                console.log(err);
            })
        console.log(req.body)
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
        // db.findBlog(req.params.id)
        //     .then(data => {
        //         console.log(`查找博客:${data.title}id:${data.id}`);
        //         res.json(data)
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
        console.log(req.params.id);
        res.json("ok")
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
}

module.exports.BlogRouter = BlogRouter;