import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Login from "../LOGIN/Login";
import "./DropDownInside.css";
const DropDownInside = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="main">
      <div className="loginbtn">
        <FaUserCircle className="circle" />
        <button onClick={handleOpen} className="nolinks-handle">
          LOGIN OR SIGNUP
        </button>
      </div>
      <div className="line"></div>

      <div className="list">
        <p>My Booking</p>
        <Link to="/" className="logout">
          Logout
        </Link>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Login />
      </Modal>
    </div>
  );
};

export default DropDownInside;
