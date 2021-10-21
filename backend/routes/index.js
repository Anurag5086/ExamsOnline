const express = require("express");
const router = express();
const user = require("./user");
const question = require("./question.js");
const test = require("./test");

router.use("/user", user);
router.use("/question", question);
router.use("/test", test);

module.exports = router;
