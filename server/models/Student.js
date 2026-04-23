const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    academicScore: Number,
    healthScore: Number,
    selScore: Number,
    teacherId: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('Student', studentSchema);
