const express = require('express');
const { homeIndex } = require('../controllers/home');
const router = express.Router();

router.get('/', homeIndex);

module.exports = router;