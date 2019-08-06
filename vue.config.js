module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    devServer: {
        open: true,
        host: '192.168.1.107',
        port: 8088,
        proxy: {
            // 配置跨域
            '/api': {
                target: "http://192.168.1.107:3333",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ''
                }

            }
        }
    }
}