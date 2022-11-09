const express = require('express');
const { bodyRegister, bodyLogin } = require('../middlewares/validationBody');
const validationResultAuthLogin = require('../middlewares/validationResult-authLogin')
const validationResultAuthRegister = require('../middlewares/validationResult-authRegister')
const asyncHandler = require('../middlewares/async-handler');
const loginUser = require('../middlewares/loginUser');
const { registerController, loginController, logoutController } = require('../controllers/auth');
const router = express.Router()

router.post('/login', bodyLogin, validationResultAuthLogin, asyncHandler(loginController));
router.post('/register', loginUser, bodyRegister, validationResultAuthRegister, asyncHandler(registerController));
router.get('/logout', loginUser, asyncHandler(logoutController))

module.exports = router