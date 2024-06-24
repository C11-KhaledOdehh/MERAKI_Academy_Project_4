import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../App";

const NavBar = () => {
  const { seekerIsLoggedIn, employerIsLoggedIn, logout } =
    useContext(TokenContext);
  const navigate = useNavigate();
  const [signIn, setSignIn] = useState(false);
  const [homePage, setHomePage] = useState(false);
  const [seekerAccount, setSeekerAccount] = useState(false);
  const [employerAccount, setEmployerAccount] = useState(false);
  useEffect(() => {
    if (employerIsLoggedIn) {
      setEmployerAccount(true);
      setSignIn(false);
      setHomePage(true);
    } else {
      setEmployerAccount(false);
      setHomePage(false);
    }
  }, [employerIsLoggedIn]);
  useEffect(() => {
    if (seekerIsLoggedIn) {
      setSeekerAccount(true);
      setSignIn(false);
      setHomePage(true);
    } else {
      setSeekerAccount(false);
      setHomePage(false);
    }
  }, [seekerIsLoggedIn]);
  return (
    <div>
      {!homePage && (
        <div>
          <button onClick={() => navigate("/home")}>Home</button>
          <button
            onClick={() => {
              setHomePage(true);
              setSignIn(true);
              navigate("/registerSeeker");
            }}
          >
            Sign in
          </button>
        </div>
      )}

      {signIn && (
        <div>
          <button onClick={() => navigate("/registerSeeker")}>Seeker</button>
          <button onClick={() => navigate("/registerEmployer")}>
            Employer
          </button>
        </div>
      )}

      {seekerAccount && (
        <div>
          <button onClick={() => navigate("/home")}>Home</button>
          <button onClick={() => navigate("/SeekerMyAccount")}>
            {" "}
            My Account Seeker
          </button>
          <button
            onClick={() => {
              navigate("/home");
              logout();
            }}
          >
            Logout
          </button>
        </div>
      )}

      {employerAccount && (
        <div>
          <button onClick={() => navigate("/EmployerMyAccount")}>
            {" "}
            My Account Employer{" "}
          </button>
          <button onClick={() => navigate("/myJobs")}>My Jobs</button>
          <button onClick={() => navigate("/createJob")}>Create Job</button>
          <button
            onClick={() => {
              navigate("/home");
              logout();
            }}
          >
            Logout
          </button>
        </div>
      )}

      <hr />
    </div>
  );
};

export default NavBar;
