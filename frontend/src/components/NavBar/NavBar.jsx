import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <b>JobIn</b>
      <button onClick={()=>{
navigate("/home")
    }}>Home</button>
      <button
        onClick={() => {
          navigate("/seekerOrEmployer");
        }}
      >
        Sign in
      </button>
      <button onClick={()=>{
navigate("/createJob")
    }}>Create Job</button>
    <button
        onClick={() => {
          navigate("/myJobs");
        }}
      >
        My Jobs
      </button>
      <hr />
    </div>
  );
};

export default NavBar;
