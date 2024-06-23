const presentersModel = require("../models/presenters");

const createApplyForJob = (req, res) => {
  const job = req.params.id;
  const seeker = req.token.userId;

  presentersModel
    .findOne({ job: job })
    .then((exist) => {
      if (!exist) {
        const jobApplied = new presentersModel({
          job,
          seeker,
        });

        jobApplied
          .save()
          .then((savedJob) => {
            console.log(savedJob);
            res.json(savedJob);
          })
          .catch((err) => {
            res.status(500).json({
              success: false,
              message: `Server Error`,
              err: err.message,
            });
          });
      } else {
        presentersModel
          .findOneAndUpdate(
            { job: job },
            { $addToSet: { seeker: seeker } },
            { new: true }
          )
          .then((result) => {
            res.json(result);
          })
          .catch((err) => {
            res.status(500).json({
              success: false,
              message: `Server Error`,
              err: err.message,
            });
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

const getAllPresenters = (req, res) => {
  const job = req.params.id;
  presentersModel
    .findOne({ job: job })
    .then((presenter) => {
      res.status(200).json({
        success: true,
        message: `All the presenters`,
        presenters: presenter,
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

module.exports = { createApplyForJob, getAllPresenters };
