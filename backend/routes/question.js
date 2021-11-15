const express = require("express");
const {
  getAllQuestions,
  addQuestion,
  getTestQuestions,
} = require("../controllers/question.controller");
const router = express();

router.get("/getallquestions", getAllQuestions);
router.post("/addquestion", addQuestion);
router.get("/gettestquestions/:testId", getTestQuestions);

module.exports = router;
