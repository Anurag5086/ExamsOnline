const jwt = require("jsonwebtoken");

const verifyTeacher = async (token) => {
  let user;

  try {
    user = await jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return undefined;
  }

  const usertype = user.usertype;

  if (usertype === "Student") {
    return undefined;
  } else {
    return user;
  }
};

const verifyStudent = async (token) => {
  let user;

  try {
    user = await jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return undefined;
  }

  const usertype = user.usertype;

  if (usertype == "Teacher") {
    return undefined;
  } else {
    return user;
  }
};

module.exports = {
  verifyTeacher,
  verifyStudent,
};
