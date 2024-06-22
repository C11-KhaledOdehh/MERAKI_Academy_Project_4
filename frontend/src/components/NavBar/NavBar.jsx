import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../App";

const NavBar = () => {
  const { seekerIsLoggedIn, employerIsLoggedIn, logout } = useContext(TokenContext);
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/home")}>Home</button>
      
      {!seekerIsLoggedIn && !employerIsLoggedIn && (
        <button onClick={() => navigate("/seekerOrEmployer")}>Sign in</button>
      )}

      {seekerIsLoggedIn && (
        <div>
          <button onClick={() => navigate("/SeekerMyAccount")}>My Account Seeker</button>
          <button onClick={() => {
            navigate("/home");
            logout();
          }}>Logout</button>
        </div>
      )}
      
      {employerIsLoggedIn && (
        <div>
          <button onClick={() => navigate("/EmployerMyAccount")}>My Account Employer</button>
          <button onClick={() => navigate("/createJob")}>Create Job</button>
          <button onClick={() => navigate("/myJobs")}>My Jobs</button>
          <button onClick={() => {
            navigate("/home");
            logout();
          }}>Logout</button>
        </div>
      )}

      <hr />
    </div>
  );
};

export default NavBar;
