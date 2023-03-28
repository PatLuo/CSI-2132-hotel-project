import { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="App">
      <Table data={data} table={"hotel_chain"} />
      <button className="btn btn-primary">hello</button>
    </div>
  );
}

export default App;
