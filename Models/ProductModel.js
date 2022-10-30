const { ObjectID } = require("bson");
var mongoose = require("mongoose");

var ProductModel = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },

  Price: {
    type: Number,
    required: true,
  },

  Quantity: Number,
  ImgURL: String,
  CategoryId: ObjectID,
});

module.exports = mongoose.model("products", ProductModel, "products");
