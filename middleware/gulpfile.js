const browserSync = require('browser-sync').create();
const connect = require('connect');

browserSync.init({
  server: {
    baseDir: './',
    middleware: function (req, res, next) {
      res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' 'sha256-8tnX66uZPQc/x0xPMSjbDfJFOh1ys5rYCZOAvT44Ml0=';"
      );
      next();
    },
  },
  port: 3000,
});
