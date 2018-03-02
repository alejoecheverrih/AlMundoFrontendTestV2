
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var hotelSchema = new Schema({
  id:    { type: Number },
  name:     { type: String },
  stars:  { type: Number },
  price:   { type: Number },
  image:  { type: String },
  amenities: [String]
});

module.exports = mongoose.model('Hotel', hotelSchema);