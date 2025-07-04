// seed/seedQuestions.js
const mongoose = require("mongoose");
const Question = require("../models/Question");
const connectDB = require("../config/db");

const seedQuestions = async () => {
  await connectDB();

  const questions = [
    // ==== Frontend ====
    {
      category: "frontend",
      questionText: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyper Tool Multi Language",
      ],
      correctAnswer: "Hyper Text Markup Language",
    },
    {
      category: "frontend",
      questionText: "Which CSS property controls the text size?",
      options: ["font-style", "text-size", "font-size", "text-style"],
      correctAnswer: "font-size",
    },
    {
      category: "frontend",
      questionText: "Which tag is used to insert a JavaScript file in HTML?",
      options: ["<script>", "<js>", "<javascript>", "<link>"],
      correctAnswer: "<script>",
    },
    {
      category: "frontend",
      questionText: "Which HTML attribute is used to define inline styles?",
      options: ["class", "style", "font", "styles"],
      correctAnswer: "style",
    },
    {
      category: "frontend",
      questionText: "Which CSS property is used for changing background color?",
      options: ["color", "bgcolor", "background-color", "backgroundStyle"],
      correctAnswer: "background-color",
    },
    {
      category: "frontend",
      questionText: "In React, what is used to pass data to components?",
      options: ["state", "props", "methods", "variables"],
      correctAnswer: "props",
    },
    {
      category: "frontend",
      questionText: "Which of these is a CSS framework?",
      options: ["React", "Bootstrap", "Node.js", "Laravel"],
      correctAnswer: "Bootstrap",
    },
    {
      category: "frontend",
      questionText: "What does DOM stand for?",
      options: [
        "Document Object Model",
        "Digital Output Mode",
        "Data Object Method",
        "Desktop Output Model",
      ],
      correctAnswer: "Document Object Model",
    },
    {
      category: "frontend",
      questionText: "Which HTML tag is used for inserting an image?",
      options: ["<img>", "<image>", "<src>", "<pic>"],
      correctAnswer: "<img>",
    },
    {
      category: "frontend",
      questionText:
        "Which JavaScript method is used to select an element by ID?",
      options: [
        "getElementById",
        "querySelectorAll",
        "getElementsByClassName",
        "getId",
      ],
      correctAnswer: "getElementById",
    },

    // ==== Backend ====
    {
      category: "backend",
      questionText: "What is the default port number for Node.js applications?",
      options: ["3000", "5000", "8000", "8080"],
      correctAnswer: "3000",
    },
    {
      category: "backend",
      questionText: "Which of the following is a NoSQL database?",
      options: ["MongoDB", "MySQL", "PostgreSQL", "SQLite"],
      correctAnswer: "MongoDB",
    },
    {
      category: "backend",
      questionText: "Which HTTP method is used to create data?",
      options: ["POST", "GET", "PUT", "DELETE"],
      correctAnswer: "POST",
    },
    {
      category: "backend",
      questionText: "Which language is commonly used with Express.js?",
      options: ["Python", "Ruby", "JavaScript", "PHP"],
      correctAnswer: "JavaScript",
    },
    {
      category: "backend",
      questionText: "What does REST stand for?",
      options: [
        "Representational State Transfer",
        "Remote Service Test",
        "Rapid Execution Strategy Tool",
        "Reactive System Token",
      ],
      correctAnswer: "Representational State Transfer",
    },
    {
      category: "backend",
      questionText: "Which command initializes a Node.js project?",
      options: ["npm init", "node init", "npm start", "npm create"],
      correctAnswer: "npm init",
    },
    {
      category: "backend",
      questionText: "What is middleware in Express?",
      options: [
        "A function that handles errors",
        "A package manager",
        "A function that has access to the request and response objects",
        "A type of database",
      ],
      correctAnswer:
        "A function that has access to the request and response objects",
    },
    {
      category: "backend",
      questionText: "What does CRUD stand for?",
      options: [
        "Create, Read, Update, Delete",
        "Copy, Run, Update, Deploy",
        "Connect, Route, Update, Delete",
        "Create, Route, Use, Delete",
      ],
      correctAnswer: "Create, Read, Update, Delete",
    },
    {
      category: "backend",
      questionText: "Which database is known for being relational?",
      options: ["MySQL", "MongoDB", "Redis", "Firebase"],
      correctAnswer: "MySQL",
    },
    {
      category: "backend",
      questionText: "What is used to hash passwords in Node.js?",
      options: ["bcrypt", "crypto-js", "jsonwebtoken", "passport"],
      correctAnswer: "bcrypt",
    },

    // ==== PM ====
    {
      category: "pm",
      questionText: "What does MVP stand for in product development?",
      options: [
        "Most Valuable Plan",
        "Minimum Viable Product",
        "Major Value Product",
        "Minimal Valuable Person",
      ],
      correctAnswer: "Minimum Viable Product",
    },
    {
      category: "pm",
      questionText: 'Which methodology uses "sprints" to organize work?',
      options: ["Waterfall", "Agile", "Kanban", "Lean"],
      correctAnswer: "Agile",
    },
    {
      category: "pm",
      questionText: "What is a common tool for visualizing task progress?",
      options: ["Gantt Chart", "Pie Chart", "Histogram", "Scatter Plot"],
      correctAnswer: "Gantt Chart",
    },
    {
      category: "pm",
      questionText: "Who is responsible for defining the product roadmap?",
      options: ["Developer", "Product Manager", "Scrum Master", "Designer"],
      correctAnswer: "Product Manager",
    },
    {
      category: "pm",
      questionText: "What does the acronym KPI stand for?",
      options: [
        "Key Performance Indicator",
        "Key Product Insight",
        "Known Project Issue",
        "Knowledge Process Index",
      ],
      correctAnswer: "Key Performance Indicator",
    },
    {
      category: "pm",
      questionText: "What is the goal of a retrospective meeting?",
      options: [
        "Assign tasks",
        "Write code",
        "Review and improve the last sprint",
        "Deploy features",
      ],
      correctAnswer: "Review and improve the last sprint",
    },
    {
      category: "pm",
      questionText:
        "Which document outlines the project scope, goals, and deliverables?",
      options: ["Business case", "Project charter", "Risk register", "SOW"],
      correctAnswer: "Project charter",
    },
    {
      category: "pm",
      questionText: 'What is "scope creep"?',
      options: [
        "A type of bug",
        "Delays caused by unclear goals",
        "Uncontrolled changes in a project’s scope",
        "Security flaw in PM tools",
      ],
      correctAnswer: "Uncontrolled changes in a project’s scope",
    },
    {
      category: "pm",
      questionText: "Which Agile role prioritizes the backlog?",
      options: ["Scrum Master", "Product Owner", "Developer", "Stakeholder"],
      correctAnswer: "Product Owner",
    },
    {
      category: "pm",
      questionText: "What is a common Agile ceremony?",
      options: ["Daily Standup", "Annual Review", "Weekly Sync", "Code Freeze"],
      correctAnswer: "Daily Standup",
    },
  ];

  try {
    await Question.deleteMany(); // Optional: clear existing
    await Question.insertMany(questions);
    console.log("Questions seeded successfully!");
    process.exit(); // Exit after seeding
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedQuestions();

// To Run the Script
// node seed/seedQuestions.js
