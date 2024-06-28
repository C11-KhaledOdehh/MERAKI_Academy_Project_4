import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";
import { TokenContext } from "../../App";
import UpdateJob from "./UpdateJob";
const EmployerJobDetails = () => {
  const { jobId } = useParams();
  const { token } = useContext(TokenContext);
  const [jobDetails, setJobDetails] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const navigate = useNavigate();

  const jobDetail = () => {
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`http://localhost:5000/job/${jobId}`, header)
      .then((result) => {
        setJobDetails(result.data.jobs);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const Delete = () => {
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .delete(`http://localhost:5000/job/${jobId}`, header)
      .then((result) => {
        console.log(result);
        navigate("/myJobs")
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  useEffect(() => {
    jobDetail();
  }, []);

  if (!jobDetails) {
    return <div></div>;
  }

  return (
    
    <div className="jobDetails">
      <div className="row">
        
          <div className="col-md-3">
            <img
              src={jobDetails.employer.companyLogo}
              alt="Company Logo"
              style={{ height: '150px', width: '150px', paddingRight: '30px' }}
            />
          </div>
        

        <div className="col-md-9">
          <h1>{jobDetails.jobTitle}</h1><hr/>
          <p className="fw-bold">Description</p>
          <p>{jobDetails.description}</p><hr/>

          <p className="fw-bold">Requirement</p>
          <p>{jobDetails.requirement}</p><hr/>
          </div>
          
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div class="job-details">
        <p class="fw-bold">Type</p>
        <p>{jobDetails.jobType}</p>
        <hr/>
        <p class="fw-bold">Industry</p>
        <p>{jobDetails.industry}</p>
        <hr/>
        <p class="fw-bold">Location</p>
        <p>{jobDetails.jobLocation}</p>
        <hr/>
        <p class="fw-bold">Skills</p>
        <p>{jobDetails.skills}</p>
      </div>
    </div>
    <div class="col-md-3">
      <div class="job-details">
        <p class="fw-bold">Experience Level</p>
        <p>{jobDetails.experienceLevel} Years</p>
        <hr/>
        
        <p class="fw-bold">Languages</p>
        <p>{jobDetails.languages}</p>
        <hr/>
        <p class="fw-bold">How to Apply</p>
        <p>{jobDetails.howToApply}</p>
        <hr/>
        <p class="fw-bold">Hours/Shift</p>
        <p>{jobDetails.hoursOrShift}</p>
      </div>
    </div>
 </div>
   </div>   
   <div className="container mt-4">
{isUpdate ? (
  <UpdateJob setIsUpdate={setIsUpdate} jobDetail={jobDetail} jobDetails={jobDetails} />
) : (
  <div className="d-flex justify-content-center mb-3">
    <button
      className="btn btn-primary me-2"
      onClick={() => {
        setIsUpdate(true);
      }}
    >
      Update job
    </button>
    <button
      className="btn btn-danger"
      onClick={() => {
        Delete();
      }}
    >
      Delete job
    </button>
  </div>
)}
</div>
      
     
</div>
  );
};

export default EmployerJobDetails;
