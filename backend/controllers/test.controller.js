const Test = require("../models/Test");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const createTest = async (req, res) => {
  const isValid = Joi.object({
    testdescription: Joi.string(),
    starttime: Joi.date().required(),
    endtime: Joi.date().required(),
    testtitle: Joi.string().required(),
    testId: Joi.string().required(),
    subject: Joi.string().required(),
  }).validate(req.body, { abortEarly: false, allowUnknown: false });

  if (isValid.error) {
    return res
      .status(400)
      .json({ message: "Input invalid", error: isValid.error.details });
  }

  const { token } = req.headers;
  const user = jwt.verify(token, process.env.JWT_SECRET);
  const { ...body } = req.body;

  const username = user.username;
  const usertype = user.usertype;

  if (usertype == "Student") {
    return res.status(403).json({
      status: "forbidden",
      message: "You are not allowed to perform this action!",
    });
  }

  const testObj = new Test({
    ...body,
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

module.exports = {
  createTest,
};
