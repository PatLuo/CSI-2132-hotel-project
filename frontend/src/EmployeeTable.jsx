import { useEffect, useState } from "react";
import axios from "axios";

function EmployeeTable() {
  const [data, setData] = useState([]);
  const [editableRow, setEditableRow] = useState();
  const [updatedRowData, setupdatedRowData] = useState();
  const [showNewRow, setShowNewRow] = useState(false);
  const [newRowData, setnewRowData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("http://localhost:3000/employee").then((res) => {
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
    axios.put(`http://localhost:3000/employee`, { newData: updatedRowData, originalPK: originalPK }).then((res) => {
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
    axios.post(`http://localhost:3000/employee`, newRowData).then((res) => {
      if (res.data == "success") {
        setShowNewRow(false);
        setnewRowData({});
        fetchData();
      } else {
        alert("Error code " + res.data);
      }
    });
  };

  const handleDelete = (ssn) => {
    axios.delete(`http://localhost:3000/employee/${ssn}`).then((res) => {
      if (res.data == "success") {
        fetchData();
      } else {
        alert("Error code " + res.data);
      }
    });
  };

  return (
    <>
      <h1>Employee Table</h1>
      {!showNewRow && (
        <button className="btn btn-primary" onClick={() => setShowNewRow(!showNewRow)}>
          Add New Employee
        </button>
      )}
      <table className="table">
        <thead>
          <tr>
            <th>ssn</th>
            <th>first_name</th>
            <th>last_name</th>
            <th>city</th>
            <th>province</th>
            <th>street_number</th>
            <th>street_name</th>
            <th>postal_code</th>
            <th>position</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {showNewRow && (
            <tr>
              <th>
                <input type="text" className="form-control" value={newRowData.ssn} onChange={(event) => handleNewRowChange(event, "ssn")} />
              </th>
              <th>
                <input
                  type="text"
                  className="form-control"
                  value={newRowData.first_name}
                  onChange={(event) => handleNewRowChange(event, "first_name")}
                />
              </th>
              <th>
                <input
                  type="text"
                  className="form-control"
                  value={newRowData.last_name}
                  onChange={(event) => handleNewRowChange(event, "last_name")}
                />
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
                <input type="text" className="form-control" value={newRowData.position} onChange={(event) => handleNewRowChange(event, "position")} />
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
            const { ssn, first_name, last_name, city, province, street_number, street_name, postal_code, position } = row;
            return (
              <tr key={rowIndex}>
                {editableRow != rowIndex ? (
                  <>
                    <th>{ssn}</th>
                    <th>{first_name}</th>
                    <th>{last_name}</th>
                    <th>{city}</th>
                    <th>{province}</th>
                    <th>{street_number}</th>
                    <th>{street_name}</th>
                    <th>{postal_code}</th>
                    <th>{position}</th>
                    <th>
                      <button className="btn btn-primary" onClick={() => toggleEdit(rowIndex)}>
                        Edit
                      </button>
                    </th>
                    <th>
                      <button className="btn btn-danger" onClick={() => handleDelete(ssn)}>
                        Delete
                      </button>
                    </th>
                  </>
                ) : (
                  <>
                    <th>
                      <input type="text" className="form-control" value={updatedRowData.ssn} onChange={(event) => handleInputChange(event, "ssn")} />
                    </th>
                    <th>
                      <input
                        type="text"
                        className="form-control"
                        value={updatedRowData.first_name}
                        onChange={(event) => handleInputChange(event, "first_name")}
                      />
                    </th>
                    <th>
                      <input
                        type="text"
                        className="form-control"
                        value={updatedRowData.last_name}
                        onChange={(event) => handleInputChange(event, "last_name")}
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
                        value={updatedRowData.position}
                        onChange={(event) => handleInputChange(event, "position")}
                      />
                    </th>
                    <th>
                      <button className="btn btn-success" onClick={() => handleSave(data[rowIndex]["ssn"])}>
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

export default EmployeeTable;
