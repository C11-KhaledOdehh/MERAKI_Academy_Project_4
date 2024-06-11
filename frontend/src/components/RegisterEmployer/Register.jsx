import axios from "axios";
import React, { useState } from "react";
const Register = () => {
    const [companyName, setCompanyName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const Register = () => {
      const userData = {
        companyName,
        phoneNumber,
        email,
        password,
      };
  
      axios
        .post("http://localhost:5000/employer/register", userData)
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
          placeholder="Company Name"
          onChange={(e) => {
            setCompanyName(e.target.value);
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
      </div>
    );
}

export default Register