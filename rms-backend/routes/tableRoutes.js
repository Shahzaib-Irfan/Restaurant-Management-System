const express = require("express");
const router = express.Router();
const tableController = require("../controllers/tableController");

router.post("/tables", tableController.createTable);
router.get("/tables/getTables", tableController.getTables);
router.get("/tables/getSingleTable/:id", tableController.getTable);
router.post("/tables/updateTable/:id", tableController.updateTable);
router.delete("/tables/deleteTable/:id", tableController.deleteTable);

module.exports = router;
