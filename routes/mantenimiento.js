const express = require('express');
const { respaldarGet } = require('../controllers/mantenimiento');
const asyncHandler = require('../middlewares/async-handler');
const loginUser = require('../middlewares/loginUser');
const router = express.Router();

router.get('/respaldar', loginUser, asyncHandler(respaldarGet))

module.exports = router;