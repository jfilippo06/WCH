const express = require('express');
const { respaldarGet, copy } = require('../controllers/mantenimiento');
const asyncHandler = require('../middlewares/async-handler');
const loginUser = require('../middlewares/loginUser');
const router = express.Router();

router.get('/respaldar', loginUser, asyncHandler(respaldarGet))
router.get('/copy', loginUser, asyncHandler(copy))

module.exports = router;