import React, { useState, useContext, useEffect }from "react";
 import axios from "axios";
 import JobDetails from "./JobDetails";
 import {useNavigate} from "react-router-dom";

const Home = () => {
  const [job, setJob] = useState([]);
  const navigate = useNavigate();

    const Job = () => {
      axios
        .get("http://localhost:5000/job")
        .then((result) => {
       setJob(result.data.jobs)
        })
        .catch((err) => {
          console.log("err", err);
        });
 };
 useEffect(() => {
  Job();
}, []);
return (
    <div>
      {job.map((job, i) => {
        const date = new Date(job.date);
        const today = new Date();
        const timeDiff = today - date;
        const daysSincePosted = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        
        return (
          <div key={i}  style={{ border: "2px solid black", padding: "10px", margin: "10px 0" }} onClick={()=>{
         navigate(`/jobDetail/${job._id}`);  }}>
            <p>{job.jobTitle}</p>
            <p>{job.employer.companyName}</p>

            <p>{job.description}</p>
            <p>posted {daysSincePosted} Days ago</p>
          </div>
        );
      })}
            

    </div>
    
  );
};

export default Home;