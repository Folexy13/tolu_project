const signup = require("./signup");
const login = require("./login");
const addStock = require("./addStock");
const addRequest = require("./addRequest");

const userController = {
  signup,
  login,
  addStock,
  addRequest,
};

module.exports = userController;
