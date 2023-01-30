const stockModel = require("../Model/stock.model");
const pagainate = require("../utils/paginateData");
const stockSearch = async function (req, res) {
  try {
    const { page } = req.params;
    const recordInstance = await stockModel.find().populate("stockItem");
    const filters = req.query;
    const filteredData = recordInstance.filter((user) => {
      let isValid = true;
      for (key in filters) {
        console.log(key, user[key], filters[key]);
        isValid = isValid && user[key] == filters[key];
      }
      return isValid;
    });
    const result = pagainate(filteredData, page);
    if (recordInstance) {
      return res.send({
        status: true,
        message: "Record fetched successfully",
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

module.exports = stockSearch;
