var mongoose = require("mongoose");

var CategoryModel = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("category", CategoryModel, "category");
