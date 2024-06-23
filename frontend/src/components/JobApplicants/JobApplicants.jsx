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
    <div>
      {seekerApplied.map((elem, i) => (
        <div key={i}>
          <b>Full Name: {elem.fullName}</b><br />
          <b>Phone Number: {elem.phoneNumber}</b><br />
          <b>Email: {elem.email}</b><br />
          <b>Years of Experience: {elem.yearsOfExperience}</b><br />
        </div>
      ))}
    </div>
  );
}

export default JobApplicants