const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TestSchema = new Schema(
  {
    testId: {
      type: String,
      required: true,
      unique: true,
    },
    testsubject: {
      type: String,
      required: true,
    },
    testtitle: {
      type: String,
      required: true,
    },
    testdescription: {
      type: String,
    },
    starttime: {
      type: Date,
      required: true,
    },
    endtime: {
      type: Date,
      required: true,
    },
    createdBy: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    versionKey: false,
  }
);

module.exports = Tests = mongoose.model("tests", TestSchema);
