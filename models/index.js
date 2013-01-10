/**
 * Mongoose models
 */

var mongoose = require('mongoose')
  , schemas = require('./schemas/cards.js')
  , app = require('../common')
  , mongodb = app.get('mongodb');

var card = mongoose.model('card', schemas.card);
mongoose.connect(mongodb.url, mongodb.db, mongodb.port);

mongoose.connection.on('error', function() {
	console.log("error");
})
  
exports.card = card;