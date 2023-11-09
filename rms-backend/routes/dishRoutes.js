const express = require("express");
const router = express.Router();
const { handleFileUpload } = require("../services/fileService");
const dishController = require("../controllers/dishController");
const upload = require("../utils/uploadMiddleware");

router.post("/dishes", upload.single("image"), dishController.createDish);
router.get("/dishes/getDishes", dishController.getDish);
router.put("/dishes/updateDish/:id", dishController.updateDish);
router.delete("/dishes/deleteDish/:id", dishController.deleteDish);

module.exports = router;
