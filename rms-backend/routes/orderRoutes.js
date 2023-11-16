const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.post("/orders", orderController.createOrder);
router.get("/orders/getOrders", orderController.getOrders);
router.get("/orders/getSingleOrder/:id", orderController.getOrder);
router.post("/orders/updateOrder/:id", orderController.updateOrder);
router.delete("/orders/deleteOrder/:id", orderController.deleteOrder);

module.exports = router;
