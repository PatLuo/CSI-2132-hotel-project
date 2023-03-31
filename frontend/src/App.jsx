import { useState, useEffect } from "react";
import axios from "axios";
import CustomerTable from "./CustomerTable";
import EmployeeTable from "./EmployeeTable";
import HotelTable from "./HotelTable";
import RoomTable from "./RoomTable";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CustomerTable className="w-100" />
      <EmployeeTable />
      <HotelTable />
      <RoomTable />
    </div>
  );
}

export default App;
