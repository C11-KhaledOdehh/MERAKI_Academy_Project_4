const jobModel = require("../models/job");
const presentersModel = require("../models/presenters");
const createNewJob = (req, res) => {
  const employerId = req.token.userId
  const {
    jobTitle,
    jobType,
    industry,
    jobLocation,
    experienceLevel,
    skills,
    languages,
    howToApply,
    hoursOrShift,
    description,
    requirement,
     } = req.body;
     
  const newJob = new jobModel({
    jobTitle,
    jobType,
    industry,
    jobLocation,
    experienceLevel,
    skills,
    languages,
    howToApply,
    hoursOrShift,
    description,
    requirement,
    employer:employerId,
   date:new Date()});

  newJob
    .save()
    .then((job) => {
      const jobApplied = new presentersModel({
        job
      });

      jobApplied
        .save()
        .then((savedJob) => {
      res.status(201).json({
        success: true,
        message: `Job created`,
        job: savedJob,
      });
        })
        .catch((err) => {
          res.status(500).json({
            success: false,
            message: `Server Error`,
            err: err.message,
          });
        });

    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

const getAllJob = (req, res) => {
  jobModel
    .find().populate("employer")
    .then((job) => {
      if (job.length) {
        res.status(200).json({
          success: true,
          message: `All the job`,
          jobs: job,
        });
      } else {
        res.status(200).json({
          success: false,
          message: `No job Yet`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

const getJobById = (req, res) => {
  const id = req.params.id;
  jobModel
    .findById(id)
    .populate("employer")
    .then((job) => {
      if (!job) {
        return res.status(404).json({
          success: false,
          message: `The job with id => ${id} not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `The job ${id} `,
        jobs: job,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

const updateJobById = (req, res) => {
  const jobId = req.params.id;
  const {
    jobTitle,
    jobType,
    industry,
    jobLocation,
    experienceLevel,
    skills,
    languages,
    howToApply,
    hoursOrShift,
    description,
    requirement,
  } = req.body;
  jobModel
    .findByIdAndUpdate(jobId, {
      jobTitle,
      jobType,
      industry,
      jobLocation,
      experienceLevel,
      skills,
      languages,
      howToApply,
      hoursOrShift,
      description,
      requirement,
    },{new:true})
    .then((newJob) => {
      if (newJob) {
        res.status(200).json({
          success: true,
          message: "Job updated",
          jobs: newJob,
        });
      } else {
        res.status(404).json({
          success: false,
          message: `The employer ${{ jobId }} has no job`,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err: error,
      });
    });
};
const deleteJobById = (req, res) => {
  const jobId = req.params.id;
  jobModel
    .findByIdAndDelete(jobId)
    .then((job) => {
      if (!job) {
        return res.status(404).json({
          success: false,
          message: `The job with id => ${jobId} not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `Job deleted`,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

const getJobByEmployerId = (req, res) => {
  const id = req.params.id;
  jobModel
    .find({employer:id})
    .populate("employer")
    .then((job) => {
      if (!job) {
        return res.status(404).json({
          success: false,
          message: `The job with id => ${id} not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `The job ${id} `,
        jobs: job,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
module.exports = {
  createNewJob,
  getAllJob,
  getJobById,
  updateJobById,
  deleteJobById,
  getJobByEmployerId
};
