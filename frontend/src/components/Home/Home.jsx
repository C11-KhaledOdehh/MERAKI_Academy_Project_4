import React, { useState, useContext, useEffect }from "react"; import axios from "axios";

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
    {job.map((job, i) => (
      <div key={i}>
        <h2>{job.jobTitle}</h2>
        <p>Industry: {job.industry}</p>
        <p>Description: {job.description}</p>
      </div>
    ))}
  </div>
);
};

export default Home;