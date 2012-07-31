var controllers = require('../../controllers');
var app = require('../../common.js');

exports.route = function() {
  var i;
  for (controller_name in controllers) {
  	for (action_name in controllers[controller_name]) {
		var base_path = '/' + controller_name;
		var action_path = base_path + '/' + action_name;
		var action = controllers[controller_name][action_name];
    	if (action === "index") {
    	  app.get(base_path, action);	
    	}
    	app.get(action_path, action);
	}
  }
}
