import React, { useState } from "react";
import "./Signup.css";
import { IoIosClose } from "react-icons/io";

const Signup = ({ handleToggle, closeButton }) => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const { fname, lname, email, password } = data;

  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="SignupPage">
          <div className="signup-heading">
            <h4 className="heading">Login or Create an account</h4>
            <IoIosClose className="close" onClick={closeButton} />
          </div>
          <div className="names">
            <input
              type="text"
              name="fname"
              value={fname}
              placeholder="First name"
              className="fname"
              onChange={changeHandler}
            />
            <input
              type="text"
              placeholder="Last name"
              className="lname"
              name="lname"
              value={lname}
              onChange={changeHandler}
            />
          </div>
          <br />
          <input
            type="text"
            placeholder="Email address"
            className="email-input"
            name="email"
            value={email}
            onChange={changeHandler}
          />
          <br />
          <input
            type="text"
            placeholder="New password"
            className="pwd-input"
            name="password"
            value={password}
            onChange={changeHandler}
          />
          <br />
          <button type="submit" className="signupbtn" name="submit">
            Continue
          </button>
          <br />
          <p className="para-foot">
            By logging in, I understand & agree to EaseMyTrip terms of use and
            privacy policy
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
