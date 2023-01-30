const UserModel = require("../Model/clientModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { fullname, password, role, email, imageUrl, phone } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const secret_key = "codebreedKHklasshour";
  const findUserEmail = await UserModel.findOne({ email });
  if (findUserEmail)
    res.status(200).send({ status: false, message: "User already exist" });

  if (!findUserEmail) {
    try {
      const user = new UserModel({
        fullname,
        password: hashPassword,
        email,
        imageUrl,
        role,
        phone,
      });
      const newUser = await user.save();
      const token = jwt.sign(newUser.toJSON(), secret_key, {
        expiresIn: 604800,
      });
      if (newUser) {
        res.status(200).send({
          status: true,
          message: "Account created successfully",
          token,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = signup;
