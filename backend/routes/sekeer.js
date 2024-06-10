const express = require("express");
const { registerSekeer, loginSekeer } = require("../controllers/sekeer");

const seekerRouter = express.Router();

seekerRouter.post("/register", registerSekeer);

seekerRouter.post("/login", loginSekeer);

module.exports = seekerRouter;
