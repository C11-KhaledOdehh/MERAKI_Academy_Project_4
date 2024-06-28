import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../App";
import { Button } from "react-bootstrap";
import SeekerOrEmployer from "../RegisterOrLogin/SeekerOrEmployer";

const NavBar = () => {
  const { seekerIsLoggedIn, employerIsLoggedIn, logout,setShowNav } =
    useContext(TokenContext);
  const navigate = useNavigate();
const [seekerOrEmployer,setSeekerOrEmployer]=useState(false)
  useEffect(() => {
    if (employerIsLoggedIn) {
    /*   setHomePage(true) */

    }
  }, [employerIsLoggedIn]);
  useEffect(() => {
    if (seekerIsLoggedIn) {
    /*   setHomePage(true) */
    }
  }, [seekerIsLoggedIn]);
  return (
    <div>

  <Button onClick={() => navigate("/home")}>Home</Button>
  <Button onClick={() => { navigate("/seekerOrEmployer");setShowNav(false) }}>Sign in</Button>

{seekerIsLoggedIn && (<>
 <Button onClick={() => navigate("/home")}>Home</Button>
          <Button onClick={() => navigate("/SeekerMyAccount")}> My Account Seeker</Button>
          <Button onClick={() => navigate("/jobApplied")}>Job Applied</Button>
          <Button onClick={() => {navigate("/home");      

            logout();}}>Logout</Button>
</>)}
         
{employerIsLoggedIn && (<>
  <Button onClick={() => navigate("/EmployerMyAccount")}>My Account Employer </Button>
          <Button onClick={() => navigate("/myJobs")}>My Jobs</Button>
          <Button onClick={() => navigate("/createJob")}>Create Job</Button>
          <Button onClick={() => { navigate("/home"); logout();}}>Logout</Button>
</>)}       
         
      
          
         
        
          <hr />
       
    </div>
  );
};

export default NavBar;
