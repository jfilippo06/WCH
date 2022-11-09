const express = require("express");
const {
  usuarioController,
  deshabilitarUsuarioController,
  editarGetController,
  editarPostController,
} = require("../controllers/usuario");
const asyncHandler = require("../middlewares/async-handler");
const loginUser = require("../middlewares/loginUser");
const router = express.Router();

router.get("/", loginUser, asyncHandler(usuarioController));
router.get(
  "/deshabilitar/:id",
  loginUser,
  asyncHandler(deshabilitarUsuarioController)
);
router.get("/editar/:id", loginUser, asyncHandler(editarGetController));
router.post("/editar/:id", asyncHandler(editarPostController));

module.exports = router;
