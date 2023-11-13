const Table = require("../models/table");

async function createTable(req, res) {
  try {
    const { tableNo, restaurantID, capacity } = req.body;

    const tableData = {
      tableNo: tableNo,
      restaurantID: restaurantID,
      capacity: capacity,
      reservationStatus: true,
    };

    const savedTable = await Table.create(tableData);

    res.status(201).json(savedTable);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

async function getTables(req, res) {
  try {
    const table = await Table.find({});
    res.send(table);
  } catch (err) {
    console.log(err);
    res.send(500).json({ error: err.message });
  }
}

async function getTable(req, res) {
  try {
    const id = req.params.id;
    const table = await Table.findById(id);
    res.send(table);
  } catch (err) {
    console.log(err);
    res.send(500).json({ error: err.message });
  }
}

async function updateTable(req, res) {
  try {
    const table = await Table.updateOne(
      { _id: req.params["id"] },
      {
        tableNo: req.body["tableNo"],
        restaurantID: req.body["restaurantID"],
        capacity: req.body["capacity"],
        reservationStatus: true,
      }
    );
    res.status(201).json(table);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function deleteTable(req, res) {
  try {
    const table = await Table.deleteOne({ _id: req.params["id"] });
    res.status(201).json(table);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  createTable,
  getTables,
  getTable,
  updateTable,
  deleteTable,
};
