const express = require("express");
const router = express.Router();

const {
  startQuiz,
  getQuestion,
  submitQuiz,
} = require("../controllers/quiz");

router.post("/start", startQuiz);
router.get("/question/:userId/:index", getQuestion);
router.post("/submit", submitQuiz);

module.exports = router;
