const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    contact: String,
    dob: Date,
    hireDate: Date,
    position: String,
    role: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", employeeSchema);
