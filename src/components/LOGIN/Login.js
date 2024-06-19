import React, { useState } from "react";
import "./Login.css";
import { Modal } from "@mui/material";
import { IoIosClose } from "react-icons/io";
import Signup from "./Signup";
const Login = ({ handleClose }) => {
  const [signup, setSignup] = useState(false);
  const [data, setdata] = useState({
    username: "",
    Password: "",
  });
  const { username, password } = data;
  const ChangeHandler = (e) => {
    setdata({
      ...data,
      [e.target.name]: [e.target.value],
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };
  const handleSignup = (e) => {
    e.stopPropagation();
    setSignup(true);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="LoginPage">
          <div className="login-heading">
            <h4 className="heading">Login or Create an account</h4>
            <IoIosClose className="close" onClick={handleClose} />
          </div>
          <div className="login-box">
            <input
              type="text"
              name="username"
              className="email-input"
              placeholder="Email address"
              value={username}
              onChange={ChangeHandler}
            />
            <br />
            <input
              type="password"
              className="pwd-input"
              placeholder="Password"
              name="password"
              value={password}
              onChange={ChangeHandler}
            />
            <br />
            <button type="submit" className="loginbtns" name="submit">
              Continue
            </button>
          </div>
          <br />
          <h5 className="create-account" onClick={handleSignup}>
            Create New Account ?
          </h5>{" "}
          <br />
          <p className="para-foot">
            By logging in , i understand & agree to EasyMyTrip terms of use and
            privacy policy
          </p>
        </div>
      </form>
      {
        <Modal open={signup}>
          <Signup />
        </Modal>
      }
    </div>
  );
};

export default Login;
