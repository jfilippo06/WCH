const express = require("express");
const {
  buscarClienteController,
  clienteRenderController,
  registrarRenderController,
  facturarRenderController,
  registrarClienteController,
  facturaController,
} = require("../controllers/venta");
const asyncHandler = require("../middlewares/async-handler");
const loginUser = require("../middlewares/loginUser");
const verifyAdmin = require("../middlewares/verifyAdmin");
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
router.post("/facturar/:id", loginUser, asyncHandler(facturaController));

module.exports = router;
