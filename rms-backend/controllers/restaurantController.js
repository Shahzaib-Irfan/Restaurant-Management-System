const Restaurant = require("../models/restaurant");

async function createRestaurant(req, res) {
  try {
    const file = req.file.filename;

    const { restaurantName, address, contactInformation } = req.body;

    const restaurantData = {
      name: restaurantName,
      address,
      contact: contactInformation,
      image: file,
    };

    const savedRestaurant = await Restaurant.create(restaurantData);

    res.status(201).json(savedRestaurant);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

async function getRestaurants(req, res) {
  try {
    const restaurant = await Restaurant.find({});
    res.send(restaurant);
  } catch (err) {
    console.log(err);
    res.send(500).json({ error: err.message });
  }
}

async function getRestaurant(req, res) {
  try {
    const id = req.params.id;
    const restaurant = await Restaurant.findById(id);
    res.send(restaurant);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function updateRestaurant(req, res) {
  try {
    const file = req.file.filename;
    const restaurant = await Restaurant.updateOne(
      { _id: req.params["id"] },
      {
        name: req.body["dishName"],
        address: req.body["address"],
        contact: req.body["contactInformation"],
        image: file,
      }
    );
    res.status(201).json(restaurant);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function deleteRestaurant(req, res) {
  try {
    const restaurant = await Restaurant.deleteOne({ _id: req.params["id"] });
    res.status(201).json(restaurant);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  createRestaurant,
  getRestaurants,
  getRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
