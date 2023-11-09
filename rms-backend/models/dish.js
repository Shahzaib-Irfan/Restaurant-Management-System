const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    ingredients: Array,
    type: String,
    price: Number,
    image: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Dish", dishSchema);
