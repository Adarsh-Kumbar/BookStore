const express = require("express");
const { Signup, Login } = require("../controller/user.controller.js");

const router = express.Router();

router.post("/signup", Signup); // POST request to create a new user
router.post("/login", Login);

module.exports = router;
