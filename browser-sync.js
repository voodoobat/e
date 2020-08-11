const fs = require('fs')
const server = require('browser-sync').create()

fs.readFile('.proxy', 'utf8', (e, proxy) => {

  server.init({
    proxy,
    server: proxy ? false : 'public',
    watch: true,
    files: [
      'public/**/*.css',
      'public/**/*.html',
      'public/**/*.js'
    ]
  })
})
