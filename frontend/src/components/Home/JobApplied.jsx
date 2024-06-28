import axios from "axios";
import React ,{ useEffect, useContext, useState }from 'react'
import { TokenContext } from "../../App";
const JobApplied = () => {
    const { token,userId} = useContext(TokenContext);
    const [seeker, setSeeker] = useState([]);
    const myAccount=()=>{
     
      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      
      axios
      .get("http://localhost:5000/seeker", header)
      .then((result) => {
        console.log(result.data.seeker);
        setSeeker(result.data.seeker);
       
        
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  
  useEffect(() => {
    myAccount();
  }, []);
  if (!seeker) {
    return <div>Loading...</div>;
  }

  return (
    <div className="jobDetails">
      {seeker.map((seeker, index) => (
        
          <div key={index} className="card-body">
            {seeker.jobApplied.map((job, idx) => (
              <div key={job._id} className="card mb-3">
                <div className="card-body">
                  <h4>{job.jobTitle}</h4><hr/>
                   <p  className="fw-bold">Description </p>
                  <p> {job.description}</p>
                  <p  className="fw-bold">Requirements</p> <p>{job.requirement}</p>
                  <p  className="fw-bold">Job Type</p><p>{job.jobType}</p>
                  <p  className="fw-bold">Industry</p> <p>{job.industry}</p>
                  <p  className="fw-bold">Location</p> <p>{job.jobLocation}</p>
                  <p  className="fw-bold">Experience Level</p><p>{job.experienceLevel} Years</p>
                  <p  className="fw-bold">Skills</p><p>{job.skills}</p>
                  <p  className="fw-bold">Languages</p> <p>{job.languages}</p>
                 
                  <p  className="fw-bold">Date Applied</p> <p>{new Date(job.date).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        
      ))}
    </div>
  );
};

export default JobApplied;