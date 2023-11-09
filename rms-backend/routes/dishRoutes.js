const express = require("express");
const router = express.Router();
const dishController = require("../controllers/dishController");

router.post("/dishes", dishController.createDish);
router.get("/dishes/getDishes", dishController.getDish);
router.put("/dishes/updateDish/:id", dishController.updateDish);
router.delete("/dishes/deleteDish/:id", dishController.deleteDish);

module.exports = router;
