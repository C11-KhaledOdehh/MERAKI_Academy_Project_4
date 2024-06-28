import axios from "axios";
import React, { useState,useContext } from "react";
import { TokenContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./LoginSeeker.css"
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
        navigate("/home")

      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (  
    <div className="Login">
   
     <h6>Job Seeker Account Login</h6> 
     <Form> 
     <Form.Group controlId="email">
     <Form.Control      
      type="email"
        defaultValue={" "}
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        />
        </Form.Group>
        <Form.Group controlId="password">
        <Form.Control
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        />
        </Form.Group>
        <Button
          variant="primary"
          onClick={Login}>Login</Button>
      </Form>
      <Button variant="link" onClick={()=>{
navigate("/registerSeeker")
      }}>Don't Have Account ! Register Now</Button>

    </div>
  );
};

export default Login;
