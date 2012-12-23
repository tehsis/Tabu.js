
/**
 * Module dependencies.
 */

var app = require('./common.js');
var components = require('./components');


// Creates the routes based on the defined controllers.
components.router.route({
	index: ["game", "index"]
});

app.listen(app.get('port'), function(){
  console.log("Tabu server listening on port " + app.get('port'));
});
