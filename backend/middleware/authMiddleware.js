const jwt = require("jsonwebtoken");

const verifyTeacher = (token) => {
  let user;

  try {
    user = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return undefined;
  }

  const usertype = user.usertype;

  if (usertype == "Student") {
    return undefined;
  } else {
    return user;
  }
};

const verifyStudent = (token) => {
  let user;

  try {
    user = jwt.verify(token, process.env.JWT_SECRET);
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
