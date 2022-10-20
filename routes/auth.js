const express = require('express');
const validationResult = require('../middlewares/validationResult')
const { bodyRegister } = require('../middlewares/validationBody');
const router = express.Router()

router.post('/login');
router.post('/register', bodyRegister, validationResult);

module.exports = router