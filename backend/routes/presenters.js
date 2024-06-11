const express = require("express");

const { createApplyForJob } = require("../controllers/presenters");
const authentication=require("../middleware/authentication");

const presentersRouter = express.Router();

presentersRouter.post("/:id", authentication,createApplyForJob);

module.exports = presentersRouter;