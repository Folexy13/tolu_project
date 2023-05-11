const stockModel = require("../Model/record.model");
const updateStock = async function (req, res) {
  try {
    const { id, field,type } = req.body;
    const updateStockLevel = await stockModel.findByIdAndUpdate(
      { _id: id },
     { { status: Number(field)  },
      { new: true }
    );
    if (updateStockLevel) {
      return res.status(200).send({
        status: true,
        message: "Update successfully",
        data: updateStockLevel,
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
