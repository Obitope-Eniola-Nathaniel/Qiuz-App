const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    category: String,
    questionText: String,
    options: [String],
    correctAnswer: String
});

module.exports = mongoose.model('Question', questionSchema);