const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
    candidate: String,
    votes: { type: Number, default: 1 },
    date: { type: Date, default: Date.now }
});

const Vote = mongoose.model('Vote', voteSchema);

module.exports = Vote;

