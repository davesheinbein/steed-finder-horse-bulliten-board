var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var horseSchema = new Schema({
 name: {type: String, required: true},
 band: {type: String, required: true},
 year: {type: String},
 recordType: String
},{
 timestamps: true
});

module.exports = mongoose.model('Horse', horseSchema);
