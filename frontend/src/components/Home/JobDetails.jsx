import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { TokenContext } from "../../App";
import axios from "axios";
const JobDetails = () => {
  const { token,userId } = useContext(TokenContext);
  const { jobId } = useParams();
  const [job, setJob] = useState({});
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
      console.log(token);
      console.log(jobId);
      console.log(userId);
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
    <div>
      <h1>{job.jobTitle}</h1>
      <p>Type:{job.jobType}</p>
      <p>Industry:{job.industry}</p>
      <p>Location: {job.jobLocation}</p>
      <p>Experience Level: {job.experienceLevel}</p>
      <p>Skills:{job.skills}</p>
      <p>Languages:{job.languages}</p>
      <p>How to Apply:{job.howToApply}</p>
      <p>Hours/Shift: {job.hoursOrShift}</p>
      <p>Description:{job.description}</p>
      <p>Requirement:{job.requirement}</p>
      <button
        onClick={() => {
          applyJob();
        }}
      >
        Apply
      </button>
    </div>
  );
};
export default JobDetails;
