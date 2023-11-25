const express = require("express");
const router = express.Router();
const Order = require("./models/order");
const stripe = require("stripe")(
  "sk_test_51NdYl1BYQ4BHBkBzagwXHqFWzpPHzzotKdSE7KIZILc0IrfNgCGLrLnMBtvAQtbPaB6r5bkiUImTtcLNbJQr1Xhw008Jca4LL1"
);

router.post("/pay", async (req, res) => {
  try {
    let totalBill = 0;
    for (let i of req.body.body["cart"]) {
      totalBill += i.dish.price * i.amount;

      const orderData = {
        userID: req.body.body["user"],
        dishID: i.id,
        restaurantID: i.restaurant._id,
        orderDate: Date.now(),
        totalAmount: i.dish.price * i.amount,
        status: true,
      };

      const savedOrder = await Order.create(orderData);
    }
    let SessionId = "";
    async function checkout(dish, totalAmount) {
      const unitAmount = 100 * Number(totalAmount + 300);

      let orderName = "";
      if (dish.length == 1) {
        orderName = dish[0].dish.name;
      } else {
        orderName = `${dish[0].dish.name} and Others`;
      }
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "pkr",
              product_data: {
                name: String(orderName),
                images: [`http://localhost:3005/images/${dish[0].image}`],
              },
              unit_amount: unitAmount,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `http://localhost:3000/itemselection/restaurants`,
        cancel_url: "http://localhost:3000/itemselection/restaurants",
      });
      SessionId = session.id;
      return session.url;
    }
    const url = await checkout(req.body.body["cart"], totalBill);
    res.send({ url: url });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred");
  }
});

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const Order = require("./models/order");
// const stripe = require("stripe")(
//   "sk_test_51NdYl1BYQ4BHBkBzagwXHqFWzpPHzzotKdSE7KIZILc0IrfNgCGLrLnMBtvAQtbPaB6r5bkiUImTtcLNbJQr1Xhw008Jca4LL1"
// );

// router.post("/pay", async (req, res) => {
//   try {
//     let totalBill = 0;
//     const lineItems = [];

//     for (let i of req.body.body["cart"]) {
//       totalBill += i.dish.price * i.amount;

//       const orderData = {
//         userID: req.body.body["user"],
//         dishID: i.id,
//         restaurantID: i.restaurant._id,
//         orderDate: Date.now(),
//         totalAmount: i.dish.price * i.amount,
//         status: true,
//       };

//       const savedOrder = await Order.create(orderData);

//       // Add line item for each dish in the cart
//       lineItems.push({
//         price_data: {
//           currency: "pkr",
//           product_data: {
//             name: i.dish.name,
//             images: [`http://localhost:3005/images/${i.dish.image}`],
//           },
//           unit_amount: i.dish.price * 100, // Amount in cents
//         },
//         quantity: i.amount,
//       });
//     }

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: lineItems,
//       mode: "payment",
//       success_url: "http://localhost:3000/itemselection/restaurants",
//       cancel_url: "http://localhost:3000/itemselection/restaurants",
//     });

//     console.log("Session URL:", session.url);

//     // Use a conditional statement to check if the session was created successfully
//     if (session) {
//       res.redirect(session.url);
//     } else {
//       throw new Error("Stripe session could not be created");
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).send("An error occurred");
//   }
// });

// module.exports = router;
