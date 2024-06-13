import React, { useState, useContext, useEffect }from "react";
 import axios from "axios";
const Home = () => {
  const [job, setJob] = useState([]);
  const [jobTitle, setJobTitle] = useState("");
  const [industry, setIndustry] = useState("");
  const [description, setDescription] = useState("");
    const Job = () => {
      axios
        .get("http://localhost:5000/job")
        .then((result) => {
          //console.log(result.data.jobs);
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
          <div key={i}>
            <p>{job.jobTitle}</p>
            <p>{job.employer.companyName}</p>
            <p>{job.employer.city}</p>
            <p>{job.description}</p>
            <p>posted{daysSincePosted} Day</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;