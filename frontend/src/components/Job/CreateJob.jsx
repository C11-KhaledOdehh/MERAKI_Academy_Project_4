import axios from "axios";
import React, { useState, useContext } from "react";
import { TokenContext } from "../../App";

const CreateJob = () => {
    const { token, userId } = useContext(TokenContext);
 const [jobTitle, setJobTitle] = useState("");
 const [jobType, setJobType] = useState("");
 const [industry, setIndustry] = useState("");
 const [jobLocation, setJobLocation] = useState("");
 const [experienceLevel, setExperienceLevel] = useState("");
 const [skills, setSkills] = useState("");
 const [languages, setLanguages] = useState("");
 const [howToApply, setHowToApply] = useState("");
 const [hoursOrShift, setHoursOrShift] = useState("");
 const [description, setDescription] = useState("");
 const [requirement, setRequirement] = useState("");
  const createNewJob = () => {
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const createNewJob = {
        jobTitle:jobTitle,
        jobType:jobType,
        industry:industry,
        jobLocation:jobLocation,
        experienceLevel:experienceLevel,
        skills:skills,
        languages:languages,
        howToApply:howToApply,
        hoursOrShift:hoursOrShift,
        description:description,
        requirement:requirement,
    };
    axios
      .post(`http://localhost:5000/job`, createNewJob, header)
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  
  return (
    <div>
      <input
        placeholder="job Title"
        onChange={(e) => setJobTitle(e.target.value)}
        value={jobTitle}
      />
      <br />
      <input
        placeholder="job Type"
        onChange={(e) => setJobType(e.target.value)}
        value={jobType}
      />
      <br />
      <input
        placeholder="industry"
        onChange={(e) => setIndustry(e.target.value)}
        value={industry}
      />
      <br />
      <input
        placeholder="job Location"
        onChange={(e) => setJobLocation(e.target.value)}
        value={jobLocation}
      />
      <br />
      <input
        placeholder="experience Level"
        onChange={(e) => setExperienceLevel(e.target.value)}
        value={experienceLevel}
      />
      <br />
      <input
        placeholder="skills"
        onChange={(e) => setSkills(e.target.value)}
        value={skills}
      />
      <br />
      <input
        placeholder="Languages"
        onChange={(e) => setLanguages(e.target.value)}
        value={languages}
      />
      <br />
      <input
        placeholder="how To Apply"
        onChange={(e) => setHowToApply(e.target.value)}
        value={howToApply}
      />
      <br />
      <input
        placeholder="hours Or Shift"
        onChange={(e) => setHoursOrShift(e.target.value)}
        value={hoursOrShift}
      />
      <br />
      <textarea
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <br />
      <textarea
        placeholder="requirement"
        onChange={(e) => setRequirement(e.target.value)}
        value={requirement}
      />
      <br />
       <button onClick={()=>{
          createNewJob();
      }}>create New Job</button> 
    </div>
  );
 };

export default CreateJob