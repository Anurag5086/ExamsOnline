const express = require("express");
const {
  getAllQuestions,
  addQuestion,
} = require("../controllers/question.controller");
const router = express();

router.get("/getallquestions", getAllQuestions);
router.post("/addquestion", addQuestion);

module.exports = router;
