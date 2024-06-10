const express = require("express");
const {registerEmployer,loginEmployer,updateEmployerInfoById} = require("../controllers/employer");

const employerRouter = express.Router();

employerRouter.post("/register", registerEmployer);
employerRouter.post("/login", loginEmployer);
employerRouter.put("/update/:id", updateEmployerInfoById);

module.exports = employerRouter;