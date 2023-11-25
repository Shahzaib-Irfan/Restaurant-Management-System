const mongoose = require("mongoose");

const userDishSchema = new mongoose.Schema(
  {
    name: String,
    userID: String,
    description: String,
    ingredients: Array,
    price: Number,
    image: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Userdish", userDishSchema);
