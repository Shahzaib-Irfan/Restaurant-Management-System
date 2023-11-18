const User = require("../models/user");
const crypto = require("crypto");
const secretKey = crypto.randomBytes(32).toString("hex");

async function createUser(req, res) {
  try {
    const user = await User.create(req.body);
    res.status(201).redirect("http://localhost:3000/itemselection/restaurants");
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

async function login(req, res) {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });

  if (user) {
    const token = jwt.sign(
      { username: user.username, id: user._id, role: user.role },
      secretKey,
      {
        expiresIn: "1h",
      }
    );
    res.json({ token, user: { username: user.username, role: user.role } });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
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
  login,
  adminDasboard,
};
