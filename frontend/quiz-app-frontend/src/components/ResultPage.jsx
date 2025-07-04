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
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-xl shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4 quiz-result">Quiz Result</h2>

      <div className="text-lg mb-2">
        <span className="font-semibold">Score:</span> {result.score} / {result.total}
      </div>

      <div
        className={`text-lg font-semibold mb-2 ${
          result.result === "pass" ? "text-green-600" : "text-red-600"
        }`}
      >
        Status: {result.result.toUpperCase()}
      </div>

      <img src={image} alt="result-status" className="enforca mx-auto" />

      <p className="text-gray-700">{result.recommendation}</p>
    </div>
  );
};

export default ResultPage;
