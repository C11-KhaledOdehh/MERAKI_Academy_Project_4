import axios from "axios";
import React, { useState ,useContext} from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { TokenContext } from "../../App";

const Register = () => {
  const {setGoToPageSeekerOrEmployer } = useContext(TokenContext);
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const Register = () => {
    const userData = {
      companyName,
      phoneNumber,
      email,
      password,
      role: "666752f824653c04a0a6326b",
    };

    axios
      .post("http://localhost:5000/employer/register", userData)
      .then((result) => {
        console.log(result.data);
        navigate("/loginEmployer");

      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className="Register">
     
      <h6>Job Employer Account Register</h6>
      <Form>
        <Form.Group controlId="companyName">
          <Form.Control
            type="text"
            placeholder="Company Name"
            onChange={(e) => {
              setCompanyName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="phoneNumber">
          <Form.Control
            type="text"
            placeholder="Phone Number"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Control
            type="email"
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
          type="button"
          onClick={() => {
            Register();
          }}
        >
          Register Now !
        </Button>
      </Form>
      <Button
        variant="link"
        onClick={() => {
          setGoToPageSeekerOrEmployer("LoginEmployer");
        }}
      >
        Already Have Account! Login Now
      </Button>
    </div>
  );
};

export default Register;
