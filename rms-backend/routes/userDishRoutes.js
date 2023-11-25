const express = require("express");
const router = express.Router();
const { handleFileUpload } = require("../services/fileService");
const userDishController = require("../controllers/userDishController");
const upload = require("../utils/uploadMiddleware");

router.post(
  "/makeyourowndish/:userID",
  upload.single("image"),
  userDishController.createUserDish
);
router.get("/userdishes/getDishes", userDishController.getUserDishes);
router.get("/userdishes/getSingleDish/:id", userDishController.getUserDish);

module.exports = router;
