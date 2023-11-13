const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    contact: String,
    hireDate: Date,
    position: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", employeeSchema);
