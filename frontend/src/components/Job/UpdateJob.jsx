import axios from "axios";
import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { TokenContext } from "../../App";
const UpdateJob = ({setIsUpdate,jobDetail,jobDetails}) => {
    const { token } = useContext(TokenContext);
    const { jobId } = useParams();
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

    const update = () => {
        const header = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const updated = {
          jobTitle: jobTitle || jobDetails.jobTitle,
          jobType: jobType || jobDetails.jobType,
          industry: industry || jobDetails.industry,
          jobLocation: jobLocation || jobDetails.jobLocation,
          experienceLevel: experienceLevel || jobDetails.experienceLevel,
          skills: skills || jobDetails.skills,
          languages: languages || jobDetails.languages,
          howToApply: howToApply || jobDetails.howToApply,
          hoursOrShift: hoursOrShift || jobDetails.hoursOrShift,
          description: description || jobDetails.description,
          requirement: requirement || jobDetails.requirement,
        };
        axios
          .put(`http://localhost:5000/job/${jobId}`, updated, header)
          .then((result) => {
            console.log(result.data);
            setIsUpdate(false); 
      jobDetail();
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
        placeholder="languages"
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

<button onClick={
          update
      }>Update</button>


</div>



)
}

export default UpdateJob