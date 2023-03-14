const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const recordSchema = new Schema(
  {
    designation: {
      type: String,
      required: true,
    },
    collectorName: {
      type: String,
      required: true,
    },
    itemDescription: {
      type: String,
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

const Record = mongoose.model("Record", recordSchema);
module.exports = Record;
