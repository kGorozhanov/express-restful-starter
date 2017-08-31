'use strict';

let config = require('./config.json');

var cluster = require('cluster');
let express = require('express');
let http = require('http');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {

  console.log('Clustering: I will start ' + numCPUs + ' workers...');

  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('online', function(worker) {
    console.log('Worker ' + worker.process.pid + ' is online now!');
  });

  cluster.on('exit', function(worker, code, signal) {
    console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
    console.log('Starting a new worker');

    cluster.fork();
  });

} else {
  let PORT = process.env.PORT || config.port || 3000;

  let appRoutes = require('./app/routes');
  let app = express();

  let server = http.createServer(app);

  /* MIDDLEWARE */
  require('./app/config/middleware')(app, express);

  /* ROUTES */
  appRoutes.forEach(route => {
    app.use('/api' + route.path, route.middleware, route.handler);
  });

  /* ERRORS */
  app.use(function(req, res, next) {
    res.status(404);

    res.json({
      error: 'Not found'
    });
  });

  app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      return res.status(401).json({
        error: 'Please send a valid Token...'
      });
    }
    next();
  });

  app.use(function(err, req, res, next) {
    res.status(err.status || 500);

    res.json({
      error: err.message
    });
  });

  /* START SERVER */
  server.listen(PORT);
  console.log('Server ' + config.name + ' is running in process ' + process.pid + ' started on 127.0.0.1:' + PORT + '\n');
}
