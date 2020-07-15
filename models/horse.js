var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var horseSchema = new Schema({
 name: {type: String, required: true},
 age: {type: Number, required: true},
 Catergories: {type: String, required: true},
 breed: {type: String},
 price: {type: Number, required: true},
 location: {type: String},
 Contact: {type: String, required: true},
 image: {type: String},
 user: {type: OnjectId},
},{
 timestamps: true
});

module.exports = mongoose.model('Horse', horseSchema);
