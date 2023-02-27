const stockModel = require("../Model/stock.model");

const Stock = async function (req, res) {
  try {
    const { location, quantity, type, size, stockName, threshold } = req.body;
    const newStock = new stockModel({
      location,
      quantity,
      type,
      size,
      stockName,
      threshold,
      description:
        size && type
          ? `${size} x ${type} x ${stockName}`
          : size && !type
          ? `${size} x ${stockName}`
          : !size && type
          ? `${type} x ${stockName}`
          : `${stockName}`,
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
