import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { Form, Button } from "react-bootstrap";
function Register() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const Register = () => {
    const userData = {
      fullName,
      phoneNumber,
      email,
      password,
      role: "666752d024653c04a0a63269",
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
      <h4>Job Seeker Account Register</h4>
      <Form>
        <Form.Group controlId="fullName">
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="phoneNumber">
          <Form.Control
            type="text"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={() => {
            Register();
            navigate("/loginSeeker");
          }}
        >
          Register Now !
        </Button>
      </Form>

      <Button variant="link" onClick={() => navigate("/loginSeeker")}>
        Already Have Account! Login Now
      </Button>
    </div>
  );
}

export default Register;
