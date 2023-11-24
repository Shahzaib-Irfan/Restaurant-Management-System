const Employee = require("../models/employee");
const User = require("../models/user");

async function createEmployee(req, res) {
  try {
    const userData = {
      username: req.body["username"],
      password: req.body["password"],
      firstName: req.body["firstName"],
      lastName: req.body["lastName"],
      email: req.body["email"],
      dob: req.body["dob"],
      role: req.body["role"],
    };
    const user = await User.create(userData);
    const employee = await Employee.create(req.body);
    res.status(201).redirect("http://localhost:3005//manageemployees");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getEmployees(req, res) {
  try {
    const employees = await Employee.find({});
    res.send(employees);
  } catch (err) {
    console.log(err);
    res.send(500).json({ error: err.message });
  }
}

async function getEmployee(req, res) {
  try {
    const id = req.params.id;
    const employee = await Employee.findById(id);
    res.send(employee);
  } catch (err) {
    console.log(err);
    res.send(500).json({ error: err.message });
  }
}

async function updateEmployee(req, res) {
  try {
    const userData = {
      username: req.body["username"],
      password: req.body["password"],
      firstName: req.body["firstName"],
      lastName: req.body["lastName"],
      email: req.body["email"],
      dob: req.body["dob"],
      role: req.body["role"],
    };
    const user = await User.updateOne(
      { username: userData.username, password: userData.password },
      userData
    );
    const employee = await Employee.updateOne(
      { _id: req.params["id"] },
      req.body
    );
    res.status(201).json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function deleteEmployee(req, res) {
  try {
    const employee = await Employee.deleteOne({ _id: req.params["id"] });
    res.status(201).json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  createEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
};
