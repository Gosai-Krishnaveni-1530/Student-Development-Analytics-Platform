const router = require('express').Router();
const { auth, roleCheck } = require('../middleware/auth');
const {
    getMyData,
    getTeacherStudents,
    getAllStudents
} = require('../controllers/studentController');

router.get('/me', auth, roleCheck('student'), getMyData);
router.get('/teacher', auth, roleCheck('teacher'), getTeacherStudents);
router.get('/admin', auth, roleCheck('admin'), getAllStudents);

module.exports = router;
