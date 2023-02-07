const express = require("express");
const {
  renderIvaController,
  activarController,
  desactivarController,
  actualizarController,
} = require("../controllers/impuesto");
const asyncHandler = require("../middlewares/async-handler");
const loginUser = require("../middlewares/loginUser");
const verifyAdmin = require("../middlewares/verifyAdmin");
const router = express.Router();

router.get("/", loginUser, verifyAdmin, asyncHandler(renderIvaController));
router.get("/activar", loginUser, verifyAdmin, asyncHandler(activarController));
router.get(
  "/desactivar",
  loginUser,
  verifyAdmin,
  asyncHandler(desactivarController)
);
router.post(
  "/actualizar",
  loginUser,
  verifyAdmin,
  asyncHandler(actualizarController)
);

module.exports = router;
