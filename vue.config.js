module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    devServer: {
        open: true,
        host: '192.168.2.3',
        port: 8088,
        proxy: {
            // 配置跨域
            '/api': {
                target: "http://192.168.2.3:3333",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ''
                }

            }
        }
    }
}