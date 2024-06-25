import axios from "axios";
import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../App";
import { Form, Button } from "react-bootstrap";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setEmployerIsLoggedIn, setToken,setUserId } = useContext(TokenContext);
    const navigate = useNavigate();

    const Login = () => {
      const userData = {
        email,
        password,
      };
  
      axios
        .post("http://localhost:5000/employer/login", userData)
        .then((result) => {
          console.log(result.data)
          setToken(result.data.token);
          setUserId(result.data.userId);
          setEmployerIsLoggedIn(true);
           localStorage.setItem("employerIsLoggedIn",true)
          localStorage.setItem("userId",result.data.userId)
          localStorage.setItem("token",result.data.token) 
          navigate("/EmployerMyAccount")
        })
        .catch((err) => {
          console.log("err", err);
        });
    };
    return (
      <div className="Login">
       <h4>Job Employer Account Login</h4> 
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
            type="submit" onClick={Login}>Login</Button>
        </Form>
        <Button variant="link" onClick={()=>{
navigate("/registerEmployer")
      }}>Don't Have Account ! Register Now</Button>
      </div>
    );
}

export default Login