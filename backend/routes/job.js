const express = require("express");
const { createNewJob,getAllJob,getJobById,updateJobById,deleteJobById ,getJobByEmployerId} = require("../controllers/job");
const authentication=require("../middleware/authentication");
const authorization=require("../middleware/authorization");
const jobRouter = express.Router();
jobRouter.post("/",authentication,authorization("CREATE_JOB") ,createNewJob);
jobRouter.get("/", getAllJob);
jobRouter.get("/:id", getJobById);
jobRouter.put("/:id", authentication,authorization("UPDATE_JOB") ,updateJobById);
jobRouter.delete("/:id",authentication,authorization("DELETE_JOB") , deleteJobById);
jobRouter.get("/employer/:id",getJobByEmployerId);

module.exports = jobRouter;
