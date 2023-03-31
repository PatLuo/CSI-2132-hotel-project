import { useEffect, useState } from "react";
import axios from "axios";

function RoomsPerAreaTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("http://localhost:3000/views/roomsPerArea").then((res) => {
      setData(res.data);
    });
  };

  return (
    <>
      <h1>Available Rooms Per City </h1>
      <table className="table">
        <thead>
          <tr>
            <th>city</th>
            <th>available_rooms</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            return (
              <tr key={row.city}>
                <td>{row.city}</td>
                <td>{row.available_rooms}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default RoomsPerAreaTable;
