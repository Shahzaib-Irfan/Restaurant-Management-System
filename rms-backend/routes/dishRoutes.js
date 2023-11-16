const express = require("express");
const router = express.Router();
const { handleFileUpload } = require("../services/fileService");
const dishController = require("../controllers/dishController");
const upload = require("../utils/uploadMiddleware");

router.post("/dishes", upload.single("image"), dishController.createDish);
router.get("/dishes/getDishes", dishController.getDishes);
router.get("/dishes/getDishesByRID/:id", dishController.getDishesByRID);
router.get("/dishes/getSingleDish/:id", dishController.getDish);
router.post(
  "/dishes/updateDish/:id",
  upload.single("image"),
  dishController.updateDish
);
router.delete("/dishes/deleteDish/:id", dishController.deleteDish);

module.exports = router;
