const presentersModel = require("../models/presenters");

const createApplyForJob = (req, res) => {
  const job = req.params.id;
  const seeker = req.token.userId;
  presentersModel
  .findOneAndUpdate(
    {job},
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
};
const getAllPresenters = (req, res) => {
  presentersModel
    .find()
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
module.exports = { createApplyForJob ,getAllPresenters};
