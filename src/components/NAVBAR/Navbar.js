import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import DropDownInside from "./DropDownInside";
import "./Navbar.css";

export default function Navbar() {
  const [login, setLogin] = useState(false);

  function handleAccountOpen() {
    setLogin((prevLogin) => !prevLogin);
  }
  return (
    <div className="nav-header">
      <Link to="/">
        <img
          className="logoEase"
          src="https://www.easemytrip.com/images/brandlogo/emtlogo_new6.svg"
          alt="EaseMyTrip Logo"
        />
      </Link>
      <div className="center">
        <NavLink to="/" className="nolink">
          Flights
        </NavLink>
        <NavLink to="/Hotel" className="nolink">
          Hotels
        </NavLink>
        <NavLink to="/Train" className="nolink">
          Trains
        </NavLink>
        <NavLink to="/Bus" className="nolink">
          Bus
        </NavLink>
      </div>
      <div className="myaccount" onClick={handleAccountOpen}>
        <FaUser className="user-icon" />
        <p>My Account</p>
      </div>

      {login && <DropDownInside />}
    </div>
  );
}
