import { useEffect, useState } from "react";
import axios from "axios";

function RoomTable() {
  const [data, setData] = useState([]);
  const [editableRow, setEditableRow] = useState();
  const [updatedRowData, setupdatedRowData] = useState();
  const [showNewRow, setShowNewRow] = useState(false);
  const [newRowData, setnewRowData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("http://localhost:3000/room").then((res) => {
      setData(res.data);
    });
  };

  const toggleEdit = (rowIndex) => {
    if (editableRow === rowIndex) {
      setEditableRow(null);
      setupdatedRowData(null);
    } else {
      setEditableRow(rowIndex);
      setupdatedRowData(data[rowIndex]);
    }
  };

  const handleInputChange = (event, columnName) => {
    const newValue = event.target.value;
    setupdatedRowData((updatedRowData) => ({
      ...updatedRowData,
      [columnName]: newValue,
    }));
  };

  const handleSave = (originalPK) => {
    axios.put(`http://localhost:3000/room`, { newData: updatedRowData, originalPK: originalPK }).then((res) => {
      if (res.data == "success") {
        setEditableRow(null);
        setupdatedRowData(null);
        fetchData();
      } else {
        alert("Error code " + res.data);
      }
    });
  };

  const handleNewRowChange = (event, columnName) => {
    const newValue = event.target.value;
    setnewRowData((newRowData) => ({
      ...newRowData,
      [columnName]: newValue,
    }));
  };

  const handleAddNewRow = () => {
    console.log(newRowData);
    axios.post(`http://localhost:3000/room`, newRowData).then((res) => {
      if (res.data == "success") {
        setShowNewRow(false);
        setnewRowData({});
        fetchData();
      } else {
        alert("Error code " + res.data);
      }
    });
  };

  const handleDelete = (originalPK) => {
    axios.delete(`http://localhost:3000/room/${originalPK}`).then((res) => {
      if (res.data == "success") {
        fetchData();
      } else {
        alert("Error code " + res.data);
      }
    });
  };

  return (
    <>
      <h1>room Table</h1>
      {!showNewRow && (
        <button className="btn btn-primary" onClick={() => setShowNewRow(!showNewRow)}>
          Add New Room
        </button>
      )}
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
          {showNewRow && (
            <tr>
              <th></th>
              <th>
                <input type="text" className="form-control" value={newRowData.hotel_id} onChange={(event) => handleNewRowChange(event, "hotel_id")} />
              </th>
              <th>
                <input type="text" className="form-control" value={newRowData.chain_id} onChange={(event) => handleNewRowChange(event, "chain_id")} />
              </th>
              <th>
                <input
                  type="text"
                  className="form-control"
                  value={newRowData.renting_status}
                  onChange={(event) => handleNewRowChange(event, "renting_status")}
                />
              </th>
              <th>
                <input
                  type="text"
                  className="form-control"
                  value={newRowData.room_view}
                  onChange={(event) => handleNewRowChange(event, "room_view")}
                />
              </th>
              <th>
                <input type="text" className="form-control" value={newRowData.price} onChange={(event) => handleNewRowChange(event, "price")} />
              </th>
              <th>
                <input type="text" className="form-control" value={newRowData.capacity} onChange={(event) => handleNewRowChange(event, "capacity")} />
              </th>
              <th>
                <input
                  type="text"
                  className="form-control"
                  value={newRowData.expandability}
                  onChange={(event) => handleNewRowChange(event, "expandability")}
                />
              </th>
              <th>
                <button className="btn btn-success" onClick={() => handleAddNewRow()}>
                  Add
                </button>
              </th>
              <th>
                <button className="btn btn-danger" onClick={() => setShowNewRow(false)}>
                  Cancel
                </button>
              </th>
            </tr>
          )}
          {data.map((row, rowIndex) => {
            const { room_id, hotel_id, chain_id, renting_status, room_view, price, capacity, expandability } = row;
            return (
              <tr key={rowIndex}>
                {editableRow != rowIndex ? (
                  <>
                    <th>{room_id}</th>
                    <th>{hotel_id}</th>
                    <th>{chain_id}</th>
                    <th>{renting_status}</th>
                    <th>{room_view}</th>
                    <th>{price}</th>
                    <th>{capacity}</th>
                    <th>{expandability}</th>
                    <th>
                      <button className="btn btn-primary" onClick={() => toggleEdit(rowIndex)}>
                        Edit
                      </button>
                    </th>
                    <th>
                      <button className="btn btn-danger" onClick={() => handleDelete(chain_id + " " + room_id)}>
                        Delete
                      </button>
                    </th>
                  </>
                ) : (
                  <>
                    <th></th>
                    <th>
                      <input
                        type="text"
                        className="form-control"
                        value={updatedRowData.hotel_id}
                        onChange={(event) => handleInputChange(event, "hotel_id")}
                      />
                    </th>
                    <th>
                      <input
                        type="text"
                        className="form-control"
                        value={updatedRowData.chain_id}
                        onChange={(event) => handleInputChange(event, "chain_id")}
                      />
                    </th>

                    <th>
                      <input
                        type="text"
                        className="form-control"
                        value={updatedRowData.renting_status}
                        onChange={(event) => handleInputChange(event, "renting_status")}
                      />
                    </th>
                    <th>
                      <input
                        type="text"
                        className="form-control"
                        value={updatedRowData.room_view}
                        onChange={(event) => handleInputChange(event, "room_view")}
                      />
                    </th>
                    <th>
                      <input
                        type="text"
                        className="form-control"
                        value={updatedRowData.price}
                        onChange={(event) => handleInputChange(event, "price")}
                      />
                    </th>
                    <th>
                      <input
                        type="text"
                        className="form-control"
                        value={updatedRowData.capacity}
                        onChange={(event) => handleInputChange(event, "capacity")}
                      />
                    </th>
                    <th>
                      <input
                        type="text"
                        className="form-control"
                        value={updatedRowData.expandability}
                        onChange={(event) => handleInputChange(event, "expandability")}
                      />
                    </th>
                    <th>
                      <button
                        className="btn btn-success"
                        onClick={() => handleSave([data[rowIndex]["room_id"], data[rowIndex]["hotel_id"], data[rowIndex]["chain_id"]])}
                      >
                        Save
                      </button>
                    </th>
                    <th>
                      <button className="btn btn-danger" onClick={() => toggleEdit(rowIndex)}>
                        Cancel
                      </button>
                    </th>
                  </>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default RoomTable;
