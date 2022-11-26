const express = require("express");
const {
  getFranelaController,
  habilitarFranelaController,
  getProductoController,
  habilitarProductoController,
  getUsuarioController,
} = require("../controllers/registro");
const asyncHandler = require("../middlewares/async-handler");
const loginUser = require("../middlewares/loginUser");
const router = express.Router();

router.get("/franela", loginUser, asyncHandler(getFranelaController));
router.get(
  "/franela/habilitar/:id",
  loginUser,
  asyncHandler(habilitarFranelaController)
);
router.get("/producto", loginUser, asyncHandler(getProductoController));
router.get(
  "/producto/habilitar/:id",
  loginUser,
  asyncHandler(habilitarProductoController)
);
router.get("/usuario", loginUser, asyncHandler(getUsuarioController));

module.exports = router;
