const recordModel = require("../Model/record.model");
const paginate = require("../utils/paginateData");

const getAllRecord = async function (req, res) {
  try {
    const { page } = req.query;
    const recordInstance = await recordModel
      .find({})
      .populate("stockItem")
      .sort({ _id: -1 });
    const result = page ? paginate(recordInstance, page) : recordInstance;
    if (result) {
      return res.send({
        status: true,
        message: "Records fetched successfully",
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

module.exports = getAllRecord;
