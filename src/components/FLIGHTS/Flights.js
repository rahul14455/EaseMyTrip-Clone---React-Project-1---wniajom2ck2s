import React from "react";
import Navbar from "../NAVBAR/Navbar";
import "../FLIGHTS/Flights.css";
import { useState } from "react";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCalendar, FaCalendarAlt } from "react-icons/fa";
import Login from "../LOGIN/Login";
import Signup from "../LOGIN/Signup";

const Flights = () => {
  const [selectedDate, setDate] = useState(null);
  const [loginpopup, setLoginpopup] = useState(false);
  return (
    <div>
      <Navbar />
      {/* <div className="Flight-MainSection">
        <p className="caption-flight">Search Lowest Price</p>
        <div className="Flight-ticket-Box">
          <div className="fsearch">
            <div className="flight">
              <span>FROM</span>
              <h1>Delhi</h1>
              <span>DEL,Delhi Airport India</span>
            </div>
            <div className="flight">
              <span>TO</span>
              <h1>Bangalore</h1>
              <span>BLR,Kempagowda International Airport India</span>
            </div>
            <div className="datepicker">
              <p>DEPARTURE DATE</p>
              <label>
                <Datepicker
                  selected={selectedDate}
                  onChange={(date) => setDate(date)}
                />
              </label>
            </div>
          </div>
        </div>
      </div> */}
      {/* <Login /> */}

      {/* <Signup /> */}
    </div>
  );
};

export default Flights;
