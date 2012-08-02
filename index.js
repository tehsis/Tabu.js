
/**
 * Module dependencies.
 */

var app = require('./common.js');
var components = require('./components');


// Creates the routes based on the defined controllers.
components.router.route();

app.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
