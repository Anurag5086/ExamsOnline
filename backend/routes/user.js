const express = require("express");
const {
  registerUser,
  loginUser,
  changePassword,
} = require("../controllers/user.controllers");
const router = express();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/changepassword", changePassword);

module.exports = router;
