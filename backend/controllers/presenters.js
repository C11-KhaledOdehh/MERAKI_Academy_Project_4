const presentersModel = require("../models/presenters");
const jobModel = require("../models/job");

const createApplyForJob = (req, res) => {
  const job = req.params.id;
  const seeker = req.token.userId;
  presentersModel.findOne({ job: job })
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
              console.log(err);
            });
}  

}).catch((err)=>{console.log(err);}) 
  
};

module.exports = { createApplyForJob };
