const User = require("../models/user");
const crypto = require("crypto");
const secretKey = crypto.randomBytes(32).toString("hex");
const jwt = require("jsonwebtoken");

async function createUser(req, res) {
  try {
    let user;

    if (req.body["role"]) {
      user = await User.create(req.body);
    } else {
      user = await User.create({ ...req.body, role: "user" });
    }

    res.status(201).redirect("http://localhost:3000/login");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getUsers(req, res) {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    console.log(err);
    res.send(500).json({ error: err.message });
  }
}

async function getSingleUser(req, res) {
  try {
    const user = await User.findOne({ _id: req.params["id"] });
    res.send(user);
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

async function login(req, res) {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username, password });

    if (user) {
      const token = jwt.sign(
        { username: user.username, id: user._id, role: user.role },
        secretKey,
        {
          expiresIn: "1h",
        }
      );
      const redirect =
        user.role === "admin" ? "/managedishes" : "/itemselection/restaurants";
      res.json({
        success: true,
        token,
        user: { username: user.username, id: user._id, role: user.role },
        redirect: redirect,
      });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
async function adminDasboard(req, res) {
  res.send("Welcome to Admin Dashboard");
}

module.exports = {
  createUser,
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  login,
  adminDasboard,
};
