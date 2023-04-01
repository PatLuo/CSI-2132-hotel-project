import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import DatePicker from "react-datepicker";

function ResultsTable({ props }) {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  // new renting data
  const [rentingData, setrentingData] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [paymentType, setPaymentType] = useState("");
  const [ssn, setSsn] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3000/filter/results/${props}`).then((res) => {
      setData(res.data);
    });
  }, [props]);

  const startRenting = (row) => {
    setShowModal(true);
    setrentingData(row);
  };

  const submitRenting = () => {
    const renting = {
      cust_ssn: ssn,
      room_id: rentingData.room_id,
      hotel_id: rentingData.hotel_id,
      chain_id: rentingData.chain_id,
      payment_type: paymentType,
      payment_amount: rentingData.price,
      start_date: startDate.toLocaleDateString().replace(/\//g, "-"),
      end_date: endDate.toLocaleDateString().replace(/\//g, "-"),
    };
    console.log(renting);
    axios.post("http://localhost:3000/filter/renting", renting).then((res) => {
      if (res.data == "success") {
        alert("renting successful");
        setShowModal(false);
      } else {
        alert("Error code " + res.data);
      }
    });
  };

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
                <th>
                  <button type="button" className="btn btn-primary" onClick={() => startRenting(row)}>
                    rent
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <h3>renting Info</h3>
        <label>SSN:</label>
        <input type="text" className="form-control" value={ssn} onChange={(e) => setSsn(e.target.value)} />

        <label htmlFor="startDate">Start date:</label>
        <DatePicker
          selected={startDate}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="yyyy-MM-dd"
          onChange={(date) => setStartDate(date)}
        />

        <label htmlFor="endDate">End date:</label>
        <DatePicker
          selected={endDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          dateFormat="yyyy-MM-dd"
          onChange={(date) => setEndDate(date)}
        />
        <p>room_id:{rentingData.room_id}</p>
        <p>hotel_id:{rentingData.hotel_id}</p>
        <p>chain_id:{rentingData.chain_id}</p>
        <p>payment_amount:{rentingData.price}</p>
        <label htmlFor="capacity">payment_type:</label>
        <select className="form-control" value={paymentType} onChange={(event) => setPaymentType(event.target.value)}>
          <option value="">Select</option>
          <option value="cash">cash</option>
          <option value="credit">credit</option>
          <option value="debit">debit</option>
        </select>
        <button type="button" className="btn btn-primary" onClick={submitRenting}>
          Submit renting
        </button>
      </Modal>
    </>
  );
}

export default ResultsTable;
