var mongoose = require("mongoose");

var index_action = function(req, res) {
  var models = require("../models");
  var cards = models.card.findOne({}, function(err, doc) {
  	res.send(JSON.stringify(doc));	
  });
 }
  
exports.index = index_action;