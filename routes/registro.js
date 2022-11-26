const express = require("express");
const {
  getFranelaController,
  habilitarFranelaController,
  getProductoController,
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

module.exports = router;
