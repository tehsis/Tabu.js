var controllers = require('../../controllers');
var app = require('../../common.js');

/**
 * Defines automatic routes for each action
 * inside /controllers/ following the schema
 * /controller/action/param1/param2/.../paramN
 */
exports.route = function(options) {
  var i;
 
 /* 
  if (options.index !== undefined) {
  	var controller = options.index[0];
  	var action = options.index[1];
    app.get('/', controllers[controller][action]);	
  } 
  */
  
  for (controller_name in controllers) {
  	for (action_name in controllers[controller_name]) {
		var base_path = '/' + controller_name;
		var action_path = base_path + '/' + action_name;
		var action = controllers[controller_name][action_name];
		// If the action name is "index" we want
		// to use it at the default for that controller.
    	if (action_name === "index") {
    	  app.get(base_path, action);	
    	}
    	app.get(action_path, action);
	}
  }
}
