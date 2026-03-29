// 3
// Creating Req-Res For Business Logic
// Business logic is being used here while create req-res

const jwt = require("jsonwebtoken");
require("dotenv").config();
const { findUserByUsername } = require("../services/login.service");

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validation
    if (!username || !password) {
      return res.status(400).json({
        message: "Username and Password Required",
      });
    }

    // Fetch user from service
    const user = await findUserByUsername(username);

    // here user is an object
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // checking password like this is not good way , but for our scenario of learning and implementing it is okay 
    if (password !== user.password) {
      return res.status(401).json({
        message: "Invalid Password",
      });
    }

    // Token generation
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.MY_SECRET,
      { expiresIn: "1h" },
    );

    return res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  login,
};
