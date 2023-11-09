const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const {
  validateToken,
  requireRoles,
} = require("../utils/authorizationMiddleware");

router.post("/users", userController.createUser);
router.get("/users/getUsers", userController.getUser);
router.put("/users/updateUser/:id", userController.updateUser);
router.delete("/users/deleteUser/:id", userController.deleteUser);
//router.post("/admin", validateToken, userController.adminDasboard);

module.exports = router;
