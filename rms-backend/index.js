const express = require("express");
const bodyParser = require("body-parser");
require("./utils/db");
const app = express();
const {
  validateToken,
  requireRoles,
} = require("./utils/authorizationMiddleware");

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
const cors = require("cors");
const dishRoutes = require("./routes/dishRoutes");
const userRoutes = require("./routes/userRoutes");
const restaurantRoutes = require("./routes/restaurantRoutes");
const tableRoutes = require("./routes/tableRoutes");
// const loginRoutes = require("./routes/loginRoutes");
const port = 3005;

app.use(cors());
app.use(bodyParser.json());

app.use("/dishApi", dishRoutes);
app.use("/userApi", userRoutes);
app.use("/restaurantApi", restaurantRoutes);
app.use("/tableApi", tableRoutes);
// app.use("/purchaseHistoryApi", purchaseRoutes);
// app.use("/loginApi", loginRoutes);
app.get("/", (req, res) => {
  res.send("Hello World");
});

// app.get(
//   "/shared",
//   validateToken,
//   requireRoles(["Admin", "User"]),
//   (req, res) => {
//     res.json({ message: "Shared endpoint" });
//   }
// );
app.get("/Welcome", (req, res) => {
  res.send("Shahzaib Irfan Hello g");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
