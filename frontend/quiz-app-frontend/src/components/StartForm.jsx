import React, { useState } from "react";
import axios from "axios";
import "./StartForm.css";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// import animationData from "../assets/quiz-animation.json";

const StartForm = ({ onStart }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("frontend");

  const handleStart = async () => {
    if (!name.trim() || !email.trim()) {
      // Check if username is empty or just whitespace
      alert("Input name and email");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/api/quiz/start", {
        name,
        email,
        phone,
        category,
      });
      onStart(res.data); // Pass userId and questions to parent
    } catch (err) {
      alert("Start failed: " + err.message);
    }
  };
  return (
    <div className="max-w-2xl mx-auto mt-5 p-8 bg-white shadow-xl rounded-xl flex flex-col md:flex-row items-center justify-center px-4 py-10">
      {/* <div className="md:w-1/2 mb-6 md:mb-0">
        <Lottie animationData={animationData} className="w-full max-w-md mx-auto" />
      </div> */}
      

      <div className="md:w-1/2 rounded-2xl p-2 max-w-md w-full">
        <h1 className="text-2xl font-bold text-blue-900 mb-4 text-center">Quiz Time </h1>
        <p className="text-1xl text-gray-600 mb-6">
          📌 Please enter your correct details to begin. <br />
          ⏱ You have <strong className="text-red-600">10 seconds</strong> to answer each question. <br />
          🧠 Choose the category you belong to. <br />
          {/* Do not retake the quiz once submitted. */}
        </p>
     

      </div>
      {/* <h2 className="text-3xl font-bold text-center mb-6 quiz-start">
        Start Quiz
      </h2> */}
      <section className="space-y-4">
        <input
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="custom-input w-full px-4 py-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
        />
        <br />
        <input
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="custom-input w-full px-4 py-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
        />
        <br />
         <input
          placeholder="Phone No"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="custom-input w-full px-4 py-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
        />
        <br />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-3 border rounded bg-white focus:outline-none focus:ring focus:ring-blue-300 custom-input"
        >
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="pm">Product Management</option>
        </select>
        <br />
        <button
          onClick={handleStart}
          className="w-full py-3 font-semibold rounded transition btn"
        >
          Start Quiz
        </button>
      </section>
    </div>
  );
};

export default StartForm;
