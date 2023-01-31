const express = require("express");
const userController = require("../Controller/clientController");
const router = express.Router();
const BaseUrl = require("../utils/BaseUrl");
const authMiddleware = require("../Middlewares/auth");

// Regisitration
router.post(`${BaseUrl.client}/user/signup`, userController.signup);

// Account login
router.post(`${BaseUrl.client}/user/login`, userController.login);

// // Reset password
// router.post(
//   `${BaseUrl.client}/user/reset-password`,
//   userController.resetPassword
// );
// // Change password
// router.put(
//   `${BaseUrl.client}/user/reset-password`,
//   userController.changePassword
// );

router.post(
  `${BaseUrl.client}/add-stock`,
  authMiddleware,
  userController.addStock
);

module.exports = router;
