const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurantController");
const upload = require("../utils/uploadMiddleware");

router.post(
  "/restaurants",
  upload.single("image"),
  restaurantController.createRestaurant
);
router.get("/restaurants/getRestaurants", restaurantController.getRestaurants);
router.get(
  "/restaurants/getSingleRestaurant/:id",
  restaurantController.getRestaurant
);
router.post(
  "/restaurants/updateRestaurant/:id",
  upload.single("image"),
  restaurantController.updateRestaurant
);
router.delete(
  "/restaurants/deleterestaurant/:id",
  restaurantController.deleteRestaurant
);

module.exports = router;
