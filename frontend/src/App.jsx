import { Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import RegisterSeeker from './components/RegisterSeeker/Register';
import LoginSeeker from './components/LoginSeeker/Login';
import LoginEmployer from './components/LoginEmployer/Login';
import RegisterEmployer from './components/RegisterEmployer/Register';
import SeekerOrEmployer from './components/SeekerOrEmployer/SeekerOrEmployer';
import Home from "./components/Home/Home";
import EmployerMyAccount from "./components/EmployerMyAccount/EmployerMyAccount";
import './App.css';
import React, { createContext, useState } from "react";
import CreateJob from "./components/Job/CreateJob";
import EmployerMyJobs from "./components/Job/EmployerMyJobs";
import EmployerJobDetails from "./components/Job/EmployerJobDetails";
import SeekerMyAccount from "./components/SeekerMyAccount/SeekerMyAccount";
export const TokenContext = createContext();
function App() {
  const [seekerIsLoggedIn, setSeekerIsLoggedIn] = useState(false||localStorage.getItem("seekerIsLoggedIn"));
  const [employerIsLoggedIn, setEmployerIsLoggedIn] = useState(false||localStorage.getItem("employerIsLoggedIn"));

  const [token, setToken] = useState(localStorage.getItem("token")||null);
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const logout = () => {
    localStorage.clear();
    setToken(null);
    setSeekerIsLoggedIn(false);
    setEmployerIsLoggedIn(false);

  };
  return (
    <TokenContext.Provider
    value={{ seekerIsLoggedIn, setSeekerIsLoggedIn,employerIsLoggedIn, setEmployerIsLoggedIn, token, setToken,userId, setUserId ,logout}}
  >
      <NavBar />
      <Routes>
        <Route path="/seekerOrEmployer" element={<SeekerOrEmployer/>} />
        <Route path="/registerSeeker" element={<RegisterSeeker />} />
        <Route path="/loginSeeker" element={<LoginSeeker />} />
        <Route path="/registerEmployer" element={<RegisterEmployer />} />
        <Route path="/loginEmployer" element={<LoginEmployer />}/>
        <Route path="/home" element={<Home/>}  />
        <Route path="/EmployerMyAccount" element={<EmployerMyAccount />}/>
        <Route path="/SeekerMyAccount" element={<SeekerMyAccount />}/>
        <Route path="/createJob" element={<CreateJob />}/>
        <Route path="/myJobs" element={<EmployerMyJobs />}/>
        <Route path="/jobDetails/:jobId" element={<EmployerJobDetails />} />




      </Routes>
      </TokenContext.Provider>
  );
}

export default App;
