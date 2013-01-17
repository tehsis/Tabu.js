var mongoose = require("mongoose");

var index_action = function(req, res) {
	var models = require("../models");
  
  var cards = models.card.find({}, function(err, docs) {
  	  res.send(JSON.stringify(docs));	
  });

 }
  
exports.index = index_action;