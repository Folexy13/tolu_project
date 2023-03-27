const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const thresholdSchema = new Schema({}, { timestamps: true });

const Threshold = mongoose.model("Threshold", thresholdSchema);
module.exports = Threshold;
