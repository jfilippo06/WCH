const express = require('express');
const { inventario } = require('../controllers/inventario');
const asyncHandler = require('../middlewares/async-handler');
const loginUser = require('../middlewares/loginUser');
const router = express.Router();

router.get('/', loginUser, asyncHandler(inventario))

module.exports = router;