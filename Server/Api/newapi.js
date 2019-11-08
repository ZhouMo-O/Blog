module.exports = app => {
    const express = require('express');
    const router = express.Router();
    const Blog = require(`../../model/blog`).blog

    router.post('/blogs', async (req, res) => {
        console.log(req.body)
        const model = await Blog.create(req.body);
        res.send(model)
    })

    router.get('/blogs', async (req, res) => {
        const items = await Blog.find().sort({
            date: 'desc'
        })
        res.send(items)
    })

    router.get('/blogs/:id', async (req, res) => {
        const model = await Blog.findById(req.params.id);
        res.send(model)
    })

    router.put('/blogs/:id', async (req, res) => {
        console.log(req.params.id)
        const item = await Blog.findByIdAndUpdate(req.params.id, req.body);
        res.send(item);
    })

    router.delete('/blogs/:id', async (req, res) => {
        console.log(req.params.id);
        await Blog.findByIdAndDelete(req.params.id)
        res.send({
            success: true
        });
    })

    app.use('/api', router)
}