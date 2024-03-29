const signup = require("./signup");
const login = require("./login");
const addStock = require("./addStock");
const addRequest = require("./addRequest");
const getAllUsers = require("./getAllUser");
const getAllRecords = require("./getAllRecord");
const getAllStocks = require("./getAllStocks");
const getStock = require("./getStock");
const getRecentRecords = require("./getRecentRecords");
const searchParams = require("./stockSearch");
const updateStock = require("./updateThreshold");
const updatedUser = require('./updateUserAccount')
const updateTransaction = require('./updateTransaction');
const CheckInventory = require("./Inventory");

const userController = {
  signup,
  login,
  addStock,
  addRequest,
  getAllUsers,
  getAllRecords,
  getRecentRecords,
  getAllStocks,
  getStock,
  updateStock,
  searchParams,
  CheckInventory,
  updateTransaction,
  updatedUser
};

module.exports = userController;
