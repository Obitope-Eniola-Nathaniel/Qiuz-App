import React, { useEffect, useState } from "react";
import "./ResultPage.css";
import eagle from "../images/eagle.png";
import snail from "../images/snail.png";

const ResultPage = ({ result }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    if (result.result === "pass") {
      setImage(eagle);
    } else {
      setImage(snail);
    }
  }, [result.result]); // Runs only when result.result changes

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-2xl shadow-2xl text-center transition-all duration-500">
      <h2 className="text-3xl font-bold mb-6 text-blue-900 animate-bounce">
        🎉 Quiz Result
      </h2>

      <div className="text-xl mb-2">
        <span className="font-semibold text-blue-900">Score:</span>{" "}
        <span className="text-blue-900 font-bold">
          {result.score} / {result.total}
        </span>
      </div>

      <div
        className={`text-xl font-bold mb-4 ${
          result.result === "pass" ? "text-green-600" : "text-red-600"
        }`}
      >
        Status: {result.result.toUpperCase()}
      </div>

      <img
        src={image}
        alt="result-status"
        className="mx-auto w-32 h-32 object-contain my-1 animate-fade-in"
      />

      <p className="text-gray-600 text-md italic mb-4">
        {result.recommendation}
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded mb-4">
        <p>
          ⏳ Your performance is under review. Click below to take the next
          step.
        </p>
      </div>

      <a
        href={result.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-700 transition duration-300 shadow"
      >
        🚀 NEXT STEP
      </a>
    </div>
  );
};

export default ResultPage;
