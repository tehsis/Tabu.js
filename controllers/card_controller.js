var mongoose = require("mongoose");

var card_controller = function(req, res) {
  var models = require("../models");
  var cards = models.card.findOne({}, function(err, doc) {
    res.render('card', 
      {
  	    title : "Tabu",
        card: doc 
      }
    );
  });
 }
  
exports.controller = card_controller;