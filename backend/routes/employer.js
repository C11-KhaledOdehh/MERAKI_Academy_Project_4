const express = require("express");
const {registerEmployer,loginEmployer,updateEmployerInfoById} = require("../controllers/employer");
const authentication=require("../middleware/authentication");
const authorization=require("../middleware/authorization");
const employerRouter = express.Router();

employerRouter.post("/register", registerEmployer);
employerRouter.post("/login", loginEmployer);
employerRouter.put("/update/:id", authentication,authorization("UPDATE_INFO") ,updateEmployerInfoById);

module.exports = employerRouter;