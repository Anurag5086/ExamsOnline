const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    usertype: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = Users = mongoose.model("users", UserSchema);
