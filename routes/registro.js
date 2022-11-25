const express = require('express');
const asyncHandler = require('../middlewares/async-handler');
const loginUser = require('../middlewares/loginUser');
const router = express.Router();

router.get('/franela', asyncHandler())

module.exports = router;