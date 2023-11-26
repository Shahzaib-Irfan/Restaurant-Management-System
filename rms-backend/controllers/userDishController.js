const Userdish = require("../models/userDish");

async function createUserDish(req, res) {
  try {
    const file = req.file.filename;

    const { dishName, description, ingredients, price } = req.body;

    const dishData = {
      name: dishName,
      userID: req.params["userID"],
      description,
      ingredients,
      price,
      image: file,
    };

    const savedDish = await Userdish.create(dishData);

    res.status(201).redirect("http://localhost:3000/home");
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

async function getUserDishes(req, res) {
  try {
    const products = await Userdish.find({});
    res.send(products);
  } catch (err) {
    console.log(err);
    res.send(500).json({ error: err.message });
  }
}

async function getUserDish(req, res) {
  try {
    const id = req.params.id;
    const product = await Userdish.findById(id);
    res.send(product);
  } catch (err) {
    console.log(err);
    res.send(500).json({ error: err.message });
  }
}

module.exports = {
  createUserDish,
  getUserDishes,
  getUserDish,
};
