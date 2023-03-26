const recordModel = require("../Model/stock.model");
const paginate = require("../utils/paginateData");

const getAllStocks = async function (req, res) {
  try {
    const { page } = req.query;
    const allStocks = await recordModel
      .find({})
      .populate("recordItem")
      .sort({ _id: -1 });
    const result = page ? paginate(allStocks, page) : allStocks;
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
