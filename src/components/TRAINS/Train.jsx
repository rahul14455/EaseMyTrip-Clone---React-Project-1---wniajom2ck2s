import React, { useState } from "react";
import Navbar from "../NAVBAR/Navbar";
import "./Train.css"; // Assuming you have a CSS file for styles

const Train = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");

  const handleSearch = () => {
    // Handle the search logic here
    console.log({ from, to, departureDate });
  };

  return (
    <div>
      <div className="Train-MainSection">
        <div className="caption-train">
          <img src="https://www.easemytrip.com/images/train-img/train-icon.svg" />
          <p> Book Train Tickets</p>
        </div>
        <div className="Train-ticket-Box">
          <div className="tsearch">
            <div className="train">
              <label className="label" htmlFor="from">
                From
              </label>
              <input
                type="text"
                id="from"
                className="train-input"
                placeholder="Enter departure station"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>
            <div className="train">
              <label className="label" htmlFor="to">
                To
              </label>
              <input
                type="text"
                id="to"
                className="train-input"
                placeholder="Enter destination station"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </div>
            <div className="datepicker-train">
              <label className="label" htmlFor="departureDate">
                Departure Date
              </label>
              <input
                type="date"
                id="departureDate"
                className="date-input"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
              />
            </div>
            <button className="search-button-train" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
        <div className="bottom-heading">
          <img
            src="https://www.easemytrip.com/images/train-img/IRCTC-logo-nw2.png"
            className="irctc-logo"
          />
          <p>IRCTC Authorized Partner</p>
        </div>
      </div>
    </div>
  );
};

export default Train;
