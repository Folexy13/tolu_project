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

//Add stock
router.post(
  `${BaseUrl.client}/add-stock`,
  authMiddleware,
  userController.addStock
);

//Get all users
router.get(
  `${BaseUrl.client}/get/all-users`,
  authMiddleware,
  userController.getAllUsers
);

//Get all records
router.get(
  `${BaseUrl.client}/get/all-records`,
  authMiddleware,
  userController.getAllRecords
);

//get Recent Transactions
router.get(
  `${BaseUrl.client}/get/recent-records`,
  authMiddleware,
  userController.getRecentRecords
);
//Get all stocks
router.get(
  `${BaseUrl.client}/get/all-stocks`,
  authMiddleware,
  userController.getAllStocks
);

//Implement Search

router.get(
  `${BaseUrl.client}/search/:page`,
  authMiddleware,
  userController.searchParams
);

//Upload stock Threshold
router.post(
  `${BaseUrl.client}/update`,
  authMiddleware,
  userController.updateStock
);

//Request For Stock
router.post(
  `${BaseUrl.client}/add-request`,
  authMiddleware,
  userController.addRequest
);

module.exports = router;
