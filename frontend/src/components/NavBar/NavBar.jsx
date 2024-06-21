import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../App";

const NavBar = () => {
  const {logout } = useContext(TokenContext);
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

      <button
        onClick={() => {
          navigate("/EmployerMyAccount");
        }}
      >
        My Account Employer
      </button>

      <button
        onClick={() => {
          navigate("/SeekerMyAccount");
        }}
      >
        My Account Seeker
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

      <button
        onClick={() => {
          navigate("/home");
       logout(); }}
      >
        Logout
      </button>
      <hr />
    </div>
  );
};

export default NavBar;
