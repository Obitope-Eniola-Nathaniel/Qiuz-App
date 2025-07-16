const User = require("../models/User");
const Question = require("../models/Question");
const sendEmail = require("../utils/sendEmail");

const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

// Start Quiz
exports.startQuiz = async (req, res) => {
  const { name, email, phone, category } = req.body;

  try {
    const user = await User.create({ name, email, phone, category });
    let questions = await Question.find({ category });
    questions = shuffleArray(questions);

    res.json({
      userId: user._id,
      questions: questions.map((q, i) => ({
        id: q._id,
        index: i,
        questionText: q.questionText,
        options: q.options,
      })),
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Single Question
exports.getQuestion = async (req, res) => {
  const { userId, index } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    const questions = await Question.find({ category: user.category });
    const shuffled = shuffleArray(questions);

    const question = shuffled[parseInt(index)];
    if (!question) return res.status(404).json({ error: "No more questions" });

    res.json({
      index,
      questionText: question.questionText,
      options: question.options,
      id: question._id,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Submit Quiz
exports.submitQuiz = async (req, res) => {
  const { userId, answers } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    const questions = await Question.find({ category: user.category });

    let score = 0;
    questions.forEach((q) => {
      // returns the first element in the array that matches the condition
      const userAnswer = answers.find((a) => a.id === q._id.toString());
      if (userAnswer && userAnswer.answer === q.correctAnswer) {
        score++;
      }
    });

    const total = questions.length;
    const result = score / total >= 0.5 ? "pass" : "fail";
    let recommendation = "";
    let link = "";

    if (result === "fail") {
      // if (user.category === "frontend")
      //   recommendation = "Revise React and JavaScript.";
      // if (user.category === "backend")
      //   recommendation = "Focus on Node.js and APIs.";
      // if (user.category === "pm")

      recommendation =
        "We are sad !! You didnt pass our initial test, Not to worry, our team will reach out on how you can join our Academy where you meet like minds like yourself to sharpen your skills.";

      sendEmail(
        "dareadedeji@gmail.com",
        "Quiz Result",
        `<p>${user.name}, attempt the quiz and  ${result}</p>
        <p>This is he/her ${user.email},and Phone no: ${user.phone}</p>`
      );

      link =
        "https://calendly.com/enforcatraining/30min?from=slack&month=2025-07";
    } else {
      recommendation =
        "Congratulations, You pass our initial test. Please wait for the next steps as our team will reach out to you for a practical work to be done";
      sendEmail(
        "dareadedeji@gmail.com",
        "Quiz Result",
        `<p>${user.name}, attempt the quiz and  ${result}</p>
        <p>This is he/her ${user.email},and Phone no: ${user.phone}</p>`
      );

      link = "https://mentortechies.slack.com/ssb/redirect";
    }
    user.score = score;
    user.result = result;
    user.recommendation = recommendation;
    await user.save();

    res.json({ score, total, result, recommendation, link });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
