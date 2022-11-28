const express = require('express');
const asyncHandler = require('../middlewares/async-handler');
const loginUser = require('../middlewares/loginUser');
const verifyAdmin = require("../middlewares/verifyAdmin");
const router = express.Router();

module.exports = router;