module.exports = {
  productionSourceMap: false,
  // 关闭ESLINT校验工具
  lintOnSave: false,
  //配置代理跨域
  devServer: {
    proxy: {
      "/api": {
        target: "http://gmall-h5-api.atguigu.cn",
      },
    },
  },
};

// const path = require('path')
// function resolve(dir) {
//   return path.join(__dirname, dir)
// }
// module.exports = {
//   //路径根据自己的情况定，默认就填"./",静态资源的路径在static文件夹下就写’./static’
//   publicPath: './static',
//   productionSourceMap: false,
//   lintOnSave: false,
//   //配置服务器,自动打开页面
//   devServer: {
//     open: true,
//     proxy: {
//       "/api": {
//         target: "http://gmall-h5-api.atguigu.cn",
//       },
//     },
//   },
//   configureWebpack: {
//     resolve: {
//       alias: {
//         '@': resolve('src')
//       }
//     }
//   }
// }
