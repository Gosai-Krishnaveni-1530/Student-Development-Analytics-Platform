const Student = require('../models/Student');

// Student sees own data
exports.getMyData = async (req, res) => {
    const data = await Student.findOne({ userId: req.user.id });
    res.json(data);
};

// Teacher sees assigned students
exports.getTeacherStudents = async (req, res) => {
    const data = await Student.find({ teacherId: req.user.id });
    res.json(data);
};

// Admin sees all
exports.getAllStudents = async (req, res) => {
    const data = await Student.find();
    res.json(data);
};
