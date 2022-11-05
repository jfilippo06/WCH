const express = require('express');
const { index } = require('../controllers/home');
const asyncHandler = require('../middlewares/async-handler');
const router = express.Router();

router.get('/', asyncHandler(index));

module.exports = router;