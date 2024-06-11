import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Login = () => {
    const userData = {
      email,
      password,
    };

    axios
      .post("http://localhost:5000/seeker/login", userData)
      .then((result) => {
        console.log(result.data)

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
        defaultValue={"khaled.odeh@gmail.com"}
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
    </div>
  );
};

export default Login;
