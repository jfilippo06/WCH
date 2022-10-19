const express = require('express');
const { homeIndex } = require('../controllers/home');
const asyncHandler = require('../middlewares/async-handler');
const router = express.Router();

router.get('/', asyncHandler(homeIndex));

module.exports = router;