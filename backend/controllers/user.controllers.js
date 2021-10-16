const User = require("../models/User");

const registerUser = (req, res) => {
  const { fullname, username, password, email, usertype } = req.body;

  const userObj = new User({
    fullname,
    username,
    password,
    email,
    usertype,
  });

  try {
    userObj.save();
    res.status(200).send("User created successfully!");
  } catch {
    res.send("error");
  }
};

module.exports = {
  registerUser,
};
