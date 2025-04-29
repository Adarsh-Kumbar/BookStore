const User = require("../model/user.model.js");
const bcrypt = require("bcrypt");

let Signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = await User.create({
      name: name,
      email: email,
      password: hashedPassword, // hashed password stored in database  // use hashedPassword instead of password for login validation  // password should not be stored in plain text in database  // consider using environment variables for storing
    });
    createdUser.save();
    res.status(201).json(createdUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

let Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!user || !isMatch) {
      return res.status(404).json({ message: "Invalid credentials" });
    } else {
      res.status(200).json({
        message: "Login successful",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { Signup, Login };
