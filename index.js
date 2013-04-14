
//Module dependencies.
var app = require('./common.js');
var controllers = require('./controllers');

// Routes
app.get("/manifest/tabu.appcache", function(req, res, next) {
	res.header("Content-Type", "text/cache-manifest");
	next();
})

app.get("/manifest/tabu.webapp", function(req, res, next) {
	res.header("Content-Type", "application/x-web-app-manifest+json");
	next();
});

app.use("/", controllers.tabu.index); 

// JSON Responses

app.listen(app.get('port'), function(){
  console.log("Tabu server listening on port " + app.get('port'));
});
