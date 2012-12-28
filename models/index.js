/**
 * Mongoose models
 */

var mongoose = require('mongoose')
  , schemas = require('./schemas/cards.js')
  , app = require('../common')
  , mongodb = app.get('mongodb');

var card = mongoose.model('card', schemas.card);
mongoose.connect("localhost", "tabu", 27017);

mongoose.connection.on('error', function() {
	console.log("error");
})
  
exports.card = card;