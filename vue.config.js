const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: defaultSettings.domain,
        secure: false,
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/api': '' // 重写路径，去除'/api'前缀
        }
      }
    }
  },
  configureWebpack: {
    // name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
