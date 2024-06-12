import React from 'react'
import { useNavigate } from "react-router-dom";
const SeekerOrEmployer = () => {
    const navigate = useNavigate();

  return (
    <div><button onClick={()=>{
        navigate("/registerSeeker")}}>Seeker</button>
        <button onClick={()=>{
        navigate("/registerEmployer")}}>Employer</button></div>
  )
}

export default SeekerOrEmployer