const Question = require("../models/Question");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const { verifyTeacher } = require("../middleware/authMiddleware");

const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    if (questions) {
      res.status(200).json({ status: "ok", data: questions });
    } else {
      res
        .status(400)
        .json({ status: "error", message: "Questions not found!" });
    }
  } catch {
    res.status(500).json({ status: "error", message: "Server error!" });
  }
};

const addQuestion = async (req, res) => {
  const isValid = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    option1: Joi.string().required(),
    option2: Joi.string().required(),
    option3: Joi.string().required(),
    option4: Joi.string().required(),
    correctOption: Joi.string().required(),
    testId: Joi.string().required(),
  }).validate(req.body, { abortEarly: false, allowUnknown: false });

  if (isValid.error) {
    return res
      .status(400)
      .json({ message: "Input invalid", error: isValid.error.details });
  }
  const token = req.headers.token;
  if (!token) {
    return res.status(403).json({
      status: "forbidden",
      message: "Please check your authentication!",
    });
  }

  const user = verifyTeacher(req, res);

  if (!user) {
    return res
      .status(400)
      .json({ status: "error", message: "User not verified!" });
  }

  const username = user.username;

  try {
    const { ...body } = req.body;

    const questionObj = new Question({
      ...body,
      createdBy: username,
    });

    questionObj.save();
    res
      .status(201)
      .json({ status: "ok", message: "Question successfully added!" });
  } catch {
    res.status(400).json({
      status: "error",
      message: "Failed to create question!",
    });
  }
};

module.exports = {
  getAllQuestions,
  addQuestion,
};
