import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="App">
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <p>id:{item.id}</p>
            <p>hotels:{item.number_of_hotels}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
