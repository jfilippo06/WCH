const express = require("express");
const {
  getFranelaController,
  habilitarFranelaController,
  getProductoController,
  habilitarProductoController,
  getUsuarioController,
  habilitarUsuarioController,
} = require("../controllers/registro");
const asyncHandler = require("../middlewares/async-handler");
const loginUser = require("../middlewares/loginUser");
const verifyAdmin = require("../middlewares/verifyAdmin");
const router = express.Router();

router.get("/franela", loginUser, verifyAdmin, asyncHandler(getFranelaController));
router.get(
  "/franela/habilitar/:id",
  loginUser,
  verifyAdmin,
  asyncHandler(habilitarFranelaController)
);
router.get("/producto", loginUser, verifyAdmin, asyncHandler(getProductoController));
router.get(
  "/producto/habilitar/:id",
  loginUser,
  verifyAdmin,
  asyncHandler(habilitarProductoController)
);
router.get("/usuario", loginUser, verifyAdmin, asyncHandler(getUsuarioController));
router.get(
  "/usuario/habilitar/:id",
  loginUser,
  verifyAdmin,
  asyncHandler(habilitarUsuarioController)
);

module.exports = router;
