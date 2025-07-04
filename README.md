# 🧠 Fullstack Quiz App

A fullstack quiz application that allows users to take quizzes based on categories (Frontend, Backend, PM), track their score, and get personalized recommendations. Built with **React**, **Node.js**, **Express**, and **MongoDB**.

---

## 🚀 Features

* ✅ Name and Email collection (no login required)
* ✅ Category-based quizzes: Frontend, Backend, PM
* ✅ Questions are shuffled and delivered one at a time
* ✅ Countdown timer per question
* ✅ Pass/Fail scoring with personalized recommendations
* ✅ RESTful API with Express and MongoDB
* ✅ React frontend with Axios integration

---

## 📁 Project Structure

```
quiz-app/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   ├── seed/
│   ├── .env             # Contains MongoDB URI (NOT committed)
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── index.js
│   └── public/
└── README.md
```

---

## 💠 Getting Started Locally

### 🔧 Prerequisites

* Node.js & npm installed
* MongoDB (local or Atlas URI)

---

### 📆 Backend Setup

```bash
cd backend
npm install
```

1. Create a `.env` file:

```bash
cp .env.example .env
```

2. Add your MongoDB URI:

```
MONGO_URI=your-mongodb-url
PORT=5000
```

3. Start the backend server:

```bash
npm start
```

4. Seed sample questions:

```bash
node seed/seedQuestions.js
```

---

### 🌐 Frontend Setup

```bash
cd frontend
npm install
npm start
```

The frontend will run on `http://localhost:3000`

---

## 📱 API Endpoints

| Method | Endpoint                            | Description                         |
| ------ | ----------------------------------- | ----------------------------------- |
| POST   | `/api/quiz/start`                   | Start quiz with name/email/category |
| GET    | `/api/quiz/question/:userId/:index` | Get one question by index           |
| POST   | `/api/quiz/submit`                  | Submit answers and get results      |

---

## 🥯 Sample `.env` File

```env
MONGO_URI=mongodb://localhost:27017/quiz-app
PORT=5000
```

Create a file named `.env` and paste your MongoDB URI here.

---

## ❌ `.gitignore`

Make sure the following files and folders are in `.gitignore`:

```gitignore
# .gitignore
node_modules/
.env
```

---

## 📋 Tech Stack

* **Frontend**: React, Axios
* **Backend**: Node.js, Express
* **Database**: MongoDB + Mongoose
* **Styling**: Plain CSS / Tailwind / Bootstrap (if used)
* **Tools**: Nodemon, dotenv

---

## 📦 Future Enhancements

* 🔐 Add authentication (login/signup)
* 🌈 Improve UI with Tailwind or Chakra
* 📊 Admin panel to manage questions
* 🔄 Retry / Restart quiz feature
* ☁️ Deploy on Vercel (frontend) and Render (backend)

---

## 🧑‍💻 Author

**Your Name**
GitHub: [https://github.com/your-username](https://github.com/your-username)

---

## 📄 License

MIT License. Free to use and modify.
