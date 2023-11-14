const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

router.post("/employees", employeeController.createEmployee);
router.get("/employees/getEmployees", employeeController.getEmployees);
router.get("/employees/getSingleEmployee/:id", employeeController.getEmployee);
router.post("/employees/updateEmployee/:id", employeeController.updateEmployee);
router.delete(
  "/employees/deleteEmployee/:id",
  employeeController.deleteEmployee
);

module.exports = router;
