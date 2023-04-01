import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import DatePicker from "react-datepicker";

function ResultsTable({ props }) {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  // new booking data
  const [bookingData, setBookingData] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [paymentType, setPaymentType] = useState("");
  const [ssn, setSsn] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3000/filter/results/${props}`).then((res) => {
      setData(res.data);
    });
  }, [props]);

  const startBooking = (row) => {
    setShowModal(true);
    setBookingData(row);
  };

  const submitBooking = () => {
    const booking = {
      cust_ssn: ssn,
      room_id: bookingData.room_id,
      hotel_id: bookingData.hotel_id,
      chain_id: bookingData.chain_id,
      payment_type: paymentType,
      payment_amount: bookingData.price,
      start_date: startDate.toLocaleDateString().replace(/\//g, "-"),
      end_date: endDate.toLocaleDateString().replace(/\//g, "-"),
    };
    console.log(booking);
    axios.post("http://localhost:3000/filter/booking", booking).then((res) => {
      if (res.data == "success") {
        alert("Booking successful");
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
                  <button type="button" className="btn btn-primary" onClick={() => startBooking(row)}>
                    Book
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <h3>Booking Info</h3>
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
        <p>room_id:{bookingData.room_id}</p>
        <p>hotel_id:{bookingData.hotel_id}</p>
        <p>chain_id:{bookingData.chain_id}</p>
        <p>payment_amount:{bookingData.price}</p>
        <label htmlFor="capacity">payment_type: (Optional)</label>
        <select className="form-control" value={paymentType} onChange={(event) => setPaymentType(event.target.value)}>
          <option value="">Select</option>
          <option value="cash">cash</option>
          <option value="credit">credit</option>
          <option value="debit">debit</option>
        </select>
        <button type="button" className="btn btn-primary" onClick={submitBooking}>
          Submit Booking
        </button>
      </Modal>
    </>
  );
}

export default ResultsTable;
