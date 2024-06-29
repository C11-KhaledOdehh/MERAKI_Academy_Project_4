import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { TokenContext } from "../../App";
import axios from "axios";
const JobDetails = () => {
  const { token,userId ,seekerIsLoggedIn} = useContext(TokenContext);
  const { jobId } = useParams();
  const [job, setJob] = useState({});
  const [isApply, setIsApply] = useState(false);

  const JobDetail = () => {
    axios
      .get(`http://localhost:5000/job/${jobId}`)
      .then((result) => {
        console.log(result.data.jobs);
        setJob(result.data.jobs);
      })
      .catch((err) => {
        console.log("err", err);
      });
    };
    const applyJob = () => {
      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const data = {
        seekerId: userId,
      };
     
      axios
        .post(`http://localhost:5000/presenters/${jobId}`, data, header)
        .then((result) => {
          console.log(result.data);
        })
        .catch((err) => {
          console.log("err", err);
        });
    };
  
  useEffect(() => {
    JobDetail();
  }, []);

  return (
    <div className="jobDetails">
      <div className="row">
        {job.employer && job.employer.companyLogo && (
          <div className="col-md-3" >
            <img
              src={job.employer.companyLogo}
              alt="Company Logo"
              style={{ height: '150px', width: '150px', paddingRight: '30px' }}
            />
            <p className="fw-bold">Company Name</p>
            <p >{job.employer.companyName}</p><hr/>
            <p className="fw-bold">City</p>
            <p >{job.employer.city}</p><hr/>
            <p className="fw-bold">Industry</p>
            <p >{job.employer.industry}</p><hr/>
            <p className="fw-bold">Weekends</p>
            <p >{job.employer.weekends}</p><hr/>
            <p className="fw-bold">WebSite</p>
            <a href={job.employer.website}>{job.employer.website}<hr/></a>
            <p className="fw-bold">CEO</p>
            <p >{job.employer.ceo}</p><hr/>
          </div>
        )}

        <div className="col-md-9">
          <h1>{job.jobTitle}</h1><hr/>
          <p className="fw-bold">Description</p>
          <p>{job.description}</p><hr/>

          <p className="fw-bold">Requirement</p>
          <p>{job.requirement}</p><hr/>
          
          <div class="row">
    <div class="col-md-6 offset-md-0">
      <div class="job-details">
              <p className="fw-bold">Type</p>
              <p >{job.jobType}</p><hr/>
              <p className="fw-bold">Industry</p>
              <p >{job.industry}</p><hr/>
              <p className="fw-bold">Location</p>
              <p >{job.jobLocation}</p><hr/>
              <p className="fw-bold">Skills</p>
              <p >{job.skills}</p>
            </div> </div>
            <div class="col-md-6 offset-md-0">
      <div class="job-details">
              <p className="fw-bold">Experience Level:</p>
              <p > {job.experienceLevel}</p><hr/>
              
              <p className="fw-bold">Languages</p>
              <p >{job.languages}</p><hr/>
              <p className="fw-bold">How to Apply</p>
          <p>{job.howToApply}</p><hr/>
          <p className="fw-bold">Hours/Shift</p>
          <p>{job.hoursOrShift}</p>
            </div>
          </div>
          </div>
          </div>  </div>
          
          {seekerIsLoggedIn && (
            <div className="d-grid gap-2 col-6 mx-auto">
         {!isApply ? (
              <button className="btn btn-primary" onClick={() => { applyJob(); setIsApply(true); }}>
                Apply
              </button>
            ) : (
              <button className="btn btn-primary" disabled>
                Applied
              </button>
            )}
          </div> )}  
        </div>
    
  );
};

export default JobDetails;
