const express = require('express');
const { homeIndex, homeLogin, logout } = require('../controllers/home');
const asyncHandler = require('../middlewares/async-handler');
const loginUser = require('../middlewares/loginUser');
const router = express.Router();

router.get('/', asyncHandler(homeLogin));
router.get('/home', loginUser, asyncHandler(homeIndex))
router.get('/logout', loginUser, asyncHandler(logout))

module.exports = router;