import axios from "axios";
import React ,{ useEffect, useContext, useState }from 'react'
import { TokenContext } from "../../App";
const JobApplied = () => {
    const { token,userId} = useContext(TokenContext);
    const [seeker, setSeeker] = useState([]);
    const myAccount=()=>{
     
      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      
      axios
      .get("http://localhost:5000/seeker", header)
      .then((result) => {
        console.log(result.data.seeker);
        setSeeker(result.data.seeker);
       
        
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  
  useEffect(() => {
    myAccount();
  }, []);
  return (
    <div>
       {/*  {seeker.map((elem, i) => (
            <div key={elem._id}>
                <h3>Seeker Details</h3>
                <p><b>Full Name:</b> {elem.fullName}</p>
                <p><b>Email:</b> {elem.email}</p>
                <p><b>Phone Number:</b> {elem.phoneNumber}</p>
                <p><b>Jobs Applied:</b></p>
                <ul>
                    {elem.jobApplied.map((jobId, index) => (
                        <li key={index}>{jobId}</li>
                    ))}
                </ul>
                <p><b>Role:</b> {elem.role.role}</p>
                <p><b>Permissions:</b> {elem.role.permissions.join(', ')}</p>
            </div>
        ))} */}
    </div>
);
};


export default JobApplied