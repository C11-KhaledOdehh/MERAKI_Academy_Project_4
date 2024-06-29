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
    <div className="containerJob m-3 ">
    <h2 className="mt-10 text-center">Create A New Job !</h2>
    <div className="row">
<div className="col-md-6 offset-md-3">
      <div className="form-group mb-3">
      <input
       type="text"
                className="form-control"
        placeholder="job Title"
        onChange={(e) => setJobTitle(e.target.value)}
        value={jobTitle}
      />
     </div>
     <div className="form-group mb-3">
      <input
       type="text"
                className="form-control"
        placeholder="job Type"
        onChange={(e) => setJobType(e.target.value)}
        value={jobType}
      />
      </div>
      <div className="form-group mb-3">
      <input
      type="text"
                className="form-control"
        placeholder="industry"
        onChange={(e) => setIndustry(e.target.value)}
        value={industry}
      />
    </div>
    <div className="form-group mb-3">
      <input
      type="text"
                className="form-control"
        placeholder="job Location"
        onChange={(e) => setJobLocation(e.target.value)}
        value={jobLocation}
      /> </div>
       <div className="form-group mb-3">
      <input
      type="text"
                className="form-control"
        placeholder="experience Level"
        onChange={(e) => setExperienceLevel(e.target.value)}
        value={experienceLevel}
      /> </div>
       <div className="form-group mb-3">
      <input
      type="text"
                className="form-control"
        placeholder="skills"
        onChange={(e) => setSkills(e.target.value)}
        value={skills}
      /> </div>
      <div className="form-group mb-3">
      <input
      type="text"
                className="form-control"
        placeholder="Languages"
        onChange={(e) => setLanguages(e.target.value)}
        value={languages}
      /> </div>
       <div className="form-group mb-3">
      <input
      type="text"
                className="form-control"
        placeholder="how To Apply"
        onChange={(e) => setHowToApply(e.target.value)}
        value={howToApply}
      /> </div>
       <div className="form-group mb-3">
      <input
      type="text"
                className="form-control"
        placeholder="hours Or Shift"
        onChange={(e) => setHoursOrShift(e.target.value)}
        value={hoursOrShift}
      /> </div>
       <div className="form-group mb-3">
      <textarea
                className="form-control"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      /> </div>
       <div className="form-group mb-3">
      <textarea
                      className="form-control"

        placeholder="requirement"
        onChange={(e) => setRequirement(e.target.value)}
        value={requirement}
      />
 </div>    <div className="form-group row">
 <div className="col-sm-12 text-center">
     <button  type="button"
                  className="btn btn-primary mt-3" onClick={()=>{
          createNewJob();
      }}>Create New Job</button> 
    </div>
    </div>
    </div>
    </div>
            </div>
  );
 };

export default CreateJob