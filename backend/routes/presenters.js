const express = require("express");

const { createApplyForJob ,getAllPresenters} = require("../controllers/presenters");
const authentication=require("../middleware/authentication");

const presentersRouter = express.Router();

presentersRouter.post("/:id", authentication,createApplyForJob);
presentersRouter.get("/:id", authentication,getAllPresenters);


module.exports = presentersRouter;