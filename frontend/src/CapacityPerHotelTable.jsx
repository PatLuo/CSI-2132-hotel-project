import { useEffect, useState } from "react";
import axios from "axios";

function CapacityPerHotel() {
  const [data, setData] = useState([]);
  const [searchID, setSearchID] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("http://localhost:3000/views/capacityPerHotel").then((res) => {
      setData(res.data);
    });
  };

  const fetchSpecificData = () => {
    axios.get(`http://localhost:3000/views/capacityPerHotel/${searchID}`).then((res) => {
      setData(res.data);
    });
  };

  return (
    <>
      <h1>Capacity Per Hotel </h1>
      <input
        type="text"
        className="form-control"
        value={searchID}
        onChange={(e) => {
          setSearchID(e.target.value);
        }}
      />
      <button onClick={fetchSpecificData} className="btn btn-primary">
        Search
      </button>

      <table className="table">
        <thead>
          <tr>
            <th>hotel_id</th>
            <th>total_capacity</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            return (
              <tr key={row.hotel_id}>
                <td>{row.hotel_id}</td>
                <td>{row.total_capacity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default CapacityPerHotel;
