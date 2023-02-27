const stockModel = require("../Model/stock.model");
const pagainate = require("../utils/paginateData");
const stockSearch = async function (req, res) {
  try {
    const { page } = req.params;
    const { stockName } = req.query;
    const recordInstance = await stockModel.find({
      $text: { $search: stockName },
    });
    const result = pagainate(recordInstance, page);
    if (recordInstance) {
      return res.status(200).send(result);
    }
  } catch (error) {
    console.log(error);
    return res.send({
      status: false,
      message: "An error occured",
    });
  }
};

module.exports = stockSearch;
