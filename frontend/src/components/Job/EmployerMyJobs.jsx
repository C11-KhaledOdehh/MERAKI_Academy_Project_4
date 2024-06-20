import React, { useState, useContext, useEffect }from "react";
 import axios from "axios";
import { TokenContext } from "../../App";
import { useNavigate } from "react-router-dom";
import EmployerJobDetails from "./EmployerJobDetails";
const EmployerMyJobs = () => {
  const { token, userId } = useContext(TokenContext);
    const [job, setJob] = useState([]);
    const navigate = useNavigate();

    const employerJob = () => {

      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios
        .get(`http://localhost:5000/job/employer/${userId}`,header)
        .then((result) => {
       setJob(result.data.jobs)
        })
        .catch((err) => {
          console.log("err", err);
        });
 };
 useEffect(() => {
  employerJob();
}, []);
return (
    <div>
      {job.map((job, i) => {     
        return (
          <div key={i}  style={{ border: "2px solid black", padding: "10px", margin: "10px 0" }}onClick={()=>{navigate(`/jobDetails/${job._id}`)

          }}>
            <p>{job.jobTitle}</p>
            
          </div>
        );
      })}
    </div>
  );
};
export default EmployerMyJobs