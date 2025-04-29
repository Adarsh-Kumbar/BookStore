const express = require("express");
const app = express();
app.use(express.json());
const stripe = require("stripe")(process.env.STRIPESECRET); // Initialize Stripe with your secret key

let doPayment = async (req, res) => {
  const { products } = req.body; // 👈 this will now correctly exist

  const lineItems = products.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: item.title,
        images: [item.image],
      },
      unit_amount: item.price * 100,
    },
    quantity: 1,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/success`,
    cancel_url: `${process.env.CLIENT_URL}/cancel`,
  });

  res.status(200).json({ id: session.id });
};

module.exports = {
  doPayment,
};
