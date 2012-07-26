/**
 * Card description file
 * Using Mongoose schemas
 **/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

exports.card = new Schema({
  	word  : String
  , tabues : [String]
});
