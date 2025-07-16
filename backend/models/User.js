const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    score: Number,
    category: String,
    result: String,
    recommendation: String
});

module.exports = mongoose.model('User', userSchema);