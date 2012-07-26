
/*
 * GET home page.
 */

// Card fetching. Should be moved to a different file
var mongoose = require("mongoose");

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};


exports.card = function(req, res) {
  var models = require("../models");
  var cards = models.card.findOne({}, function(err, doc) {
    res.render('card', {
  	  title : "Tabu",
      card: doc 
    });
 });
}