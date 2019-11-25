module.exports = app => {
    const express = require('express');
    const router = express.Router()

    app.use('/api/tag/:resource', async (req, res, next) => {
        console.log(req.params.resource)
        const modeName = require('inflection').classify(req.params.resource);
        req.Model = require(`../../model/${modeName}`);
        console.log('look me!!');
        next();
    }, router)

    router.get('/:id', async (req, res) => {
        const data = await req.Model.find({
            parent: req.params.id
        }).populate('parent');
        res.send(data);
    })
}