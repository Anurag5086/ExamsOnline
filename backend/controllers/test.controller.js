const Test = require("../models/Test");
const Joi = require("joi");
const {
  verifyTeacher,
  verifyStudent,
} = require("../middleware/authMiddleware");

const createTest = async (req, res) => {
  const isValid = Joi.object({
    testdescription: Joi.string(),
    starttime: Joi.date().required(),
    endtime: Joi.date().required(),
    testtitle: Joi.string().required(),
    testsubject: Joi.string().required(),
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

  const user = verifyTeacher(token);

  if (!user) {
    return res
      .status(400)
      .json({ status: "error", message: "User not verified!" });
  }

  const { ...body } = req.body;
  const username = user.username;
  const testId = `${req.body.testtitle}-8`;
  const testObj = new Test({
    ...body,
    testId: testId,
    createdBy: username,
  });

  try {
    await testObj.save();
    res
      .status(201)
      .json({ status: "ok", message: "Test successfully created!" });
  } catch (error) {
    res.status(500).json({ status: "error", message: error });
  }
};

const getAllTests = async (req, res) => {
  try {
    const tests = await Test.find();
    if (tests) {
      res.status(200).json({ status: "ok", tests });
    } else {
      res.status(400).json({ status: "error", message: "Tests not found!" });
    }
  } catch {
    res.status(500).json({ status: "error", message: "Server error!" });
  }
};

module.exports = {
  createTest,
  getAllTests,
};
