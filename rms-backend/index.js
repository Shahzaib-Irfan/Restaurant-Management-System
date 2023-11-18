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
const employeeRoutes = require("./routes/employeeRoutes");
const orderRoutes = require("./routes/orderRoutes");
const port = 3005;
const crypto = require("crypto");
const secretKey = crypto.randomBytes(32).toString("hex");

app.use(cors());
app.use(bodyParser.json());

app.use("/dishApi", dishRoutes);
app.use("/userApi", userRoutes);
app.use("/restaurantApi", restaurantRoutes);
app.use("/tableApi", tableRoutes);
app.use("/employeeApi", employeeRoutes);
app.use("/orderApi", orderRoutes);
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

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });

  if (user) {
    const token = jwt.sign(
      { username: user.username, id: user._id, role: user.role },
      secretKey,
      {
        expiresIn: "1h",
      }
    );
    res.json({ token, user: { username: user.username, role: user.role } });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
