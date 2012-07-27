var express = require('express')
  , routes = require('./routes')
  , http = require('http');
  
var app = module.exports = express.createServer();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(require('less-middleware')({ src: __dirname + '/public' }));
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){ 
  app.use(express.logger());
  app.use(express.errorHandler());
  app.set('mongodb', {
    url  : "localhost",
    port : "27017",
    db   : "tabu"
  })
});

app.get('/', routes.index);
app.get('/card', routes.card);