const express = require("express");
const router = express();
const user = require("./user");
const question = require("./question.js");

router.use("/user", user);
router.use("/question", question);

module.exports = router;
