import axios from "axios";
import React, { useState,useContext } from "react";
import { TokenContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setSeekerIsLoggedIn, setToken,setUserId } = useContext(TokenContext);
  const navigate = useNavigate();
  const Login = () => {
    const userData = {
      email,
      password,
    };

    axios
      .post("http://localhost:5000/seeker/login", userData)
      .then((result) => {
        console.log(result.data)
        setToken(result.data.token);
        setSeekerIsLoggedIn(true);
        localStorage.setItem("seekerIsLoggedIn",true)
        setUserId(result.data.userId)
        localStorage.setItem("userId",result.data.userId)
        localStorage.setItem("token",result.data.token)
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <div>
      Login <br />
      <input
        type="email"
        defaultValue={" "}
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <button onClick={Login}>Login</button>
      <br />
      <button onClick={()=>{
navigate("/registerSeeker")
      }}>Don't Have Account ! Register Now</button>

    </div>
  );
};

export default Login;
