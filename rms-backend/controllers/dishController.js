const Dish = require("../models/dish");
const DishService = require("../services/dishService");
const { handleFileUpload } = require("../services/fileService");

async function createDish(req, res) {
  try {
    const file = req.file.filename;

    const {
      dishName,
      restaurantID,
      description,
      ingredients,
      dishType,
      price,
    } = req.body;

    const dishData = {
      name: dishName,
      restaurantID: restaurantID,
      description,
      ingredients,
      type: dishType,
      price,
      image: file,
    };

    const savedDish = await Dish.create(dishData);

    res.status(201).redirect("http://localhost:3000/managedishes");
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

async function getDishes(req, res) {
  try {
    const products = await Dish.find({});
    res.send(products);
  } catch (err) {
    console.log(err);
    res.send(500).json({ error: err.message });
  }
}

async function getDishesByRID(req, res) {
  try {
    const products = await Dish.find({ restaurantID: req.params["id"] });
    res.send(products);
  } catch (err) {
    console.log(err);
    res.send(500).json({ error: err.message });
  }
}

async function getDish(req, res) {
  try {
    const id = req.params.id;
    const product = await Dish.findById(id);
    res.send(product);
  } catch (err) {
    console.log(err);
    res.send(500).json({ error: err.message });
  }
}

async function updateDish(req, res) {
  try {
    const file = req.file.filename;
    console, log(req);
    const product = await Dish.updateOne(
      { _id: req.params["id"] },
      {
        name: req.body["dishName"],
        description: req.body["description"],
        type: req.body["dishType"],
        ingredients: req.body["ingredients"],
        price: req.body["price"],
        image: file,
      }
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
  getDishes,
  getDishesByRID,
  getDish,
  updateDish,
  deleteDish,
};
