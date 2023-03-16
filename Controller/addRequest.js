const requestModel = require("../Model/request.model");
const recordModel = require("../Model/record.model");
const stockModel = require("../Model/stock.model");

const Request = async function (req, res) {
  try {
    const {
      designation,
      quantity,
      collectorName,
      issuerName,
      itemDescription,
      stockItem,
    } = req.body;
    const isStockUpdated = await stockModel.findByIdAndUpdate(stockItem, {
      $inc: { quantity: -quantity },
    });
    const newRequest = new requestModel({
      designation,
      quantity,
      collectorName,
      issuerName,
      itemDescription,
      stockItem,
    });
    const newRecord = new recordModel({
      designation,
      collectorName,
      itemDescription,
      stockItem,
      status: "Pending",
    });
    const savedItem = await newRequest.save();
    const savedRecord = await newRecord.save();
    if (savedItem && savedRecord && isStockUpdated) {
      return res.send({
        status: true,
        message: "Request made successfully",
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

module.exports = Request;
