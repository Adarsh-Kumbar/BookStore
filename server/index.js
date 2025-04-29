const express = require("express");
const dontenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
dontenv.config();
const cors = require("cors");
const bookRoute = require("./routes/book.route.js");
const userRoute = require("./routes/user.route.js");
const paymentRoute = require("./routes/payment.route.js");

app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(express.json());
const url = process.env.MONGOURL;

mongoose
  .connect(url)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.use("/book", bookRoute);

app.use("/user", userRoute);
app.use("/user", paymentRoute);
// http://localhost:3000/user/signup
// http://localhost:3000/user/login
// http://localhost:3000/user/payment

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

//http://localhost:3000/book
