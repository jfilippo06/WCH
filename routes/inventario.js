const express = require('express');
const { inventarioController } = require('../controllers/inventario');
const asyncHandler = require('../middlewares/async-handler');
const loginUser = require('../middlewares/loginUser');
const router = express.Router();

router.get('/', loginUser, asyncHandler(inventarioController))

module.exports = router;