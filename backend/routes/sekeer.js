const express = require("express");
const { registerSekeer, loginSekeer,updateSekeerInfoById } = require("../controllers/sekeer");

const seekerRouter = express.Router();

seekerRouter.post("/register", registerSekeer);

seekerRouter.post("/login", loginSekeer);
seekerRouter.put("/update/:id", updateSekeerInfoById);

module.exports = seekerRouter;
