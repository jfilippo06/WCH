const express = require("express");
const {
  renderFacturaController,
  renderInventarioController,
  renderVentaController,
  renderClienteController,
  clienteReporteController,
  inventarioReporteController,
  ventaReporteController,
} = require("../controllers/reporte");
const asyncHandler = require("../middlewares/async-handler");
const loginUser = require("../middlewares/loginUser");
const verifyAdmin = require("../middlewares/verifyAdmin");
const router = express.Router();

router.get(
  "/factura",
  loginUser,
  verifyAdmin,
  asyncHandler(renderFacturaController)
);
router.get(
  "/inventario",
  loginUser,
  verifyAdmin,
  asyncHandler(renderInventarioController)
);
router.get(
  "/inventario/reporte",
  loginUser,
  verifyAdmin,
  asyncHandler(inventarioReporteController)
);
router.get(
  "/venta",
  loginUser,
  verifyAdmin,
  asyncHandler(renderVentaController)
);
router.get(
  "/venta/reporte",
  loginUser,
  verifyAdmin,
  asyncHandler(ventaReporteController)
);
router.get(
  "/cliente",
  loginUser,
  verifyAdmin,
  asyncHandler(renderClienteController)
);
router.get(
  "/cliente/reporte",
  loginUser,
  verifyAdmin,
  asyncHandler(clienteReporteController)
);

module.exports = router;
