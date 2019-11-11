module.exports = options => {
    return async (req, res, next) => {
        const jwt = require('jsonwebtoken');
        const AdminUser = require('../../model/User');
        const token = String(req.headers.authorization || '').split(' ').pop();
        if (!token) {
            res.status('401').send({
                message: "你好，请先登陆"
            })
        }

        const {
            id
        } = jwt.verify(token, 'sometime')
        if (!id) {
            res.status('401').send({
                message: "你好，请先登陆"
            })
        }

        req.user = AdminUser.findOne(id);
        if (!req.user) {
            res.status('401').send({
                message: "你好，请先登陆"
            })
        }

        await next();
    }

}