module.exports = {
  publicPath: process.env.VUE_APP_PPATHTH,
  productionSourceMap: process.env.NODE_ENV !== 'production',
  devServer: {
    proxy: {
      '/api': {
        // target: 'http://devh5.19cpiao.com/',
        // target: 'http://127.0.0.1:19967',
        // target: 'http://jiextx.com',
        target: 'http://81.69.226.127',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
