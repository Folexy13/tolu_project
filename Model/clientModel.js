const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    imageUrl: {
      type: String,
      // required: true,
    },
    password: {
      type: String,
      required: true,
    },
    signature: {
      type: String,
      // required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["maintenance_supervisor", "store_manager", "production_manager"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
