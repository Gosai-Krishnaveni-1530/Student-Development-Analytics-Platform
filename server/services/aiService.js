const axios = require('axios');

exports.analyzeText = async (text) => {
    try {
        const res = await axios.post('http://127.0.0.1:8000/analyze', {
            text: text
        });

        return res.data;
    } catch (err) {
        console.error("AI Service Error:", err.message);
        throw err;
    }
};
