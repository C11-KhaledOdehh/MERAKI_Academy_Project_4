import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { TokenContext } from "../../App";

const EmployerJobDetails = () => {
  const { jobId } = useParams();
  const { token } = useContext(TokenContext);
  const [jobDetails, setJobDetails] = useState(null);

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

  useEffect(() => {
    jobDetail();
  }, []);

  if (!jobDetails) {
    return <div></div>;
  }

  return (
    <div>
      <h1>{jobDetails.jobTitle}</h1>
      
      <p>{jobDetails.description}</p> 
      <p>{jobDetails.employer.companyName}</p> 
<button>Delete job</button>
<button>Update job</button>

      
    </div>
  );
};

export default EmployerJobDetails;
