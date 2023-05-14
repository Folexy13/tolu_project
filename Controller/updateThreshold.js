const stockModel = require("../Model/stock.model");
const axios = require('axios')
const pagainate = require("../utils/paginateData");
const updateStock = async function (req, res) {
  try {
    const { id, field,type } = req.body;
    const updateStockLevel = await stockModel.findByIdAndUpdate(
      { _id: id },
      {$inc:{ quantity: Number(field) }} ,
      { new: true }
    );
    console.log(updateStockLevel)
    if (updateStockLevel) {
      axios.post('https://tolu-api.onrender.com/api/v1/webhook',{}).then(res=>{
         return res.status(200).send({
        status: true,
        message: "Update successfully",
        data: updateStockLevel,
      });
      }
        )
     
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
