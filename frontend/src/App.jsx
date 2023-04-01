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
import BookingsTable from "./BookingsTable";
import "./App.css";
import RoomSearchRenting from "./RoomSearchRenting";

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
            <RoomsPerAreaTable />
            <CapacityPerHotel />
          </Route>
          <Route path="/tables">
            <CustomerTable />
            <EmployeeTable />
            <HotelTable />
            <RoomTable />
          </Route>
          <Route path="/employees">
            <BookingsTable />
          </Route>
          <Route path="/renting">
            <RoomSearchRenting />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
