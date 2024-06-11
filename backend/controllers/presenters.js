const presentersModel = require("../models/presenters");
const jobModel = require("../models/job");

const createApplyForJob = (req, res) => {
    const jobId = req.params.id;
    const userId = req.token.userId;
console.log(jobId);
console.log(userId);

presentersModel.findOne({ job: jobId })
        .then((job) => {
            if (!job) {
               return  res.status(404).json({
                    success: false,
                    message: `Job not found`,
                });
            } 
            
            const jobApplied = new presentersModel({
               job,
               seeker, 
            });

             jobApplied.save()
                .then((savedJob) => {console.log(savedJob);
                     presentersModel.findByIdAndUpdate(
                       
                       {_id:savedJob._id},
                        { $push: { seeker: userId } },
                        { new: true }
                    ).then((result)=>{
                       res.json(result) 
                    }).catch((err)=>{console.log(err);
                    })
                
                }).catch((err)=>{
console.log(err);
                })
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