import React, { useState } from "react";
import "./LoginForm.css";
import user from "../images/user.png";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [passWord, setPassword] = useState();

  const userEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordInputHandle = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("work");
    if (email == null) {
      alert("Please enter Email");
      return;
    }
    if (passWord == null) {
      alert("Please enter Password");
      return;
    }

    const blog = { email, passWord };

    fetch("http://localhost:8080/api/v1/customer/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then(() => {
        console.log("login...");
      })
      .catch((error) => {
        console.log(error);
      });

    // axios
    //   .post("http://localhost:8080/api/v1/customer/login", loginuser)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  return (
    <div className="con">
      <div className="loginForm">
        <h1>LoginForm</h1>
        <form className="loginForm" onSubmit={submitHandler}>
          <div className="loginInputs">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your Email"
              value={email}
              onChange={userEmailHandler}
            />
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={passWord}
              onChange={passwordInputHandle}
            />
            <div className="profilepicture">
              <img
                className="responsive"
                src={user}
                height="100"
                weight="100"
              />
            </div>
          </div>

          <div className="btnContainer">
            <button type="submit" className="btn btn-danger">
              Back to Registraion
            </button>
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
