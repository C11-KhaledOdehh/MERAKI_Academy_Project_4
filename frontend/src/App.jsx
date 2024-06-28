import { Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import RegisterSeeker from './components/RegisterOrLogin/RegisterSeeker';
import LoginSeeker from './components/RegisterOrLogin/LoginSeeker';
import LoginEmployer from './components/RegisterOrLogin/LoginEmployer';
import RegisterEmployer from './components/RegisterOrLogin/RegisterEmployer';
import Home from "./components/Home/Home";
import EmployerMyAccount from "./components/EmployerMyAccount/EmployerMyAccount";
import './App.css';
import React, { createContext, useState,useEffect } from "react";
import CreateJob from "./components/Job/CreateJob";
import EmployerMyJobs from "./components/Job/EmployerMyJobs";
import EmployerJobDetails from "./components/Job/EmployerJobDetails";
import SeekerMyAccount from "./components/SeekerMyAccount/SeekerMyAccount";
import JobDetails from "./components/Home/JobDetails";
import JobApplicants from "./components/JobApplicants/JobApplicants";
import JobApplied from "./components/Home/JobApplied";
import Footer from "./components/Footer/Footer";
import SeekerOrEmployer from "./components/RegisterOrLogin/SeekerOrEmployer";
import 'bootstrap/dist/css/bootstrap.min.css';
export const TokenContext = createContext();
function App() {
  const [seekerIsLoggedIn, setSeekerIsLoggedIn] = useState(false||localStorage.getItem("seekerIsLoggedIn"));
  const [employerIsLoggedIn, setEmployerIsLoggedIn] = useState(false||localStorage.getItem("employerIsLoggedIn"));
   const [signIn, setSignIn] = useState(false);
  const [showNav, setShowNav] = useState(true)
  const [goToPageSeekerOrEmployer, setGoToPageSeekerOrEmployer] = useState("")
  const [token, setToken] = useState(localStorage.getItem("token")||null);
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const logout = () => {
    localStorage.clear();
    setToken(null);
    setSeekerIsLoggedIn(false);
    setEmployerIsLoggedIn(false);

  };
  useEffect(() => {
  }, [token])
  
  return (
    <TokenContext.Provider
    value={{ seekerIsLoggedIn, setSeekerIsLoggedIn,employerIsLoggedIn, setEmployerIsLoggedIn, token, setToken,userId, setUserId ,logout,setShowNav,goToPageSeekerOrEmployer, setGoToPageSeekerOrEmployer}}
  >

{showNav && (<><NavBar /> </>)}
 

   
      
      <Routes>
        <Route  path="/registerSeeker" element={<RegisterSeeker /> } />
        <Route path="/loginSeeker" element={<LoginSeeker />} />
        <Route path="/registerEmployer" element={<RegisterEmployer />} />
        <Route path="/loginEmployer" element={<LoginEmployer />}/>
        <Route path="/home" element={<Home/>}  />
        <Route path="/EmployerMyAccount" element={<EmployerMyAccount />}/>
        <Route path="/SeekerMyAccount" element={<SeekerMyAccount />}/>
        <Route path="/createJob" element={<CreateJob />}/>
        <Route path="/myJobs" element={<EmployerMyJobs />}/>
        <Route path="/jobDetails/:jobId" element={<EmployerJobDetails />} />
        <Route path="/jobDetail/:jobId" element={<JobDetails />}/>
        <Route path="/jobApplicants/:jobId" element={<JobApplicants />} />
        <Route path="/jobApplied" element={<JobApplied />}/>
        <Route path="/seekerOrEmployer" element={<SeekerOrEmployer />} />


      </Routes>
      {showNav &&  <Footer />}
      </TokenContext.Provider>
  );
}

export default App;
