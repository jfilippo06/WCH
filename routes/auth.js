const express = require('express');
const { bodyRegister, bodyLogin } = require('../middlewares/validationBody');
const validationResultAuth = require('../middlewares/validationResult-auth')
const validationResult = require('../middlewares/validationResult')
const asyncHandler = require('../middlewares/async-handler');
const loginUser = require('../middlewares/loginUser');
const { registerController, loginController, logoutController } = require('../controllers/auth');
const router = express.Router()

router.post('/login', bodyLogin, validationResultAuth, asyncHandler(loginController));
router.post('/register', bodyRegister, validationResult, asyncHandler(registerController));
router.get('/logout', loginUser, asyncHandler(logoutController))

module.exports = router