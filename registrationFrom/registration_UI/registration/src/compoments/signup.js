import { useState } from "react";
import axios from "axios";
const SignUp = () => {
  const [genderVal, setgenderVal] = useState("M");

  // set gender value M: Male , F:Female
  const updateGenderVal = (e) => {
    setgenderVal(e.target.value);
  };

  // Call to validateUserDetails API after validating all details
  const calltoAPI = () => {
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const gender = genderVal;
    const email = document.getElementById("email").value;
    const profileimage = document.getElementById("profileimage").value;
    const password = document.getElementById("password").value;
    let isAllDataExist = false,
      isEmailValidated = false,
      isPasswordValidated = false;
    if (
      !(
        firstname &&
        lastname &&
        city &&
        state &&
        gender &&
        profileimage &&
        password
      )
    ) {
      isAllDataExist = false;
      alert("Please provide all details");
    }

    if (email) {
      isEmailValidated = false;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        isEmailValidated = true;
        alert("Please enter valid email address");
      }
    }

    if (password) {
      const validationErrors = [];
      if (password.length < 8) {
        validationErrors.push("Password must be at least 8 characters long.");
      }
      if (!/[A-Z]/.test(password)) {
        validationErrors.push(
          "Password must contain at least one uppercase letter."
        );
      }
      if (!/[a-z]/.test(password)) {
        validationErrors.push(
          "Password must contain at least one lowercase letter."
        );
      }
      if (!/[0-9]/.test(password)) {
        validationErrors.push("Password must contain at least one number.");
      }
      if (!/[@$!%*?&]/.test(password)) {
        validationErrors.push(
          "Password must contain at least one special character (@, $, !, %, *, ?, &)."
        );
      }
      if (validationErrors?.length > 0) {
        isPasswordValidated = false;
        alert(validationErrors);
      }
    }

    if (!(isAllDataExist && isEmailValidated && isPasswordValidated)) {
      axios
        .post("http://localhost:3001/storeUserDetails", {
          firstname,
          lastname,
          city,
          state,
          email,
          profileimage,
          gender,
          password,
        })
        .then((response) => {
          if (response?.data?.status) {
            window.location.href = "/displaydata";
          }
        })
        .catch((err) => {
          console.log("err", err);
         alert("Something went wrong while storing data");
        });
    }
  };

  const CalltoHomePage = () => {
    window.location.href = "/";
  };

  return (
    <>
      <div className="form-container">
        <h2>Registration</h2>
        <form>
          <div className="mb-3 ml-20px">
            <label>First Name : </label>
            <input
              type="text"
              placeholder="Please enter First Name"
              id="firstname"
              style={{ "margin-left": "10px" }}
            ></input>
          </div>
          <div className="mb-3">
            <label>Last Name : </label>
            <input
              type="text"
              placeholder="Please enter Last Name"
              id="lastname"
              style={{ "margin-left": "10px" }}
            ></input>
          </div>
          <div className="mb-3">
            <label>Email : </label>
            <input
              type="email"
              placeholder="Please enter Email"
              id="email"
              style={{ "margin-left": "45px" }}
            ></input>
          </div>

          <div className="mb-3">
            <label>City : </label>
            <input
              type="test"
              placeholder="Please enter City"
              id="city"
              style={{ "margin-left": "55px" }}
            ></input>
          </div>

          <div className="mb-3">
            <label>State : </label>
            <input
              type="test"
              placeholder="Please enter State"
              id="state"
              style={{ "margin-left": "45px" }}
            ></input>
          </div>

          <div className="mb-3">
            <label>Gender : </label>
            <input
              type="radio"
              checked={genderVal === "M"}
              id="male"
              onChange={updateGenderVal}
              value={"M"}
            ></input>
            <label>Male</label>
            <input
              type="radio"
              checked={genderVal === "F"}
              id="female"
              onChange={updateGenderVal}
              value={"F"}
            ></input>
            <label>Female</label>
          </div>

          <div className="mb-3">
            <label style={{ "margin-left": "15px" }}>Profile Image : </label>
            <input
              type="file"
              accept="image/*"
              id="profileimage"
              style={{ "margin-left": "50px" }}
            ></input>
          </div>

          <div className="mb-3">
            <label>Password: </label>
            <input
              type="password"
              id="password"
              placeholder="Please enter Password"
              style={{ "margin-left": "20px" }}
            ></input>
          </div>

          <div className="mb-3">
            <button type="button" onClick={calltoAPI}>
              Submit
            </button>
            <button type="button" onClick={CalltoHomePage}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
