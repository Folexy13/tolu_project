const stockModel = require("../Model/stock.model");
const pagainate = require("../utils/paginateData");
const updateStock = async function (req, res) {
  try {
    const { id, threshold } = req.body;
    const updateStockLevel = await stockModel.findByIdAndUpdate(
      { _id: id },
      { $inc: { threshold } }
    );
    if (updateStockLevel) {
      return res.status(200).send({
        status: true,
        message: "Update successfully",
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

module.exports = updateStock;
