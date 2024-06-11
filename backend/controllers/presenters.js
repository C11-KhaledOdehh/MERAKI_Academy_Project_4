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
          })
          .catch((err) => {
            res.status(500).json({
              success: false,
              message: `Server Error`,
              err: err.message,
            });
          });
      }
      presentersModel
        .findOne({ job: job })

        .then((result) => {
          presentersModel
            .findOneAndUpdate(
              result,
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

module.exports = { createApplyForJob };
