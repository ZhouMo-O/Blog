module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
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