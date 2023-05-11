const recordModel = require("../Model/stock.model");
const paginate = require("../utils/paginateData");

const getAllStocks = async function (req, res) {
  try {
    const { page } = req.query;
    const stockInstance = await recordModel
      .find({})
      .populate("recordItem")
      .sort({ _id: -1 });
    const result = page? paginate(stockInstance, page): stockInstance;
    if (result) {
      return res.send({
        status: true,
        message: "Stocks fetched successfully",
        payload: result,
      });
    }
  } catch (error) {
    console.log(error);
    return res.send({
      status: false,
      message: "An error occured",
    });
  }
};

module.exports = getAllStocks;
