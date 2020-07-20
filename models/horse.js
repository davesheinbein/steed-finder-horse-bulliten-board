var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const commentsSchema = new Schema(
  {
    comment: {
      type: String,
      required: true
    },
    creator: {
      type: String
    }
    // { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

var horseSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  categories: { type: String },
  breed: { type: String },
  price: { type: Number, required: true },
  location: { type: String },
  contact: { type: String, required: true },
  image: { type: String },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  comments: [commentsSchema],
}, {
  timestamps: true
});

module.exports = mongoose.model('Horse', horseSchema);
