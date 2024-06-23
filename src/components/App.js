import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Flights from "./FLIGHTS/Flights";
import Hotels from "./HOTELS/Hotels";
import Train from "./TRAINS/Train";
import Bus from "./BUS/Bus";
import Login from "./LOGIN/Login";
import HomePage from "./HomePage/HomePage";
import Applayout from "./Applayout";
import { OfferProvider } from "../Context/OffersContext";

function App() {
  return (
    <OfferProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route element={<Applayout />}>
              <Route path="/" element={<Flights />} />
              <Route path="/Hotel" element={<Hotels />} />
              <Route path="/Train" element={<Train />} />
              <Route path="/Bus" element={<Bus />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/HomePage" element={<HomePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </OfferProvider>
  );
}

export default App;
