import React, { useState } from "react";
import "./RegistrationForm.css";

import DatePicker from "react-date-picker";
import user from "../images/user.png";

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [dob, onChange] = useState(new Date());
  const [gender, setGender] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [passWord, setPassword1] = useState();
  const [password2, setPassword2] = useState();

  const firstNameInputHandler = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameInputHandler = (e) => {
    setLastName(e.target.value);
  };

  const handleChange = (e) => {
    setGender(e.target.value);
  };

  const phoneNumberInputHandler = (e) => {
    setPhoneNumber(e.target.value);
  };
  const emailInputHandler = (e) => {
    setEmail(e.target.value);
  };

  const password1InputHandler=(e)=>{
    setPassword1(e.target.value);
  }
  const password2InputHandler=(e)=>{
    setPassword2(e.target.value);
  }

  // const date = () => {
  //   let year = dob.getFullYear();
  //   let month = dob.getMonth();
  //   let day = dob.getDate();
  //   return year + "-" + month + "-" + day;
  // };
  const formSubmitHandler = (e) => {
    e.preventDefault();

    if(passWord != password2) {
      alert("passwords not much!");
      return;
    }

    let year = dob.getFullYear();
    let month = dob.getMonth();
    let day = dob.getDate();
    onChange(year + "-" + month + "-" + day);
    const blog = { firstName, lastName, dob, gender, phoneNumber, email,passWord };
    console.log(JSON.stringify(blog));
    fetch("http://localhost:8080/api/v1/customer/registration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New Block added");
    });
  };

  // need to implement currently not working properly
  // const getDataHandler = () => {
  //   axios
  //     .get("http://localhost:8080/api/v1/customer")
  //     .then((response) =>
  //       this.setState({ totalReactPackages: response.data.total })
  //     );
  // };

  return (
    <div className="container">
      <div className="formcontainer">
        <form onSubmit={formSubmitHandler} className="form responsive">
          <div className="profilepic">
            <img className="responsive" src={user} height="100" weight="100" />
          </div>
          <div className="nameContainer">
            <input
              placeholder="Enter your FirstName"
              type="text"
              className="form-control"
              onChange={firstNameInputHandler}
              value={firstName}
              required
            />
            <input
              placeholder="Enter your LastName"
              type="text"
              className="form-control"
              onChange={lastNameInputHandler}
              value={lastName}
              required
            />

            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={passWord}
              onChange={password1InputHandler}
              required
            />
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password Again"
              value={password2}
              onChange={password2InputHandler}
              required
            />
          </div>
          <div className="dobAndGender">
            <div className="dobPicker">
              <DatePicker onChange={onChange} value={dob} />
            </div>
            <div className="genderContainer">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="male"
                  value="male"
                  onChange={handleChange}
                  required
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Male
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="female"
                  value="female"
                  onChange={handleChange}
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Female
                </label>
              </div>
            </div>
          </div>
          <div className="phoneAndEmail">
            <input
              type="number"
              className="form-control"
              placeholder="PhoneNumber"
              onChange={phoneNumberInputHandler}
              value={phoneNumber}
            />
            <input
              type="email"
              className="form-control"
              onChange={emailInputHandler}
              placeholder="Email"
              value={email}
            />
            <div className="btnContainer">
              <button type="submit" className="btn btn-primary">
                Next
              </button>
            </div>
          </div>
          <div className="adminpageport">
            <p>
              If you want to login <a href="#">click_here</a>
            </p>
          </div>
        </form>
        {/* <button onClick={getDataHandler} className="btn btn-success">
          Get Existing data
        </button> */}
      </div>
    </div>
  );
};

export default RegistrationForm;
