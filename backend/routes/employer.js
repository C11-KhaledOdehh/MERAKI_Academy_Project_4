const express = require("express");
const {registerEmployer,loginEmployer} = require("../controllers/employer");

const employerRouter = express.Router();

employerRouter.post("/register", registerEmployer);
employerRouter.post("/login", loginEmployer);
module.exports = employerRouter;