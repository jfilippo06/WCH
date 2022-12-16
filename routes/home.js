const express = require("express");
const { index, exit } = require("../controllers/home");
const asyncHandler = require("../middlewares/async-handler");
const loginUser = require("../middlewares/loginUser");
const router = express.Router();

router.get("/", asyncHandler(index));
router.get("/salir", loginUser, asyncHandler(exit));

module.exports = router;
