const express = require("express");
const {
  usuarioController,
  deshabilitarUsuarioController,
  editarGetController,
  editarPostController,
} = require("../controllers/usuario");
const { bodyRegister } = require("../middlewares/validationBody");
const validationResultEditarUsuario = require("../middlewares/validationResult-editarUsuario");
const asyncHandler = require("../middlewares/async-handler");
const loginUser = require("../middlewares/loginUser");
const verifyAdmin = require("../middlewares/verifyAdmin");
const router = express.Router();

router.get("/", loginUser, verifyAdmin, asyncHandler(usuarioController));
router.get(
  "/deshabilitar/:id",
  loginUser,
  verifyAdmin,
  asyncHandler(deshabilitarUsuarioController)
);
router.get(
  "/editar/:id",
  loginUser,
  verifyAdmin,
  asyncHandler(editarGetController)
);
router.post(
  "/editar/:id",
  loginUser,
  verifyAdmin,
  bodyRegister,
  validationResultEditarUsuario,
  asyncHandler(editarPostController)
);

module.exports = router;
