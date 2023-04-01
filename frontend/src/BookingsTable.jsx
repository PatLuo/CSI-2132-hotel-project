import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import DatePicker from "react-datepicker";

function BookingsTable() {
  const [data, setData] = useState([]);
  const [paymentType, setPaymentType] = useState("");
  const [reservation_status, setReservationStatus] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [pk, setPK] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(`http://localhost:3000/booking`).then((res) => {
      setData(res.data);
      setData((data) => data.map((row) => ({ ...row, start_date: row["start_date"].substring(0, 10) }))); //remove time from date format
      setData((data) => data.map((row) => ({ ...row, end_date: row["end_date"].substring(0, 10) }))); //remove time from date format
    });
  };

  const editBooking = (row) => {
    const { cust_ssn, room_id, hotel_id, chain_id, payment_type, reservation_status } = row;
    if (payment_type == null) {
      setPaymentType("");
    } else {
      setPaymentType(payment_type);
    }
    setReservationStatus(reservation_status);
    setPK({ cust_ssn: cust_ssn, room_id: room_id, hotel_id: hotel_id, chain_id: chain_id });
    setShowModal(true);
  };

  const submitEdit = () => {
    const newData = { payment_type: paymentType, reservation_status: reservation_status };
    console.log(newData);
    axios.put(`http://localhost:3000/booking`, { newData: newData, originalPK: pk }).then((res) => {
      if (res.data == "success") {
        setShowModal(false);
        fetchData();
      } else {
        alert("Error code " + res.data);
      }
    });
  };

  return (
    <>
      <h1>Bookings/Rentings Table</h1>

      <table className="table">
        <thead>
          <tr>
            <th>cust_ssn</th>
            <th>room_id</th>
            <th>hotel_id</th>
            <th>chain_id</th>
            <th>payment_type</th>
            <th>payment_amount</th>
            <th>start_date</th>
            <th>end_date</th>
            <th>reservation_status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => {
            const { cust_ssn, room_id, hotel_id, chain_id, payment_type, payment_amount, start_date, end_date, reservation_status } = row;
            return (
              <tr key={rowIndex}>
                <th>{cust_ssn}</th>
                <th>{room_id}</th>
                <th>{hotel_id}</th>
                <th>{chain_id}</th>
                <th>{payment_type}</th>
                <th>{payment_amount}</th>
                <th>{start_date}</th>
                <th>{end_date}</th>
                <th>{reservation_status}</th>
                <th>
                  <button className="btn btn-primary" onClick={() => editBooking(row)}>
                    Edit
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <h3>Booking Info</h3>
        <label>payment_type: </label>
        <select className="form-control" value={paymentType} onChange={(event) => setPaymentType(event.target.value)}>
          <option value="">select...</option>
          <option value="cash">cash</option>
          <option value="credit">credit</option>
          <option value="debit">debit</option>
        </select>

        <label>reservation_status: </label>
        <select className="form-control" value={reservation_status} onChange={(event) => setReservationStatus(event.target.value)}>
          <option value="booking">booking</option>
          <option value="renting">renting</option>
        </select>

        <button type="button" className="btn btn-primary" onClick={submitEdit}>
          Save Edit
        </button>
      </Modal>
    </>
  );
}

export default BookingsTable;
