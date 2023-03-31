import { useEffect, useState } from "react";
import axios from "axios";

function HotelTable() {
  const [data, setData] = useState([]);
  const [editableRow, setEditableRow] = useState();
  const [updatedRowData, setupdatedRowData] = useState();
  const [showNewRow, setShowNewRow] = useState(false);
  const [newRowData, setnewRowData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("http://localhost:3000/hotel").then((res) => {
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
    axios.put(`http://localhost:3000/hotel`, { newData: updatedRowData, originalPK: originalPK }).then((res) => {
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
    axios.post(`http://localhost:3000/hotel`, newRowData).then((res) => {
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
    axios.delete(`http://localhost:3000/hotel/${originalPK}`).then((res) => {
      if (res.data == "success") {
        fetchData();
      } else {
        alert("Error code " + res.data);
      }
    });
  };

  return (
    <>
      <h1>hotel Table</h1>
      {!showNewRow && (
        <button className="btn btn-primary" onClick={() => setShowNewRow(!showNewRow)}>
          Add New hotel
        </button>
      )}
      <table className="table">
        <thead>
          <tr>
            <th>hotel_id</th>
            <th>chain_id</th>
            <th>city</th>
            <th>province</th>
            <th>street_number</th>
            <th>street_name</th>
            <th>postal_code</th>
            <th>email</th>
            <th>number_of_rooms</th>
            <th>categorization</th>
          </tr>
        </thead>
        <tbody>
          {showNewRow && (
            <tr>
              <th></th>
              <th>
                <input type="text" className="form-control" value={newRowData.chain_id} onChange={(event) => handleNewRowChange(event, "chain_id")} />
              </th>
              <th>
                <input type="text" className="form-control" value={newRowData.city} onChange={(event) => handleNewRowChange(event, "city")} />
              </th>
              <th>
                <input type="text" className="form-control" value={newRowData.province} onChange={(event) => handleNewRowChange(event, "province")} />
              </th>
              <th>
                <input
                  type="text"
                  className="form-control"
                  value={newRowData.street_number}
                  onChange={(event) => handleNewRowChange(event, "street_number")}
                />
              </th>
              <th>
                <input
                  type="text"
                  className="form-control"
                  value={newRowData.street_name}
                  onChange={(event) => handleNewRowChange(event, "street_name")}
                />
              </th>
              <th>
                <input
                  type="text"
                  className="form-control"
                  value={newRowData.postal_code}
                  onChange={(event) => handleNewRowChange(event, "postal_code")}
                />
              </th>
              <th>
                <input type="text" className="form-control" value={newRowData.email} onChange={(event) => handleNewRowChange(event, "email")} />
              </th>
              <th>
                <input
                  type="text"
                  className="form-control"
                  value={newRowData.number_of_rooms}
                  onChange={(event) => handleNewRowChange(event, "number_of_rooms")}
                />
              </th>
              <th>
                <input
                  type="text"
                  className="form-control"
                  value={newRowData.categorization}
                  onChange={(event) => handleNewRowChange(event, "categorization")}
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
            const { chain_id, hotel_id, city, province, street_number, street_name, postal_code, email, number_of_rooms, categorization } = row;
            return (
              <tr key={rowIndex}>
                {editableRow != rowIndex ? (
                  <>
                    <th>{hotel_id}</th>
                    <th>{chain_id}</th>
                    <th>{city}</th>
                    <th>{province}</th>
                    <th>{street_number}</th>
                    <th>{street_name}</th>
                    <th>{postal_code}</th>
                    <th>{email}</th>
                    <th>{number_of_rooms}</th>
                    <th>{categorization}</th>
                    <th>
                      <button className="btn btn-primary" onClick={() => toggleEdit(rowIndex)}>
                        Edit
                      </button>
                    </th>
                    <th>
                      <button className="btn btn-danger" onClick={() => handleDelete(chain_id + " " + hotel_id)}>
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
                        value={updatedRowData.chain_id}
                        onChange={(event) => handleInputChange(event, "chain_id")}
                      />
                    </th>

                    <th>
                      <input
                        type="text"
                        className="form-control"
                        value={updatedRowData.city}
                        onChange={(event) => handleInputChange(event, "city")}
                      />
                    </th>
                    <th>
                      <input
                        type="text"
                        className="form-control"
                        value={updatedRowData.province}
                        onChange={(event) => handleInputChange(event, "province")}
                      />
                    </th>
                    <th>
                      <input
                        type="text"
                        className="form-control"
                        value={updatedRowData.street_number}
                        onChange={(event) => handleInputChange(event, "street_number")}
                      />
                    </th>
                    <th>
                      <input
                        type="text"
                        className="form-control"
                        value={updatedRowData.street_name}
                        onChange={(event) => handleInputChange(event, "street_name")}
                      />
                    </th>
                    <th>
                      <input
                        type="text"
                        className="form-control"
                        value={updatedRowData.postal_code}
                        onChange={(event) => handleInputChange(event, "postal_code")}
                      />
                    </th>
                    <th>
                      <input
                        type="text"
                        className="form-control"
                        value={updatedRowData.email}
                        onChange={(event) => handleInputChange(event, "email")}
                      />
                    </th>
                    <th>
                      <input
                        type="text"
                        className="form-control"
                        value={updatedRowData.number_of_rooms}
                        onChange={(event) => handleInputChange(event, "number_of_rooms")}
                      />
                    </th>
                    <th>
                      <input
                        type="text"
                        className="form-control"
                        value={updatedRowData.categorization}
                        onChange={(event) => handleInputChange(event, "categorization")}
                      />
                    </th>
                    <th>
                      <button className="btn btn-success" onClick={() => handleSave([data[rowIndex]["chain_id"], data[rowIndex]["hotel_id"]])}>
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

export default HotelTable;
