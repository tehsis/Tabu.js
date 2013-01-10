/**
 * This script will setup 
 * Tabu.js for the first time.
 */

var mongoose = require("mongoose");
var cards = require("./cards.js");
var schemas = require("../models/schemas/cards.js");

var common = require("../common.js")
var mongodb = common.get('mongodb');

var card = schemas.card;
var Card = mongoose.model("card", card);
var preloaded_cards = cards.cards;

mongoose.connect(mongodb.url, mongodb.db, mongodb.port);

Card.find().remove(function() {
	console.log("Elements removed.");
});

var i;
for(i = 0; i<preloaded_cards.length; i++) {
	var current = preloaded_cards[i];
	var c = new Card(current);
	c.save(function(err) {
		if (err !== null) {
		  console.log(err);	
		}

		if (i >= preloaded_cards.length-1) {
            console.log("Data inserted sucessfully.");
            process.exit();
		};
		
	}); 	
}




