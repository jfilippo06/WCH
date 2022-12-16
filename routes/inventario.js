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
  productoEditarGetController,
  franelaEditarPostController,
  productoEditarPostController,
} = require("../controllers/inventario");
const asyncHandler = require("../middlewares/async-handler");
const loginUser = require("../middlewares/loginUser");
const verifyAdmin = require("../middlewares/verifyAdmin");
const router = express.Router();

router.get("/franela", loginUser, asyncHandler(franelaController));
router.get(
  "/franela/deshabilitar/:id",
  loginUser,
  verifyAdmin,
  asyncHandler(deshabilitarFranelaController)
);
router.get(
  "/franela/editar/:id",
  loginUser,
  verifyAdmin,
  asyncHandler(franelaEditarGetController)
);
router.post(
  "/franela/edit/:id",
  loginUser,
  verifyAdmin,
  asyncHandler(franelaEditarPostController)
);
router.get("/producto", loginUser, asyncHandler(productoController));
router.get(
  "/producto/deshabilitar/:id",
  loginUser,
  verifyAdmin,
  asyncHandler(deshabilitarProductoController)
);
router.get(
  "/producto/editar/:id",
  loginUser,
  verifyAdmin,
  asyncHandler(productoEditarGetController)
);
router.post(
  "/producto/edit/:id",
  loginUser,
  verifyAdmin,
  asyncHandler(productoEditarPostController)
);
router.get(
  "/registro",
  loginUser,
  verifyAdmin,
  asyncHandler(registroController)
);
router.post(
  "/registro/franela",
  loginUser,
  verifyAdmin,
  asyncHandler(registroFranelaController)
);
router.post(
  "/registro/producto",
  loginUser,
  verifyAdmin,
  asyncHandler(registroProductoController)
);

module.exports = router;
