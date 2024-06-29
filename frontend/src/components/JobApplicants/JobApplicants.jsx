import React, { useState,useContext, useEffect }from "react";
import { useParams } from "react-router-dom";
 import axios from "axios";
import { TokenContext } from "../../App";
const JobApplicants = () => {
  const { token } = useContext(TokenContext);
    const { jobId } = useParams();
    const [seekerApplied, setSeekerApplied] = useState([]);
 const seekerJobApplicants=()=>{
    const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
        axios
        .get(`http://localhost:5000/presenters/${jobId}`,header)
        .then((result) => {
       console.log(result.data.presenters.seeker)
setSeekerApplied(result.data.presenters.seeker)
        })
        .catch((err) => {
          console.log("err", err);
        });
 };
 useEffect(() => {
    seekerJobApplicants();
}, []);
    
return (
    <div className="seekerInfo">
      {seekerApplied.map((elem, i) => (
    <div className="row mb-4" style={{
      margin: '40px',
      backgroundColor: 'rgb(238, 237, 237)',
      padding: '10px',
      borderRadius: '10px'
    }}key={i}>
    <div className="col-md-3">
      <img
        src={`${elem.profilePicture}`}
        className="img-fluid rounded"
        alt="Profile Pic"
        style={{ width: '150px', height: '150px' }}
      />
    </div>
    <div className="col-md-6">
      <div className="mb-2"><b>Full Name:</b> {elem.fullName}</div>
      <div className="mb-2"><b>Phone Number:</b> {elem.phoneNumber}</div>
      <div className="mb-2"><b>Email:</b> {elem.email}</div>
      <div className="mb-3">
        <b>CV:</b> <a href={`${elem.cv}`} target="_blank" rel="noopener noreferrer">Show CV</a>
      </div>
      <div className="mb-3"><b>Education:</b> {elem.education}</div>
      <div className="mb-3"><b>Years Of Experience:</b> {elem.yearsOfExperience} Years</div></div></div>
      ))}
    </div>
  );
}

export default JobApplicants