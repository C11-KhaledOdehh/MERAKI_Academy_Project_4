const presentersModel = require("../models/presenters");
const seekerModel = require("../models/seeker");
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
            return seekerModel.findOneAndUpdate(
              { _id: seeker },
              { $addToSet: { jobApplied: job } },
              { new: true }
            );
          })
          .then((updatedSeeker) => {
            res.json(updatedSeeker);
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
            return seekerModel.findOneAndUpdate(
              { _id: seeker },
              { $addToSet: { jobApplied: job } },
              { new: true }
            );
          }) 

          .then((updatedSeeker) => {
            res.json(updatedSeeker);
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
    .populate("seeker")
    .then((presenter) => {
      if (!presenter) {
        return res.status(404).json({
          success: false,
          message: `No presenters found for the job id: ${job}`,
        });
      }

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
