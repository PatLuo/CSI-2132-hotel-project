import { useEffect, useState } from "react";
import axios from "axios";

function CustomerTable() {
  const [data, setData] = useState([]);
  const [editableRow, setEditableRow] = useState();
  const [updatedRowData, setupdatedRowData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("http://localhost:3000/getCustomer").then((res) => {
      setData(res.data);
      setData((data) => data.map((row) => ({ ...row, date_of_registration: row["date_of_registration"].substring(0, 10) }))); //remove time from date format
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
    axios.put(`http://localhost:3000/updateCustomer`, { newData: updatedRowData, originalPK: originalPK }).then((res) => {
      if (res.data == "success") {
        setEditableRow(null);
        setupdatedRowData(null);
        fetchData();
      } else {
        let errorCode = res.data;
        alert("Error code " + errorCode);
      }
    });
  };

  return (
    <>
      <h1>Customer Table</h1>
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
            <th>date_of_registration</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => {
            const { ssn, first_name, last_name, city, province, street_number, street_name, postal_code, date_of_registration } = row;
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
                    <th>{date_of_registration}</th>
                    <th>
                      <button className="btn btn-primary" onClick={() => toggleEdit(rowIndex)}>
                        Edit
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
                        value={updatedRowData.date_of_registration}
                        onChange={(event) => handleInputChange(event, "date_of_registration")}
                      />
                    </th>
                    <th>
                      <button className="btn btn-success" onClick={() => handleSave(data[rowIndex]["ssn"])}>
                        Save
                      </button>
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

export default CustomerTable;
