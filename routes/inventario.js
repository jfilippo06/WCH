const express = require('express');
const { franelaController, productoController } = require('../controllers/inventario');
const asyncHandler = require('../middlewares/async-handler');
const loginUser = require('../middlewares/loginUser');
const router = express.Router();

router.get('/franela', loginUser, asyncHandler(franelaController))
router.get('/producto', loginUser, asyncHandler(productoController))

module.exports = router;