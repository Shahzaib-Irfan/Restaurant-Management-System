const Dish = require("../models/dish");
const DishService = require("../services/dishService");
const { handleFileUpload } = require("../services/fileService");

async function createDish(req, res) {
  try {
    const file = req.file.filename;

    const { dishName, description, ingredients, dishType, price } = req.body;

    const dishData = {
      name: dishName,
      description,
      ingredients,
      type: dishType,
      price,
      image: file,
    };

    const savedDish = await Dish.create(dishData);

    res.status(201).json(savedDish);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

async function getDish(req, res) {
  try {
    console.log("HHHHH");
    const products = await Dish.find({});
    console.log(products);
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
