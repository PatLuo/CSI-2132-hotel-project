import { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";
import CustomerTable from "./CustomerTable";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CustomerTable />
      <button className="btn btn-primary">hello</button>
    </div>
  );
}

export default App;
