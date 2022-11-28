const express = require("express");
const { buscarClienteController, clienteRenderController } = require("../controllers/venta");
const asyncHandler = require("../middlewares/async-handler");
const loginUser = require("../middlewares/loginUser");
const verifyAdmin = require("../middlewares/verifyAdmin");
const router = express.Router();

router.get("/", loginUser, asyncHandler(clienteRenderController));
router.post("/cliente", loginUser, asyncHandler(buscarClienteController))

module.exports = router;