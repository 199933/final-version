'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {
    //  // Paths
    //  assetsSubDirectory: 'static',
    //  assetsPublicPath: '/',
    //  proxyTable: {},
  

    // // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    // port: 81, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    // autoOpenBrowser: false,
    // errorOverlay: true,
    // notifyOnErrors: true,
    // poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    
    // /**
    //  * Source Maps
    //  */

    // // https://webpack.js.org/configuration/devtool/#development
    // devtool: 'cheap-module-eval-source-map',

    // // If you have problems debugging vue-files in devtools,
    // // set this to false - it *may* help
    // // https://vue-loader.vuejs.org/en/options.html#cachebusting
    // cacheBusting: true,

    // cssSourceMap: true

    env: require('./dev.env'), 
    port: process.env.PORT || 81, 
    autoOpenBrowser: false, 
    assetsSubDirectory: 'static', 
    assetsPublicPath: '/', 
    proxyTable: { 
      '/list': { 
        // target: 'https://jsonplaceholder.typicode.com/',
        target:"http://api.work.com/",//设置你调用的接口域名和端口号 别忘了加http 
        changeOrigin: true, 
        pathRewrite: { 
          '^/list': '/' ,// 这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可 
        } 
      } 
    },  // CSS Sourcemaps off by default because relative paths are "buggy"  // with this option, according to the CSS-Loader README  // (https://github.com/webpack/css-loader#sourcemaps)  // In our experience, they generally work as expected,  // just be aware of this issue when enabling this option. 
    cssSourceMap: false
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
