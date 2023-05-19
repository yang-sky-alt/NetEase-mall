// 设置vue脚手架一些相关的配置
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true,
			pathRewrite:{
				'^/api':''
			}
      }
    }
  }
}
