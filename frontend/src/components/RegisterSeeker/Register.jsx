import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const  navigate = useNavigate();
  const Register = () => {
    const userData = {
      fullName,
      phoneNumber,
      email,
      password,
    };

    axios
      .post("http://localhost:5000/seeker/register", userData)
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className="Register">
      Register:
      <br />
      <input
        type="text"
        placeholder="Full Name"
        onChange={(e) => {
          setFullName(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Phone Number"
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
      />
      <br />
     
      <input
        type="email"
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
      <button onClick={Register}>Register</button>
      <br />
      <button onClick={()=>{
navigate("/loginSeeker")
      }}>Already Have Account ! Login Now</button>

    </div>
  );
}

export default Register;
