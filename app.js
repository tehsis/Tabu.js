
/**
 * Module dependencies.
 */

var app = require('./common.js');

app.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
