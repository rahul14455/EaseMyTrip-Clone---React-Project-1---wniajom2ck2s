import React, { useState } from "react";
import Navbar from "../NAVBAR/Navbar";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaCalendarAlt,
} from "react-icons/fa";
import "./Flights.css";

const Flights = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [travellersVisible, setTravellersVisible] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [travelClass, setTravelClass] = useState("Economy");

  const handleAdultsChange = (value) => {
    setAdults((prev) => Math.max(1, prev + value));
  };

  const handleChildrenChange = (value) => {
    setChildren((prev) => Math.max(0, prev + value));
  };

  const handleInfantsChange = (value) => {
    setInfants((prev) => Math.max(0, prev + value));
  };

  const handleTravelClassChange = (e) => {
    setTravelClass(e.target.value);
  };

  const handleDone = () => {
    setTravellersVisible(false);
  };

  const travellersText = `${adults} Adult${
    adults !== 1 ? "s" : ""
  }, ${children} Child${children !== 1 ? "ren" : ""}, ${infants} Infant${
    infants !== 1 ? "s" : ""
  }`;

  return (
    <div>
      <Navbar />
      <div className="Flight-MainSection">
        <p className="caption-flight">Search Lowest Price</p>
        <div className="Flight-ticket-Box">
          <div className="fsearch">
            <div className="flight from">
              <span className="label">
                <FaPlaneDeparture /> FROM
              </span>
              <h1>Delhi</h1>
              <span>DEL, Delhi Airport India</span>
            </div>
            <div className="flight to">
              <span className="label">
                <FaPlaneArrival /> TO
              </span>
              <h1>Bangalore</h1>
              <span>BLR, Kempegowda International Airport India</span>
            </div>
            <div className="datepicker gap">
              <span className="label">
                <FaCalendarAlt /> DEPARTURE DATE
              </span>
              <Datepicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="date-input"
                dateFormat="dd/MM/yyyy"
                placeholderText="Select a date"
              />
            </div>
            <div className="travellers">
              <div className="travellers-dropdown">
                <input
                  type="text"
                  className="travellers-input"
                  placeholder="Travellers"
                  value={travellersText}
                  onClick={() => setTravellersVisible((prev) => !prev)}
                  readOnly
                />
                {travellersVisible && (
                  <div className="travellers-form">
                    <div className="travellers-counter">
                      <div className="counter">
                        <div className="counter-label">Adults:</div>
                        <div
                          className="counter-button"
                          onClick={() => handleAdultsChange(-1)}
                        >
                          -
                        </div>
                        <div className="counter-value">{adults}</div>
                        <div
                          className="counter-button"
                          onClick={() => handleAdultsChange(1)}
                        >
                          +
                        </div>
                      </div>
                      <div className="counter">
                        <div className="counter-label">Children:</div>
                        <div
                          className="counter-button"
                          onClick={() => handleChildrenChange(-1)}
                        >
                          -
                        </div>
                        <div className="counter-value">{children}</div>
                        <div
                          className="counter-button"
                          onClick={() => handleChildrenChange(1)}
                        >
                          +
                        </div>
                      </div>
                      <div className="counter">
                        <div className="counter-label">Infants:</div>
                        <div
                          className="counter-button"
                          onClick={() => handleInfantsChange(-1)}
                        >
                          -
                        </div>
                        <div className="counter-value">{infants}</div>
                        <div
                          className="counter-button"
                          onClick={() => handleInfantsChange(1)}
                        >
                          +
                        </div>
                      </div>
                      <div className="travel-classes">
                        <span className="classes-label">Class:</span>
                        <select
                          className="classes-dropdown"
                          value={travelClass}
                          onChange={handleTravelClassChange}
                        >
                          <option value="Economy">Economy</option>
                          <option value="Business">Business</option>
                          <option value="First">First</option>
                        </select>
                      </div>
                      <button className="done-button" onClick={handleDone}>
                        Done
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <button className="search-button">Search Flights</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flights;
