const express = require('express');
const validationResult = require('../middlewares/validationResult')
const { bodyRegister } = require('../middlewares/validationBody');
const { registerController } = require('../controllers/auth');
const asyncHandler = require('../middlewares/async-handler');
const router = express.Router()

router.post('/login');
router.post('/register', bodyRegister, validationResult, asyncHandler(registerController));

module.exports = router