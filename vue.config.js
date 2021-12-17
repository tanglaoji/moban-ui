const BASE_URL = process.env.NODE_ENV === "production" ? "/moban-ui/" : "/";

module.exports = {
  productionSourceMap: false,
  runtimeCompiler: true,
  publicPath: BASE_URL,
  devServer: {
    port: 9000,
    open: true, //配置自动启动浏览器
  },
  css: {
    loaderOptions: {
      // vue.config.js for less-loader"6.0.0
      less: {
        lessOptions: {
          // DO NOT REMOVE THIS LINE
          javascriptEnabled: true,
        },
      },
    },
  }
}