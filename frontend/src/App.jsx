import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";
import CustomerTable from "./CustomerTable";
import EmployeeTable from "./EmployeeTable";
import HotelTable from "./HotelTable";
import RoomTable from "./RoomTable";
import RoomsPerAreaTable from "./RoomsPerAreaTable";
import CapacityPerHotel from "./CapacityPerHotelTable";
import RoomSearch from "./RoomSearch";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <RoomSearch />
          </Route>
          <Route path="/views">
            <div className="row">
              <div className="col-md-6">
                <RoomsPerAreaTable />
              </div>
              <div className="col-md-6">
                <CapacityPerHotel />
              </div>
            </div>
          </Route>
          <Route path="/tables">
            <CustomerTable />
            <EmployeeTable />
            <HotelTable />
            <RoomTable />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
