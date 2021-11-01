const express = require("express");
const { createTest } = require("../controllers/test.controller");
const router = express();

router.post("/createtest", createTest);
//get test
//notice routes

module.exports = router;
