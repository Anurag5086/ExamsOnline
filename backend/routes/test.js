const express = require("express");
const { createTest, getAllTests } = require("../controllers/test.controller");
const router = express();

router.post("/createtest", createTest);
router.get("/gettests", getAllTests);

module.exports = router;
