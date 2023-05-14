const User = require("../Model/clientModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secret_key = "codebreedKHklasshour";

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
   const user = await User.findOne({ email: email }).select('-password')

    if (!user) {
      return res
        .status(200)
        .send({ status: false, message: "User not found!" });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res
        .status(200)
        .send({ status: false, message: "Invalid credentials!" });
    }

    if (user) {
      res.status(200).send({
        status: true,
        message: "Login successful",
        user,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ status: false, message: "Server error" });
  }
};

module.exports = login;
