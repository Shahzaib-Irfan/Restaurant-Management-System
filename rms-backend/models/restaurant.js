const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    name: String,
    address: String,
    contact: String,
    image: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Restaurant", restaurantSchema);
