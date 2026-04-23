const { analyzeText } = require('../services/aiService');
const Chat = require('../models/Chat');


exports.chat = async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: "Message is required" });
        }

    
        const sentiment = await analyzeText(message);

        
        const chat = await Chat.create({
            userId: req.user.id, 
            message,
            sentiment
        });

        res.json(chat);

    } catch (err) {
        console.error("Chat Error:", err);
        res.status(500).json({ error: "Server error" });
    }
};




exports.getMyChats = async (req, res) => {
    try {
        const chats = await Chat.find({ userId: req.user.id })
            .sort({ createdAt: -1 });

        res.json(chats);

    } catch (err) {
        console.error("Get Chats Error:", err);
        res.status(500).json({ error: "Server error" });
    }
};




exports.getStats = async (req, res) => {
    try {
        const stats = await Chat.aggregate([
            {
                $match: { userId: req.user.id }
            },
            {
                $group: {
                    _id: "$sentiment.label",
                    count: { $sum: 1 }
                }
            }
        ]);

        res.json(stats);

    } catch (err) {
        console.error("Stats Error:", err);
        res.status(500).json({ error: "Server error" });
    }
};
