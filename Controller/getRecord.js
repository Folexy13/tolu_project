const recordModel = require("../Model/record.model");

const getRecord = async function (req, res) {
  try {
    const { recordId } = req.params;
    const recordInstance = await recordModel
      .findById({ _id: recordId })
      .populate("stockItem");
    if (recordInstance) {
      return res.send({
        status: true,
        message: "Record fetched successfully",
        payload: recordInstance,
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

module.exports = getRecord;
