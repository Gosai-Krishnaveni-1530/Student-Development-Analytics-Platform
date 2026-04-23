const router = require('express').Router();
const {
    chat,
    getMyChats,
    getStats
} = require('../controllers/chatController');

const auth = require('../middleware/authMiddleware');

router.post('/', auth, chat);
router.get('/history', auth, getMyChats);
router.get('/stats', auth, getStats);

module.exports = router;
