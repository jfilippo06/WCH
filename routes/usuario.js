const express = require('express');
const { usuarioController, deshabilitarUsuarioController, editarGetController } = require('../controllers/usuario');
const asyncHandler = require('../middlewares/async-handler');
const loginUser = require('../middlewares/loginUser');
const router = express.Router();

router.get('/', loginUser, asyncHandler(usuarioController));
router.get('/deshabilitar/:id', loginUser, asyncHandler(deshabilitarUsuarioController))
router.get('/editar/:id', asyncHandler(editarGetController))
router.post('/editar/:id', asyncHandler())

module.exports = router;