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
    <div>
      <h1>{jobDetails.jobTitle}</h1>
      <p>{jobDetails.description}</p>
      <p>{jobDetails.employer.companyName}</p>
      <img src= {`${jobDetails.employer.companyLogo}`}/>

      <button onClick={()=>{Delete();}}>Delete job</button>
      {isUpdate ? (
        <UpdateJob setIsUpdate={setIsUpdate} jobDetail={jobDetail} jobDetails={jobDetails} />
      ) : (
        <button
          onClick={() => {
            setIsUpdate(true);
          }}
        >
          Update job
        </button>
      )}
    </div>
  );
};

export default EmployerJobDetails;
