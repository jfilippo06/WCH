const express = require("express");
const {
  respaldarGet,
  copy,
  restaurarGet,
  paste,
  compactar,
  compactarGet,
} = require("../controllers/mantenimiento");
const asyncHandler = require("../middlewares/async-handler");
const loginUser = require("../middlewares/loginUser");
const verifyAdmin = require("../middlewares/verifyAdmin");
const router = express.Router();

router.get("/respaldar", loginUser, verifyAdmin, asyncHandler(respaldarGet));
router.get("/restaurar", loginUser, verifyAdmin, asyncHandler(restaurarGet));
router.get("/paste/:id", loginUser, verifyAdmin, asyncHandler(paste));
router.get("/compactar", loginUser, verifyAdmin, asyncHandler(compactar));
router.get("/compactarGet", loginUser, verifyAdmin, asyncHandler(compactarGet));
router.post("/copy", loginUser, verifyAdmin, asyncHandler(copy));

module.exports = router;
