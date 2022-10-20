const express = require('express');
const router = express.Router();

const homeRouter = require('./home');
const authRouter = require('./auth');

router.use('/', homeRouter);
router.use('/auth', authRouter);

module.exports = router;
