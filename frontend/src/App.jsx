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
import React, { createContext, useEffect, useState } from "react";

export const TokenContext = createContext();
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false||localStorage.getItem("isLoggedIn"));
  const [token, setToken] = useState(localStorage.getItem("token")||null);
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const logout = () => {
    localStorage.clear();
    setToken(null);
    setIsLoggedIn(false);
  };
  return (
    <TokenContext.Provider
    value={{ isLoggedIn, setIsLoggedIn, token, setToken,userId, setUserId ,logout}}
  >
      <NavBar />
      <Routes>
        <Route path="/seekerOrEmployer" element={<SeekerOrEmployer/>} />
        <Route path="/registerSeeker" element={<RegisterSeeker />} />
        <Route path="/loginSeeker" element={<LoginSeeker />} />
        <Route path="/registerEmployer" element={<RegisterEmployer />} />
        <Route path="/loginEmployer" element={<LoginEmployer />}/>
        <Route path="/home" element={<Home/>}  />
        <Route path="/myAccount" element={<EmployerMyAccount />}/>

      </Routes>
      </TokenContext.Provider>
  );
}

export default App;
