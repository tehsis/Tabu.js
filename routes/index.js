
/*
 * GET home page.
 */

// Card fetching. Should be moved to a different file
var controllers = require("../controllers");

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};


exports.card = controllers.card_controller.index;  