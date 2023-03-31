import { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RoomSearch = () => {
  const url = "http://localhost:3000/filter";

  //search criteria
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [capacity, setCapacity] = useState("");
  const [area, setArea] = useState("");
  const [hotelChain, setHotelChain] = useState("");
  const [hotelCategory, setHotelCategory] = useState("");
  const [numRooms, setNumRooms] = useState("");
  const [roomPrice, setRoomPrice] = useState("");

  //arrays containing rooms ids that match the search criteria
  let filteredByDate = [];
  let filteredByCapacity = [];
  let filteredByArea = [];
  let filteredByHotelChain = [];
  let filteredByHotelCategory = [];
  let filteredByNumRooms = [];
  let filteredByRoomPrice = [];

  //array containing the intersection of the above arrays
  const [intersection, setIntersection] = useState([]);

  useEffect(() => {
    console.log(intersection);
  }, [intersection]);

  const searchByDate = async () => {
    const range = startDate.toLocaleDateString().replace(/\//g, "-") + "," + endDate.toLocaleDateString().replace(/\//g, "-");
    await axios.get(`${url}/date/${range}`).then((res) => {
      filteredByDate = res.data.map((x) => x.room_id);
    });
  };

  const searchByCapacity = async () => {
    if (capacity !== "") {
      await axios.get(`${url}/capacity/${capacity}`).then((res) => {
        filteredByCapacity = res.data.map((x) => x.room_id);
      });
    }
  };

  const searchByArea = async () => {
    if (area !== "") {
      await axios.get(`${url}/area/${area}`).then((res) => {
        filteredByArea = res.data.map((x) => x.room_id);
      });
    }
  };

  const searchByChain = async () => {
    if (hotelChain !== "") {
      await axios.get(`${url}/chain/${hotelChain}`).then((res) => {
        filteredByHotelChain = res.data.map((x) => x.room_id);
      });
    }
  };

  const searchByCategory = async () => {
    if (hotelCategory !== "") {
      await axios.get(`${url}/category/${hotelCategory}`).then((res) => {
        filteredByHotelCategory = res.data.map((x) => x.room_id);
      });
    }
  };

  const searchByNumRooms = async () => {
    if (numRooms !== "") {
      await axios.get(`${url}/numRooms/${numRooms}`).then((res) => {
        filteredByNumRooms = res.data.map((x) => x.room_id);
      });
    }
  };

  const searchByPrice = async () => {
    if (roomPrice !== "") {
      await axios.get(`${url}/price/${roomPrice}`).then((res) => {
        filteredByRoomPrice = res.data.map((x) => x.room_id);
      });
    }
  };

  const handleSearch = async () => {
    await searchByDate();
    await searchByCapacity();
    await searchByArea();
    await searchByChain();
    await searchByCategory();
    await searchByNumRooms();
    await searchByPrice();

    const filteredArrays = [
      filteredByDate,
      filteredByCapacity,
      filteredByArea,
      filteredByHotelChain,
      filteredByHotelCategory,
      filteredByNumRooms,
      filteredByRoomPrice,
    ];
    const nonEmptyArrays = filteredArrays.filter((x) => x.length > 0);
    const roomsInAll = nonEmptyArrays.reduce((accumulator, currentArray) => {
      return accumulator.filter((element) => currentArray.includes(element));
    });
    setIntersection(roomsInAll);
  };

  return (
    <div>
      <h1>Room Search</h1>

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
        <option value="">Select</option>
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
        <option value="">Select</option>
        <option value="1">Chain 1</option>
        <option value="2">Chain 2</option>
        <option value="3">Chain 3</option>
        <option value="4">Chain 4</option>
        <option value="5">Chain 5</option>
      </select>

      <label htmlFor="hotelCategory">Hotel category:</label>
      <select className="form-control" value={hotelCategory} onChange={(event) => setHotelCategory(event.target.value)}>
        <option value="">Select</option>
        <option value="1">1 Star</option>
        <option value="2">2 Star</option>
        <option value="3">3 Star</option>
        <option value="4">4 Star</option>
        <option value="5">5 Star</option>
      </select>

      <label htmlFor="numRooms">Number of rooms:</label>
      <input className="form-control" type="number" value={numRooms} onChange={(event) => setNumRooms(event.target.value)} />

      <label htmlFor="roomPrice">Room price:</label>
      <input className="form-control" type="number" value={roomPrice} onChange={(event) => setRoomPrice(event.target.value)} />

      <button onClick={handleSearch}>Search</button>
      {intersection.length > 0 && (
        <div>
          <h2>Results</h2>
        </div>
      )}
    </div>
  );
};

export default RoomSearch;
