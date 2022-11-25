const express = require('express');
const { getFranela } = require('../controllers/registro');
const asyncHandler = require('../middlewares/async-handler');
const loginUser = require('../middlewares/loginUser');
const router = express.Router();

router.get('/franela', asyncHandler(getFranela))

module.exports = router;