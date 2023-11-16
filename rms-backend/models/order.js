const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userID: String,
    restaurantID: String,
    orderDate: Date,
    totalAmount: Number,
    status: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
