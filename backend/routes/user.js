const express = require("express");
const { registerUser } = require("../controllers/user.controllers");
const router = express();

router.post("/register", registerUser);

module.exports = router;
