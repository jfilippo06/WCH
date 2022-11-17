const express = require('express');
const { franelaController } = require('../controllers/inventario');
const asyncHandler = require('../middlewares/async-handler');
const loginUser = require('../middlewares/loginUser');
const router = express.Router();

router.get('/franela', loginUser, asyncHandler(franelaController))

module.exports = router;