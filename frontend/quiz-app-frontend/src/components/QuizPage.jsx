import React, { useState, useEffect, useCallback } from "react";
import "./QuizPage.css";

const QuizPage = ({ userId, questions, onSubmit }) => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState("");
  const [timer, setTimer] = useState(15); // 5s per question

  const handleNext = useCallback(() => {
    const currentAnswer = {
      id: questions[current].id,
      answer: selected,
    };

    const updatedAnswers = [...answers, currentAnswer];
    setAnswers(updatedAnswers);
    setSelected("");

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setTimer(10);
    } else {
      onSubmit(userId, updatedAnswers);
    }
  }, [answers, current, selected, questions, userId, onSubmit]);

  //
  useEffect(() => {
    const t = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          handleNext(); // auto next
          return 10;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [handleNext]);

  const q = questions[current];

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h3 className="text-lg font-bold mb-4 question">
        Question {current + 1} of {questions.length}
      </h3>

      <p className="text-xl font-semibold mb-4 question">{q.questionText}</p>
      <div className="space-y-2 mb-4">
        {q.options.map((opt, i) => (
          <div key={i}>
            <label className="quiz-input question">
              <input
                
                type="radio"
                name="answer"
                value={opt}
                checked={selected === opt}
                onChange={() => setSelected(opt)}
              />
              {opt}
            </label>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6">
        <span className="text-red-600 font-semibold">
          <p>Time Left: {timer}s</p>
        </span>
        <button
          onClick={handleNext}
          disabled={!selected}
          className={`btn px-6 py-2 rounded font-medium transition ${
            selected
              ? ""
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
