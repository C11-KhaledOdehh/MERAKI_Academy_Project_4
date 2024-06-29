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
    <div className="container mt-4"> <hr/>
        <h2 className="mb-4" style={{ textAlign: 'center' }}>Update Any Field You Want!</h2>
        <div className="row">
        <div className="col-md-6 ">
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
      />
      </div>
      <div className="form-group mb-3">
      <input
       type="text"
                className="form-control"
        placeholder="experience Level"
        onChange={(e) => setExperienceLevel(e.target.value)}
        value={experienceLevel}
      />
      </div>
      <div className="form-group mb-3">
      <input
       type="text"
                className="form-control"
        placeholder="skills"
        onChange={(e) => setSkills(e.target.value)}
        value={skills}
      />
      </div></div>    <div className="col-md-6">
      <div className="form-group mb-3">
      <input
       type="text"
                className="form-control"
        placeholder="languages"
        onChange={(e) => setLanguages(e.target.value)}
        value={languages}
      />
      </div>
      <div className="form-group mb-3">
      <input
       type="text"
                className="form-control"
        placeholder="how To Apply"
        onChange={(e) => setHowToApply(e.target.value)}
        value={howToApply}
      />
      </div>
      <div className="form-group mb-3">
      <input
       type="text"
                className="form-control"
        placeholder="hours Or Shift"
        onChange={(e) => setHoursOrShift(e.target.value)}
        value={hoursOrShift}
      />
      </div>
      <div className="form-group mb-3">
      <textarea
       type="text"
                className="form-control"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      /></div>
      <div className="form-group mb-3">
      <textarea
       type="text"
                className="form-control"
        placeholder="requirement"
        onChange={(e) => setRequirement(e.target.value)}
        value={requirement}
      /></div>
      </div>
      </div> 
      <div className="form-group row">
              <div className="col-md-6 offset-md-3 text-center">
                <button
                  type="button"
                  className="btn btn-primary mt-3" onClick={
          update
      }>Update</button>
 </div>
 </div>

</div>



)
}

export default UpdateJob