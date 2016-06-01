import http from 'http';
import express from 'express';
import morganModule from 'morgan';
import debug from 'debug';

const morgan = morganModule('short');
const app = express();
const env = process.env.NODE_ENV || 'development';

app.use(morgan);

if (env === 'production') {
  // must be set programmaticaly for windows
  debug.enable('express');
} else if (env === 'development') {
  // set debug env, must be programmaticaly for windows
  debug.enable('dev,express');
}

(function initWebpack() {
  var webpack = require('webpack');
  var webpackConfig = require('../webpack/webpack.config');
  var compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
  }));
})();

app.get('/', function root(req, res) {
  res.sendFile(__dirname + '/index.html');
});

var server = http.createServer(app);
server.listen(process.env.PORT || 3000, function onListen() {
  var address = server.address();
  debug('express')(`Webserver running in ENV=${ env }, on: ${ address }`);
});
