const express = require("express");
const {
  franelaController,
  productoController,
  deshabilitarFranelaController,
  deshabilitarProductoController,
  registroController,
  registroFranelaController,
  registroProductoController,
  franelaEditarGetController,
} = require("../controllers/inventario");
const asyncHandler = require("../middlewares/async-handler");
const loginUser = require("../middlewares/loginUser");
const router = express.Router();

router.get("/franela", loginUser, asyncHandler(franelaController));
router.get(
  "/franela/deshabilitar/:id",
  loginUser,
  asyncHandler(deshabilitarFranelaController)
);
router.get(
  "/franela/editar/:id",
  loginUser,
  asyncHandler(franelaEditarGetController)
);
router.get("/producto", loginUser, asyncHandler(productoController));
router.get(
  "/producto/deshabilitar/:id",
  loginUser,
  asyncHandler(deshabilitarProductoController)
);
router.get("/registro", loginUser, asyncHandler(registroController));
router.post(
  "/registro/franela",
  loginUser,
  asyncHandler(registroFranelaController)
);
router.post(
  "/registro/producto",
  loginUser,
  asyncHandler(registroProductoController)
);

module.exports = router;
