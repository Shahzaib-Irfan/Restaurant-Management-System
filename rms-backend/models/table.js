const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema(
  {
    tableNo: String,
    restaurantID: String,
    capacity: Number,
    reservationStatus: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Table", tableSchema);
