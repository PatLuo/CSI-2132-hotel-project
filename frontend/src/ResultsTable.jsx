import { useEffect, useState } from "react";
import axios from "axios";

function ResultsTable({ props }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/filter/results/${props}`).then((res) => {
      setData(res.data);
    });
  }, [props]);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>room_id</th>
            <th>hotel_id</th>
            <th>chain_id</th>
            <th>renting_status</th>
            <th>room_view</th>
            <th>price</th>
            <th>capacity</th>
            <th>expandability</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => {
            const { room_id, hotel_id, chain_id, renting_status, room_view, price, capacity, expandability } = row;
            return (
              <tr key={rowIndex}>
                <th>{room_id}</th>
                <th>{hotel_id}</th>
                <th>{chain_id}</th>
                <th>{renting_status}</th>
                <th>{room_view}</th>
                <th>{price}</th>
                <th>{capacity}</th>
                <th>{expandability}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ResultsTable;
