const StockModel = require("../Model/stock.model");

const CheckInventory = async () => {
  try {
    const stocks = await StockModel.find();
    const outOfThreshold = stocks.every(
      (product) => product.threshold > product.quantity
    );
    return outOfThreshold;
  } catch (error) {
    console.log(error);
  }
};
module.exports = CheckInventory;
