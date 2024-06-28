import axios from "axios";
import React, { useState ,useContext} from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { TokenContext } from "../../App";
function Register() {
  const {setGoToPageSeekerOrEmployer } = useContext(TokenContext);
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
        navigate("/loginSeeker");

      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className="Register">
     
      <h6>Job Seeker Account Register</h6>
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
          }}
        >
          Register Now !
        </Button>
      </Form>

      <Button variant="link" onClick={() => setGoToPageSeekerOrEmployer("LoginSeeker")}>
        Already Have Account! Login Now
      </Button>
    </div>
  );
}

export default Register;
