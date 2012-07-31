/**
 * Mongoose models
 */

var mongoose = require('mongoose')
  , schemas = require('./schemas/cards.js')
  , app = require('../common')
  , mongodb = app.get('mongodb');

mongoose.connect(mongodb.url, mongodb.db, mongodb.port);
var card = mongoose.model('card', schemas.card);
  
exports.card = card;