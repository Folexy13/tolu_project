const stockModel = require("../Model/stock.model");

const Stock = async function (req, res) {
  try {
    const { location, quantity, type, size, stockName } = req.body;
    const newStock = new stockModel({
      location,
      quantity,
      type,
      size,
      stockName,
      description: `${type} * ${size} * ${stockName}`,
    });
    const savedItem = await newStock.save();
    if (savedItem) {
      return res.send({
        status: true,
        message: "Item added to database successfully",
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

module.exports = Stock;
