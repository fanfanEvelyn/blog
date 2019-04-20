const path = require('path')
// const fs = require('fs')
// const webpack = require('webpack')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/online/' : '/',
  devServer: {
    port: 8085, // 端口号
    host: 'localhost',
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    // proxy: {
    //   '/api': {
    //     target: '<url>',
    //     ws: true,
    //     changeOrigin: true
    //   },
    //   '/foo': {
    //     target: '<other_url>'
    //   }
    // }, // 配置多个代理
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
      .set('_conf', resolve('config'))
    config
      .plugin('html')
      .tap(args => {
        args[0].filename = 'index.html'
        args[0].template = 'public/index.html'
        args[0].inject = true
        args[0].minify = {
          removeComments: false,
          collapseWhitespace: true,
          removeAttributeQuotes: true
        }
        args[0].chunksSortMode = 'dependency'
        return args
      })
  },
}