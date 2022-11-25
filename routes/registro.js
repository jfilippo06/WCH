const express = require("express");
const { getFranelaController } = require("../controllers/registro");
const asyncHandler = require("../middlewares/async-handler");
const loginUser = require("../middlewares/loginUser");
const router = express.Router();

router.get("/franela", loginUser, asyncHandler(getFranelaController));

module.exports = router;
