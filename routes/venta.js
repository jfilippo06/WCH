const express = require("express");
const {
  buscarClienteController,
  clienteRenderController,
  registrarRenderController,
  facturarRenderController,
  registrarClienteController,
  facturaFranelaController,
  facturaProductoController,
  deleteFranelaController,
  deleteProductoController,
  cancelarController,
} = require("../controllers/venta");
const asyncHandler = require("../middlewares/async-handler");
const loginUser = require("../middlewares/loginUser");
const router = express.Router();

router.get("/", loginUser, asyncHandler(clienteRenderController));
router.post("/cliente", loginUser, asyncHandler(buscarClienteController));
router.get("/registrar", loginUser, asyncHandler(registrarRenderController));
router.post(
  "/registrar/cliente",
  loginUser,
  asyncHandler(registrarClienteController)
);
router.get("/facturar", loginUser, asyncHandler(facturarRenderController));
router.post(
  "/facturar/franela/:idFranela",
  loginUser,
  asyncHandler(facturaFranelaController)
);
router.post(
  "/facturar/producto/:idProducto",
  loginUser,
  asyncHandler(facturaProductoController)
);
router.get(
  "/facturar/franela/delete/:id",
  loginUser,
  asyncHandler(deleteFranelaController)
);
router.get(
  "/facturar/producto/delete/:id",
  loginUser,
  asyncHandler(deleteProductoController)
);
router.get(
  "/facturar/cancelar",
  loginUser,
  asyncHandler(cancelarController)
);

module.exports = router;
