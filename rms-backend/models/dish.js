const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    indegrients: Array,
    type: String,
    price: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Dish", dishSchema);
