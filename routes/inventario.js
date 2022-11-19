const express = require("express");
const {
  franelaController,
  productoController,
  deshabilitarFranelaController,
  deshabilitarProductoController,
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
router.get("/producto", loginUser, asyncHandler(productoController));
router.get(
  "/producto/deshabilitar/:id",
  loginUser,
  asyncHandler(deshabilitarProductoController)
);

module.exports = router;
