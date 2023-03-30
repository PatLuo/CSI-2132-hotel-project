import { useEffect, useState } from "react";
import axios from "axios";

function Table(props) {
  const [editableRow, setEditableRow] = useState();
  const [updatedRowData, setupdatedRowData] = useState();

  const data = props.data;
  const headers = data && data.length > 0 ? Object.keys(data[0]) : [];

  const toggleEdit = (rowIndex) => {
    if (editableRow === rowIndex) {
      setEditableRow(null);
      setupdatedRowData(null);
      set;
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

  const handleSave = () => {
    axios.put(`http://localhost:3000`, updatedRowData).then((res) => {
      console.log(res.data);
      setEditableRow(null);
      setupdatedRowData(null);
    });
  };

  return (
    <table className="table">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => {
          const isEditable = editableRow == rowIndex;
          const rowValues = item;
          return (
            <tr key={rowIndex}>
              {headers.map((header, columnIndex) => {
                const value = rowValues[header];
                return (
                  <td key={columnIndex}>
                    {isEditable ? <input type="text" value={updatedRowData[header]} onChange={(event) => handleInputChange(event, header)} /> : value}
                  </td>
                );
              })}
              <td>
                {isEditable ? (
                  <>
                    <button className="btn btn-success" onClick={() => handleSave()}>
                      Save
                    </button>
                    <button className="btn btn-danger" onClick={() => toggleEdit(rowIndex)}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <button className="btn btn-primary" onClick={() => toggleEdit(rowIndex)}>
                    Edit
                  </button>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
