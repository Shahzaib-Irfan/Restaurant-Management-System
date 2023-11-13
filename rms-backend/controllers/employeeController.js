const Employee = require("../models/employee");

async function createEmployee(req, res) {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getEmployee(req, res) {
  try {
    const employees = await Employee.find({});
    res.send(employees);
  } catch (err) {
    console.log(err);
    res.send(500).json({ error: err.message });
  }
}

async function updateEmployee(req, res) {
  try {
    console.log(req.params["id"]);
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
  getEmployee,
  updateEmployee,
  deleteEmployee,
};
