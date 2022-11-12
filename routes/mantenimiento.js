const express = require("express");
const {
  respaldarGet,
  copy,
  restaurarGet,
  paste,
  compactar,
} = require("../controllers/mantenimiento");
const asyncHandler = require("../middlewares/async-handler");
const loginUser = require("../middlewares/loginUser");
const router = express.Router();

router.get("/respaldar", loginUser, asyncHandler(respaldarGet));
router.get("/restaurar", loginUser, asyncHandler(restaurarGet));
router.get("/paste/:id", loginUser, asyncHandler(paste));
router.get("/compactar", loginUser, asyncHandler(compactar));
router.post("/copy", loginUser, asyncHandler(copy));

module.exports = router;
