const express = require('express');
const { usuarioController } = require('../controllers/usuario');
const asyncHandler = require('../middlewares/async-handler');
const router = express.Router();

router.get('/', asyncHandler(usuarioController));

module.exports = router;