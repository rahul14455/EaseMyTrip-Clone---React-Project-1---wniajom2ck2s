import { createContext, useContext, useRef, useState } from "react";
import { useFlightIndiudvalContext } from "./FlightIndiudvalContext";

const FlightsMainContext = createContext();

function FlightsMainProvider({ children }) {
  const [fromIndex, setFromIndex] = useState("6514309e348f6fafa1b86600");
  const [toIndex, setToIndex] = useState("6514309e348f6fafa1b86601");
  const [isFromPopupOpen, setIsFromPopupOpen] = useState(false);
  const [isToPopupOpen, setIsToPopupOpen] = useState(false);
  const { airportList, cityName, setCityName } = useFlightIndiudvalContext();
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);
  const {
    city: fromCity,
    name: fromName,
    country: fromCountry,
    iata_code: fromIata_Code,
  } = airportList?.find(
    (item) => item._id === fromIndex || item.city === fromIndex
  ) || {};

  const {
    city: toCity,
    name: toName,
    country: toCountry,
    iata_code: toIata_Code,
  } = airportList?.find(
    (item) => item._id === toIndex || item.city === toIndex
  ) || {};
  const handleFrom = () => {
    setIsFromPopupOpen(true);
    setIsToPopupOpen(false);
  };
  const handleTo = () => {
    setIsFromPopupOpen(false);
    setIsToPopupOpen(true);
  };
  const chooseCity = (index, e, destination) => {
    e.stopPropagation();
    if (destination === "from") {
      setFromIndex(index);
      setIsFromPopupOpen(false);
    } else if (destination === "to") {
      setToIndex(index);
      setIsToPopupOpen(false);
    }
  };
  return (
    <FlightsMainContext.Provider
      value={{
        fromIndex,
        setFromIndex,
        fromCity,
        fromName,
        fromCountry,
        fromIata_Code,
        isFromPopupOpen,
        setIsFromPopupOpen,
        toCity,
        toCountry,
        toIata_Code,
        toName,
        toIndex,
        setToIndex,
        isToPopupOpen,
        setIsToPopupOpen,
        handleFrom,
        handleTo,
        inputRef,
        search,
        setSearch,
        cityName,
        setCityName,
        chooseCity,
      }}
    >
      {children}
    </FlightsMainContext.Provider>
  );
}

function useFlightsMainContext() {
  const context = useContext(FlightsMainContext);
  if (context === undefined) {
    throw new Error(
      "FlightsMainContext was used outside of  FlightsMainProvider"
    );
  }
  return context;
}
export { FlightsMainProvider, useFlightsMainContext };
