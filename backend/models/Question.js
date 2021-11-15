const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    option1: {
      type: String,
      required: true,
    },
    option2: {
      type: String,
      required: true,
    },
    option3: {
      type: String,
      required: true,
    },
    option4: {
      type: String,
      required: true,
    },
    correctOption: {
      type: String,
      required: true,
    },
    testId: {
      type: String,
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

module.exports = Questions = mongoose.model("questions", QuestionSchema);
