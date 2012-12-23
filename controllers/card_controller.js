var mongoose = require("mongoose");

var index_action = function(req, res) {
  var models = require("../models");
  
  var cards = models.card.find({}, function(err, docs) {
  	// if (req.xhr) {
  	  res.send(JSON.stringify(docs));	
  	// } else {
  	//   res.send("Error");
  	// }
  });
 }
  
exports.index = index_action;