const express = require('express');
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env file
const { doPayment } = require('../controller/payment.controller.js'); // Import the payment controller
const router = express.Router();

router.post('/payment', doPayment); // Define the payment route

module.exports = router;