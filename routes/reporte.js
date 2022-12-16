const express = require("express");
const { renderFacturaController } = require("../controllers/reporte");
const asyncHandler = require("../middlewares/async-handler");
const loginUser = require("../middlewares/loginUser");
const verifyAdmin = require("../middlewares/verifyAdmin");
const router = express.Router();

router.get("/factura", loginUser, verifyAdmin, asyncHandler(renderFacturaController));

module.exports = router;
