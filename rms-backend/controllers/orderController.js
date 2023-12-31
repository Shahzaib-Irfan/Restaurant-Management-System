const Order = require("../models/order");

async function createOrder(req, res) {
  try {
    const { userID, dishID, restaurantID, orderDate, totalAmount, status } =
      req.body;

    const orderData = {
      userID,
      dishID,
      restaurantID,
      orderDate,
      totalAmount,
      status,
    };

    const savedOrder = await Order.create(orderData);

    res.status(201).json(savedOrder);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

async function getOrders(req, res) {
  try {
    const order = await Order.find({});
    res.send(order);
  } catch (err) {
    console.log(err);
    res.send(500).json({ error: err.message });
  }
}

async function getOrder(req, res) {
  try {
    const id = req.params.id;
    const order = await Order.findById(id);
    res.send(order);
  } catch (err) {
    console.log(err);
    res.send(500).json({ error: err.message });
  }
}

async function getUserOrders(req, res) {
  try {
    const orders = await Order.find({ userID: req.params["id"] });
    res.send(orders);
  } catch (err) {
    console.log(err);
    res.send(500).json({ error: err.message });
  }
}

async function updateOrder(req, res) {
  try {
    const order = await Order.updateOne(
      { _id: req.params["id"] },
      {
        userID: req.body["userID"],
        dishID: req.body["dishID"],
        restaurantID: req.body["restaurantID"],
        orderDate: req.body["orderDate"],
        totalAmount: req.body["totalAmount"],
        status: req.body["status"],
      }
    );
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function deleteOrder(req, res) {
  try {
    const order = await Order.deleteOne({ _id: req.params["id"] });
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  createOrder,
  getOrders,
  getOrder,
  getUserOrders,
  updateOrder,
  deleteOrder,
};
