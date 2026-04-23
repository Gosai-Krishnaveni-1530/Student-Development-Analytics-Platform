const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    userId: String,
    message: String,
    sentiment: Object,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Chat', chatSchema);
