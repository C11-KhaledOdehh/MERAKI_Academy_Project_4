import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../App";

import './navBar.css'
const NavBar = () => {
  const { seekerIsLoggedIn, employerIsLoggedIn, logout,setShowNav,setGoToPageSeekerOrEmployer } =
    useContext(TokenContext);
  const navigate = useNavigate();
const [homePage, setHomePage] = useState(false);
  useEffect(() => {
    if (employerIsLoggedIn) {
       
       setHomePage(true) 
       
    }
  }, [employerIsLoggedIn]);
  useEffect(() => {
    if (seekerIsLoggedIn) {
      
    setHomePage(true)}
  }, [seekerIsLoggedIn]);
  return (
    <div className="NavBar">
<b>JOBin</b>
 {!homePage && (<div><button onClick={() => navigate("/home")}>Home</button>
  <button onClick={() => { navigate("/seekerOrEmployer");setGoToPageSeekerOrEmployer("registerSeeker");setShowNav(false) }}>Sign in</button>
</div>)}
{seekerIsLoggedIn && (<>
 <button onClick={() => navigate("/home")}>Home</button>
          <button onClick={() => navigate("/SeekerMyAccount")}> My Account Seeker</button>
          <button onClick={() => navigate("/jobApplied")}>Job Applied</button>
          <button onClick={() => {navigate("/home");      
setHomePage(false) 

            logout();}}>Logout</button>
</>)}
         
{employerIsLoggedIn && (<>
  <button onClick={() => navigate("/EmployerMyAccount")}>My Account Employer </button>
          <button onClick={() => navigate("/myJobs")}>My Jobs</button>
          <button onClick={() => navigate("/createJob")}>Create Job</button>

          <button onClick={() => { navigate("/home");setHomePage(false);

 logout();}}>Logout</button>
</>)}       
         
      
          
         
        
          <hr />
       
    </div>
  );
};

export default NavBar;
