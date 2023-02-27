const signup = require("./signup");
const login = require("./login");
const addStock = require("./addStock");
const addRequest = require("./addRequest");
const getAllUsers = require("./getAllUser");
const getAllRecords = require("./getAllRecord");
const getAllStocks = require("./getAllStocks");
const searchParams = require("./stockSearch");

const userController = {
  signup,
  login,
  addStock,
  addRequest,
  getAllUsers,
  getAllRecords,
  getAllStocks,
  searchParams,
};

module.exports = userController;
