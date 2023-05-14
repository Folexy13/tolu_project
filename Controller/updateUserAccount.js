const UserModel = require("../Model/clientModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const updateUserDetails = async (req, res) => {
  const { fullname, password, email, imageUrl, phone } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const secret_key = "codebreedKHklasshour";
  const userId = req.params.userId;
  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      res.status(502).send({ status: false, message: "User not found" });
      return;
    }
    user.fullname = fullname || user.fullname;
    user.password = hashPassword || user.password;
    user.email = email || user.email;
    user.imageUrl = imageUrl || user.imageUrl;
    user.phone = phone || user.phone;
    const updatedUser = await user.save();
    const token = jwt.sign(updatedUser.toJSON(), secret_key, {
      expiresIn: 604800,
    });
    res.status(200).send({
      status: true,
      message: "User details updated successfully",
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: false, message: "Server Error" });
  }
};

module.exports = updateUserDetails;
