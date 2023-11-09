const User = require("../models/user");

async function createUser(req, res) {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getUser(req, res) {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    console.log(err);
    res.send(500).json({ error: err.message });
  }
}

async function updateUser(req, res) {
  try {
    console.log(req.params["id"]);
    const user = await User.updateOne({ _id: req.params["id"] }, req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function deleteUser(req, res) {
  try {
    const user = await User.deleteOne({ _id: req.params["id"] });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function adminDasboard(req, res) {
  res.send("Welcome to Admin Dashboard");
}

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  adminDasboard,
};
