import React from "react";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
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
      <hr />
    </div>
  );
};

export default NavBar;
