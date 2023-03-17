const stockModel = require("../Model/stock.model");

const getStock = async function (req, res) {
  try {
    const { id } = req.params;
    const stockInstance = await stockModel.findById(id).populate("stockItem");
    if (stockInstance) {
      return res.send({
        status: true,
        message: "Stock fetched successfully",
        payload: stockInstance,
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

module.exports = getStock;
