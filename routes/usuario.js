const express = require('express');
const { usuarioController } = require('../controllers/usuario');
const asyncHandler = require('../middlewares/async-handler');
const loginUser = require('../middlewares/loginUser');
const router = express.Router();

router.get('/', loginUser, asyncHandler(usuarioController));

module.exports = router;