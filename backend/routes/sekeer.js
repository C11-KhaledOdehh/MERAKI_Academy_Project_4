const express = require("express");
const { register, login } = require("../controllers/sekeer");

const seekerRouter = express.Router();

seekerRouter.post("/register", register);

seekerRouter.post("/login", login);

module.exports = seekerRouter;
