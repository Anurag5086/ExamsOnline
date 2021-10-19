const User = require("../models/User");
const bcrypt = require("bcryptjs");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const BCRYPT_SALTS = 10;

const registerUser = async (req, res) => {
  const isValid = Joi.object({
    fullname: Joi.string().required(),
    username: Joi.string().min(3).required(),
    password: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    usertype: Joi.string().required(),
  }).validate(req.body, { abortEarly: false, allowUnknown: false });

  if (isValid.error) {
    return res
      .status(201)
      .json({ message: "Input invalid", error: isValid.error.details });
  }

  const hashedPassword = await bcrypt.hash(req.body.password, BCRYPT_SALTS);

  const userObj = new User({
    fullname: req.body.fullname,
    username: req.body.username,
    password: hashedPassword,
    email: req.body.email,
    usertype: req.body.usertype,
  });

  try {
    userObj.save();
    res
      .status(200)
      .json({ status: "ok", message: "User successfully created!" });
  } catch {
    res.status(201).json({ status: "error", message: "User creation failed!" });
  }
};

const loginUser = async (req, res) => {
  const isValid = Joi.object({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(8).required(),
  }).validate(req.body, { abortEarly: false, allowUnknown: false });

  if (isValid.error) {
    return res
      .status(201)
      .json({ status: "error", message: "Invalid username/password" });
  }

  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username }).lean();

    if (!user) {
      return res
        .status(201)
        .json({ status: "error", message: "Invalid username/password" });
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        {
          id: user._id,
          username: user.username,
          usertype: user.usertype,
        },
        process.env.JWT_SECRET
      );

      return res.status(200).json({
        status: "ok",
        message: "Successfully Logged In!",
        data: token,
      });
    }

    res
      .status(201)
      .json({ status: "error", message: "Invalid username/password" });
  } catch {
    res.status(201).json({ status: "error", message: "Server Error!" });
  }
};

const changePassword = async (req, res) => {
  const isValid = Joi.object({
    token: Joi.string().required(),
    newPassword: Joi.string().min(8).required(),
  }).validate(req.body, { abortEarly: false, allowUnknown: false });

  if (isValid.error) {
    return res
      .status(201)
      .json({ status: "error", message: "Invalid password" });
  }

  const { token, newPassword } = req.body;

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);

    const _id = user.id;
    const password = await bcrypt.hash(newPassword, BCRYPT_SALTS);
    await User.updateOne({ _id }, { $set: { password } });

    res
      .status(200)
      .json({ status: "ok", message: "Password successully changed!" });
  } catch {
    res.status(201).json({ status: "error", message: "Server Error!" });
  }
};

module.exports = {
  registerUser,
  loginUser,
  changePassword,
};
