import React, { useState } from "react";
import "./Signup.css";
const Signup = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const { fname, lname, email, password } = data;
  const ChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: [e.target.value],
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
          <h4>SignUp or Create an account</h4> <br />
          <div className="names">
            <input
              type="text"
              name="fname"
              value={fname}
              placeholder="First name"
              className="fname"
              onChange={ChangeHandler}
            />
            <input
              type="text"
              placeholder="Last name"
              className="lname"
              name="lname"
              value={lname}
              onChange={ChangeHandler}
            />
          </div>
          <br />
          <input
            type="text"
            placeholder="Email address"
            className="email-input"
            name="email"
            value={email}
            onChange={ChangeHandler}
          />
          <br />
          <input
            type="text"
            placeholder="New password"
            className="pwd-input"
            name="password"
            value={password}
            onChange={ChangeHandler}
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
