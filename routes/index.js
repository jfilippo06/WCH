const express = require("express");
const router = express.Router();

const homeRouter = require("./home");
const authRouter = require("./auth");
const inventarioRouter = require("./inventario");
const usuarioRouter = require("./usuario");
const mantenimientoRouter = require("./mantenimiento");
const registroRouter = require("./registro");
const ventaRouter = require("./venta");
const reporteRouter = require("./reporte");
const impuestoRouter = require("./impuesto");

router.use("/", homeRouter);
router.use("/auth", authRouter);
router.use("/inventario", inventarioRouter);
router.use("/usuario", usuarioRouter);
router.use("/mantenimiento", mantenimientoRouter);
router.use("/registro", registroRouter);
router.use("/venta", ventaRouter);
router.use("/reporte", reporteRouter);
router.use("/impuesto", impuestoRouter);

module.exports = router;
