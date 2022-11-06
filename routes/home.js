const express = require('express');
const { index, exit } = require('../controllers/home');
const asyncHandler = require('../middlewares/async-handler');
const router = express.Router();

router.get('/', asyncHandler(index));
router.get('/salir', asyncHandler(exit));

module.exports = router;