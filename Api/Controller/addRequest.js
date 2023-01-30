const requestModel = require("../Model/stock.model");
const recordModel = require("../Model/record.model");

const Request = async function (req, res) {
  try {
    const { designation, quantity, collectorName, issuerName, stockItem } =
      req.body;
    const newRequest = new requestModel({
      designation,
      quantity,
      collectorName,
      issuerName,
      stockItem,
    });
    const newRecord = new recordModel({
      designation,
      collectorName,
      stockItem,
    });
    const savedItem = await newRequest.save();
    const savedRecord = await newRecord.save();
    if (savedItem && savedRecord) {
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
