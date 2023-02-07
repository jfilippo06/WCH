const express = require("express");
const {
  renderFacturaController,
  renderInventarioController,
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

module.exports = router;
