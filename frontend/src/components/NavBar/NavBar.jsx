import React from 'react'
import { useNavigate } from "react-router-dom";
import SeekerOrEmployer from '../SeekerOrEmployer/SeekerOrEmployer';
const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div><b>JobIn</b>
    <button>Home</button>
    <button onClick={()=>{
navigate("/SeekerOrEmployer")
    }}>Sign in</button>
    <hr/></div>
  )
}

export default NavBar