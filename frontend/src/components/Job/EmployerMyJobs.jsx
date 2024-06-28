import React, { useState, useContext, useEffect }from "react";
 import axios from "axios";
import { TokenContext } from "../../App";
import { useNavigate } from "react-router-dom";
const EmployerMyJobs = () => {
  const { token, userId } = useContext(TokenContext);
    const [job, setJob] = useState([]);
    const navigate = useNavigate();

    const employerJob = () => {

      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios
        .get(`http://localhost:5000/job/employer/${userId}`,header)
        .then((result) => {
          console.log(result.data.jobs);
       setJob(result.data.jobs)
        })
        .catch((err) => {
          console.log("err", err);
        });
 };
 useEffect(() => {
  employerJob();
}, []);
return (
  <div className="jobContainer">
    {job.map((job, i) => (
      <div className="job"
        key={i}
        style={{
          display: "flex",
          alignItems: "center",
          padding: "20px",
          marginBottom: "20px",
        }}
        onClick={() => {
          navigate(`/jobDetails/${job._id}`);
        }}
      >
        <div style={{ marginRight: "20px" }}>
          <img
            src={job.employer.companyLogo}
            alt="Company Logo"
            style={{ height: "100px", width: "100px", marginBottom: "10px" }}
          />
        </div>

      
        <div style={{ flexGrow: 1 }}>
          <p className="fw-bold">{job.jobTitle}</p>
        </div>

        
        <div >
          <button  className="btn btn-primary"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/jobApplicants/${job._id}`);
            }}
          >
            Job applicants
          </button>
        </div>
      </div>
    ))}
  </div>
);
};

export default EmployerMyJobs;