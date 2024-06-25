import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../App";
import { Button } from "react-bootstrap";
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
          <Button onClick={() => navigate("/home")}>Home</Button>
          <Button
            onClick={() => {
              setHomePage(true);
              setSignIn(true);
              navigate("/registerSeeker");
            }}
          >
            Sign in
          </Button>
        </div>
      )}

      {signIn && (
        <div>
          <Button onClick={() => navigate("/registerSeeker")}>Seeker</Button>
          <Button onClick={() => navigate("/registerEmployer")}>
            Employer
          </Button>
        </div>
      )}

      {seekerAccount && (
        <div>
          <Button onClick={() => navigate("/home")}>Home</Button>
          <Button onClick={() => navigate("/SeekerMyAccount")}>
            {" "}
            My Account Seeker
          </Button>
          <Button
            onClick={() => {
              navigate("/home");
              logout();
            }}
          >
            Logout
          </Button>
        </div>
      )}

      {employerAccount && (
        <div>
          <button onClick={() => navigate("/EmployerMyAccount")}>
            {" "}
            My Account Employer{" "}
          </button>
          <Button onClick={() => navigate("/myJobs")}>My Jobs</Button>
          <Button onClick={() => navigate("/createJob")}>Create Job</Button>
          <Button
            onClick={() => {
              navigate("/home");
              logout();
            }}
          >
            Logout
          </Button>
        </div>
      )}

      <hr />
    </div>
  );
};

export default NavBar;
