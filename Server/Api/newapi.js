module.exports = app => {
    const express = require('express');
    const router = express.Router({
        mergeParams: true
    });

    // router.post(`/tags`, async (req, res) => {
    //     console.log(req.body)
    //     const tag = await Tag.create(req.body);
    //     console.log(tag)
    //     res.send(tag);
    // })

    // router.get('/tags', async (req, res) => {
    //     const items = await Tag.find().sort({
    //         date: 'desc'
    //     })
    //     res.send(items)
    // })

    // router.get('/tags/:id', async (req, res) => {
    //     const data = await Tag.findById(req.params.id)
    //     res.send(data);
    // })

    // router.put('/tags/:id', async (req, res) => {
    //     const data = await Tag.findByIdAndUpdate(req.params.id, req.body)
    //     res.send(data);
    // })

    // router.delete('/tags/:id', async (req, res) => {
    //     const data = await Tag.findByIdAndDelete(req.params.id)
    //     res.send(data)
    // })

    router.post('/', async (req, res) => {
        const model = await req.Model.create(req.body);
        console.log(model)
        res.send(model)
    })


    router.get('/', async (req, res) => {
        //管理查询
        console.log('get list')
        const items = await req.Model.find().populate('parent').sort({
            date: 'desc'
        })
        console.log(items)
        res.send(items)
    })

    router.get('/:id', async (req, res) => {
        const model = await req.Model.findById(req.params.id);
        res.send(model)
    })

    router.put('/:id', async (req, res) => {
        console.log(req.params.id)
        const item = await req.Model.findByIdAndUpdate(req.params.id, req.body);
        res.send(item);
    })

    router.delete('/:id', async (req, res) => {
        console.log(req.params.id);
        await req.Model.findByIdAndDelete(req.params.id)
        res.send({
            success: true
        });
    })

    app.use('/api/rest/:resource', async (req, res, next) => {
        const modeName = require('inflection').classify(req.params.resource);
        req.Model = require(`../../model/${modeName}`);
        next();
    }, router)
}