const userModel = require("../Model/clientModel");
const paginate = require("../utils/paginateData");

const getAllUSers = async function (req, res) {
  try {
    const { page } = req.query;
    const userInstance = await userModel.find({}).sort({ _id: -1 });
    const result = paginate(userInstance, page);
    if (result) {
      return res.send({
        status: true,
        message: "users fetched successfully",
        data: result,
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

module.exports = getAllUSers;
