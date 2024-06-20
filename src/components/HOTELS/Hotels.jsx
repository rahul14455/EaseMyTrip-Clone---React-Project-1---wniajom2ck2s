import React, { useState } from "react";
import Navbar from "../NAVBAR/Navbar";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from "react-icons/fa";
import "./Hotel.css";

const Hotels = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [guestsInput, setGuestsInput] = useState("");

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleAdultsChange = (value) => {
    setAdults(value);
  };

  const handleChildrenChange = (value) => {
    setChildren(value);
  };

  const handleDone = () => {
    const guestsText = `${adults} Adult${
      adults !== 1 ? "s" : ""
    }, ${children} Child${children !== 1 ? "ren" : ""}`;
    setGuestsInput(guestsText);
    setDropdownOpen(false);
  };

  return (
    <div>
      <Navbar />
      <div className="Hotel-MainSection">
        <p className="caption-hotel">Find the Best Hotels</p>
        <div className="Hotel-search-Box">
          <div className="hsearch">
            <div className="destination">
              <span className="label">
                <FaMapMarkerAlt /> DESTINATION
              </span>
              <input
                type="text"
                placeholder="Enter destination"
                className="destination-input"
              />
            </div>
            <div className="datepicker">
              <span className="label">
                <FaCalendarAlt /> CHECK-IN
              </span>
              <Datepicker
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                className="date-input"
                dateFormat="dd/MM/yyyy"
                placeholderText="Select check-in date"
              />
            </div>
            <div className="datepicker">
              <span className="label">
                <FaCalendarAlt /> CHECK-OUT
              </span>
              <Datepicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                className="date-input"
                dateFormat="dd/MM/yyyy"
                placeholderText="Select check-out date"
              />
            </div>
            <div className="guests">
              <span
                className="label guests-label"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <FaUsers /> Select Guests
              </span>
              {dropdownOpen && (
                <div className="dropdown-form">
                  <div className="guests-control">
                    <label htmlFor="adults">Adults:</label>
                    <div className="counter">
                      <button
                        className="counter-button"
                        onClick={() => handleAdultsChange(adults - 1)}
                        disabled={adults <= 1}
                      >
                        -
                      </button>
                      <span className="counter-value">{adults}</span>
                      <button
                        className="counter-button"
                        onClick={() => handleAdultsChange(adults + 1)}
                        disabled={adults >= 10}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="guests-control">
                    <label htmlFor="children">Children:</label>
                    <div className="counter">
                      <button
                        className="counter-button"
                        onClick={() => handleChildrenChange(children - 1)}
                        disabled={children <= 0}
                      >
                        -
                      </button>
                      <span className="counter-value">{children}</span>
                      <button
                        className="counter-button"
                        onClick={() => handleChildrenChange(children + 1)}
                        disabled={children >= 10}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button className="done-button" onClick={handleDone}>
                    Done
                  </button>
                </div>
              )}
              <input
                type="text"
                value={guestsInput}
                placeholder="Select guests"
                readOnly
                className="guests-input"
              />
            </div>
            <button className="search-button">Search Hotels</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
