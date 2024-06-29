import React, { useEffect, useState } from "react";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaCalendarAlt,
} from "react-icons/fa";
import "./Flights.css";
import { useOffersContext } from "../../Context/OffersContext";

const Flights = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [travellersVisible, setTravellersVisible] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [travelClass, setTravelClass] = useState("Economy");
  const { handleFilterChange } = useOffersContext();
  const [data, setData] = useState({}); // initialize empty data state
  const [city, setCity] = useState(""); // initialize city input state

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

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = new Date(date).getDay();
    setDayOfWeek(days[day]);
  };

  const totalTravellers = adults + children + infants;
  const travellersText = `${totalTravellers} Traveller${
    totalTravellers !== 1 ? "s" : ""
  }`;
  useEffect(() => {
    const flightList = async () => {
      try {
        const response = await fetch(
          "https://academics.newtonschool.co/api/v1/bookingportals/airport",

          {
            method: "GET",
            headers: {
              projectID: "wniajom2ck2s",
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const jsonResponse = await response.json();
        console.log(jsonResponse.data);
        setData(jsonResponse.data?.airports || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    flightList();
  }, []);

  return (
    <div>
      <div className="Flight-MainSection">
        <p className="caption-flight">Search Lowest Price</p>
        <div className="Flight-ticket-Box">
          <div className="search-container">
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
            <div className="datepicker">
              <span className="label">
                <FaCalendarAlt /> DEPARTURE DATE
              </span>
              <Datepicker
                selected={selectedDate}
                onChange={handleDateChange}
                className="date-input"
                dateFormat="dd/MM/yyyy"
                placeholderText="Select a date"
              />
              {selectedDate && <span>{dayOfWeek}</span>}
            </div>
            <div className="travellers">
              <div className="travellers-dropdown">
                <span className="label">TRAVELLERS & CLASS</span>
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
              <span>{travelClass}</span>
            </div>
          </div>
          <button className="search-button">SEARCH</button>
        </div>
      </div>
      <div className="offer-caption">
        <h2>Exclusive Offers</h2>
        <ul>
          <li onClick={() => handleFilterChange("ALL")}>BestOffers</li>
          <li onClick={() => handleFilterChange("FLIGHTS")}>Flight</li>
          <li onClick={() => handleFilterChange("HOTELS")}>Hotel</li>
          <li onClick={() => handleFilterChange("CABS")}>Cab</li>
        </ul>
      </div>
    </div>
  );
};

export default Flights;
