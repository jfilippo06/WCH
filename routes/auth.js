const express = require('express');
const validationResult = require('../middlewares/validationResult')
const { bodyRegister, bodyLogin } = require('../middlewares/validationBody');
const { registerController, loginRegister } = require('../controllers/auth');
const asyncHandler = require('../middlewares/async-handler');
const router = express.Router()

router.post('/login', bodyLogin, validationResult, asyncHandler(loginRegister));
router.post('/register', bodyRegister, validationResult, asyncHandler(registerController));

module.exports = router