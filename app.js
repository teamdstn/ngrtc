
/**
 * Module dependencies.
 */
require("cf-autoconfig");
var express = require('express')
  , path    = require('path')
  , http    = require('http')
  , routes  = require('./routes')
  //, socket  = require('./routes/socket')
  //, api     = require('./routes/api')
;//____


var app     = module.exports = express()
  , server  = require('http').createServer(app)
  //, io      = require('socket.io').listen(server)
;//____

// Configuration
app.configure(function(){
  app.set('port', process.env.VCAP_APP_PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');

  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
  app.use(app.router);

});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Routes
app.get('/', routes.index);
app.get('*', routes.index);

server.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});


