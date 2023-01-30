const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const requestSchema = new Schema(
  {
    designation: {
      type: String,
      required: true,
    },
    collectorName: {
      type: String,
      required: true,
    },
    // itemDescription: {
    //   type: String,
    //   required: true,
    // },
    quantity: {
      type: Number,
      required: true,
    },
    issuerName: {
      type: String,
    },
    stockItem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Stock",
    },
  },
  { timestamps: true }
);

const Request = mongoose.model("Request", requestSchema);
module.exports = Request;
