import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./StartForm.css";

const StartForm = ({ onStart }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("frontend");

  const handleStart = async () => {
    if (!name.trim() || !email.trim() || !phone.trim() || !category.trim()) {
      // Check if username is empty or just whitespace
      // alert("Input name and email");
      toast.error("Please fill all fields!");

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
      toast.success("Quiz started!");
    } catch (err) {
      toast.error("Start failed: " + err.message);
    }
  };
  return (
    <div className="max-w-3xl mx-auto mt-10 px-6 py-10 bg-white shadow-2xl rounded-3xl flex flex-col md:flex-row items-center gap-8 transition-all duration-500">
      {/* Left Section (Instructions) */}
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-3xl font-bold text-blue-800 animate-bounce text-center">🚀 Quiz Time</h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          📌 Please enter your correct details to begin. <br />⏱ You have{" "}
          <span className="text-red-600 font-semibold">10 seconds</span> to
          answer each question. <br />
          🧠 Choose the category you belong to and stay focused! <br />
        </p>
      </div>

      {/* Right Section (Form) */}
      <section className="md:w-1/2 space-y-4 w-full">
        <input
          placeholder="Full Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <input
          type="email"
          placeholder="Email Address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-3 border rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="pm">Product Management</option>
        </select>

        <button
          onClick={handleStart}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition duration-300"
        >
          Start Quiz
        </button>
      </section>
    </div>
  );
};

export default StartForm;
