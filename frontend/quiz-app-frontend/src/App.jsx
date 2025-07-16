import React, { useState } from "react";
import StartForm from "./components/StartForm";
import QuizPage from "./components/QuizPage";
import ResultPage from "./components/ResultPage";
import axios from "axios";
import "./App.css";
import image from "./images/enforca.png";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

function App() {
  const [stage, setStage] = useState("start");
  const [userId, setUserId] = useState("");
  const [questions, setQuestions] = useState([]);
  const [result, setResult] = useState(null);

  // Function pass to a child - chaild passing the data to parent
  const handleStart = ({ userId, questions }) => {
    setUserId(userId);
    setQuestions(questions);
    setStage("quiz");
  };

  const handleSubmit = async (uid, answers) => {
    try {
      const res = await axios.post("http://localhost:5000/api/quiz/submit", {
        userId: uid,
        answers,
      });
      setResult(res.data);
      setStage("result");
    } catch (err) {
      toast.error("Submission failed: " + err.message);
    }
  };
  return (
    <div className="app min-h-screen items-center justify-center p-4">
      <img src={image} alt="enforca" className="enforca mx-auto" />
      <Toaster position="top-center" reverseOrder={false} />

      {/* Get the user details and retuern questions */}
      {stage === "start" && <StartForm onStart={handleStart} />}

      {stage === "quiz" && (
        <QuizPage
          userId={userId}
          questions={questions}
          onSubmit={handleSubmit}
        />
      )}
      {stage === "result" && result && <ResultPage result={result} />}
    </div>
  );
}

export default App;
