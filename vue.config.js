const webpack = require('webpack')
module.exports = {
    outputDir: __dirname + '/Server/admin',
    publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
    configureWebpack: {
        $: "jquery",
        jQuery: "jquery"
    },
    devServer: {
        open: true,
        host: 'localhost',
        port: 8088,
        proxy: {
            // 配置跨域
            '/api': {
                target: "http://localhost:3333",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ''
                }

            }
        }
    }
}