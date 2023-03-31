import { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RoomSearch = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [capacity, setCapacity] = useState("");
  const [area, setArea] = useState("");
  const [hotelChain, setHotelChain] = useState("");
  const [hotelCategory, setHotelCategory] = useState("");
  const [numRooms, setNumRooms] = useState("");
  const [roomPrice, setRoomPrice] = useState("");

  const [filteredByDate, setFilteredByDate] = useState([]);
  const [filteredByCapacity, setFilteredByCapacity] = useState([]);
  const [filteredByArea, setFilteredByArea] = useState([]);
  const [filteredByHotelChain, setFilteredByHotelChain] = useState([]);
  const [filteredByHotelCategory, setFilteredByHotelCategory] = useState([]);
  const [filteredByNumRooms, setFilteredByNumRooms] = useState([]);
  const [filteredByRoomPrice, setFilteredByRoomPrice] = useState([]);

  const handleSearch = (filterCategory) => {
    axios.get("http://localhost:3000/filter").then((res) => {
      setData(res.data);
    });
  };

  return (
    <div>
      <h1>Room Search</h1>
      <ul>
        <li>{startDate.toLocaleDateString().replace(/\//g, "-")}</li>
        <li>{endDate.toLocaleDateString().replace(/\//g, "-")}</li>
        <li>{capacity}</li>
        <li>{area}</li>
        <li>{hotelChain}</li>
        <li>{hotelCategory}</li>
        <li>{numRooms}</li>
        <li>{roomPrice}</li>
      </ul>
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

      <label htmlFor="capacity">Capacity:</label>
      <select className="form-control" value={capacity} onChange={(event) => setCapacity(event.target.value)}>
        <option value="1">1 Person</option>
        <option value="2">2 Person</option>
        <option value="3">3 Person</option>
        <option value="4">4 Person</option>
        <option value="5">5 Person</option>
      </select>
      <label htmlFor="area">Area:</label>
      <input className="form-control" type="text" value={area} onChange={(event) => setArea(event.target.value)} />

      <label htmlFor="hotelChain">Hotel chain:</label>
      <select className="form-control" value={hotelChain} onChange={(event) => setHotelChain(event.target.value)}>
        <option value="">-- Select --</option>
        <option value="chain1">Chain 1</option>
        <option value="chain2">Chain 2</option>
        <option value="chain3">Chain 3</option>
        <option value="chain4">Chain 4</option>
        <option value="chain5">Chain 5</option>
      </select>

      <label htmlFor="hotelCategory">Hotel category:</label>
      <select className="form-control" value={hotelCategory} onChange={(event) => setHotelCategory(event.target.value)}>
        <option value="">1 Star</option>
        <option value="category2">2 Star</option>
        <option value="category3">3 Star</option>
        <option value="category3">4 Star</option>
        <option value="category3">4 Star</option>
      </select>

      <label htmlFor="numRooms">Number of rooms:</label>
      <input className="form-control" type="number" value={numRooms} onChange={(event) => setNumRooms(event.target.value)} />

      <label htmlFor="roomPrice">Room price:</label>
      <input className="form-control" type="number" value={roomPrice} onChange={(event) => setRoomPrice(event.target.value)} />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default RoomSearch;
