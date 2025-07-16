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
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl transition-all duration-300 ease-in-out">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-1">
          🧠 Question {current + 1} of {questions.length}
        </h3>
        <p className="text-lg text-gray-500">
          Time Remaining:{" "}
          <span className="text-red-600 font-semibold">{timer}s</span>
        </p>
      </div>

      <p className="text-2xl font-semibold text-gray-900 mb-6">
        {q.questionText}
      </p>

      <div className="space-y-3 mb-6">
        {q.options.map((opt, i) => (
          <label
            key={i}
            className={`flex items-center border px-4 py-3 rounded-xl cursor-pointer transition ${
              selected === opt
                ? "bg-blue-100 border-blue-400 text-blue-900 shadow-inner"
                : "bg-gray-50 border-gray-300 hover:bg-gray-100"
            }`}
          >
            <input
              type="radio"
              name="answer"
              value={opt}
              checked={selected === opt}
              onChange={() => setSelected(opt)}
              className="mr-3 accent-blue-500"
            />
            {opt}
          </label>
        ))}
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleNext}
          disabled={!selected}
          className={`px-6 py-2 rounded-lg text-white font-semibold shadow-md transition ${
            selected
              ? "bg-blue-600 hover:bg-blue-700"
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
