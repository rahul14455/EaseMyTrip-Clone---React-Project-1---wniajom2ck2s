import React, { useState } from "react";
import "./Login.css";
import { IoIosClose } from "react-icons/io";

const Login = ({ closeButton, handleToggle }) => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = data;

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
        <div className="LoginPage">
          <div className="login-heading">
            <h4 className="heading">Login or Create an account</h4>
            <IoIosClose className="close" onClick={closeButton} />
          </div>
          <div className="login-box">
            <input
              type="text"
              name="username"
              className="email-input"
              placeholder="Email address"
              value={username}
              onChange={changeHandler}
            />
            <br />
            <input
              type="password"
              className="pwd-input"
              placeholder="Password"
              name="password"
              value={password}
              onChange={changeHandler}
            />
            <br />
            <button type="submit" className="loginbtns" name="submit">
              Continue
            </button>
          </div>
          <br />
          <h5 className="create-account" onClick={handleToggle}>
            Create New Account?
          </h5>
          <br />
          <p className="para-foot">
            By logging in, I understand & agree to EasyMyTrip terms of use and
            privacy policy
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
