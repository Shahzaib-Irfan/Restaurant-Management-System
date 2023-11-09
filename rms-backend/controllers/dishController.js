const Dish = require("../models/dish");

async function createDish(req, res) {
  try {
    console.log(req.body);
    const product = await Dish.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getDish(req, res) {
  try {
    const products = await Dish.find({});
    res.send(products);
  } catch (err) {
    console.log(err);
    res.send(500).json({ error: err.message });
  }
}

async function updateDish(req, res) {
  try {
    const product = await Dish.updateOne(
      { _id: req.params["id"] },
      { price: req.body["price"] }
    );
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function deleteDish(req, res) {
  try {
    const product = await Dish.deleteOne({ _id: req.params["id"] });
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  createDish,
  getDish,
  updateDish,
  deleteDish,
};
