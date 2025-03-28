const browserSync = require('browser-sync').create();
const connect = require('connect');

browserSync.init({
  server: {
    baseDir: './',
    middleware: function (req, res, next) {
      res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; script-src 'self'; style-src 'self';"
      );
      next();
    },
  },
  port: 3000,
});
