const express = require("express");
const { createNewJob,getAllJob,getJobById,updateJobById,deleteJobById } = require("../controllers/job");
const jobRouter = express.Router();
jobRouter.post("/", createNewJob);
jobRouter.get("/", getAllJob);
jobRouter.get("/:id", getJobById);
jobRouter.put("/:id", updateJobById);
jobRouter.delete("/:id", deleteJobById);

module.exports = jobRouter;
