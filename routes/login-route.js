// 4
// Centraliezed routes here
// Controller used here as like ---> On which route which req-res function should execute

const express = require("express");
const router = express.Router();

// Controller imported for use
const { login } = require("../controller/login.controller");

router.post("/login", login);

module.exports = router;
