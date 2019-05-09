const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy(
      '/api/', {
        target: 'https://gkcx.eol.cn/gkcx/api',
        changeOrigin: true
      }
    )
  )
}