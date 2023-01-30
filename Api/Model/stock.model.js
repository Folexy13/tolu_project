const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const stockSchema = new Schema(
  {
    // designation: {
    //   type: String,
    //   required: true,
    // },
    location: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    stockName: {
      type: String,
      required: true,
    },
    type: { type: String, required: true },
    size: { type: String, required: true },
    description: {
      type: String,
      required: true,
    },
    recordItem: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Record",
      },
    ],
  },
  { timestamps: true }
);

const Stock = mongoose.model("Stock", stockSchema);
module.exports = Stock;
