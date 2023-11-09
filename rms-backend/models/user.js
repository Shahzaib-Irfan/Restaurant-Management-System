const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    dob: Date,
    role: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
