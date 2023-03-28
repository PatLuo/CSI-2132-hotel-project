import { useState } from "react";

function Table(props) {
  const [editableRow, setEditableRow] = useState();
  const [updatedData, setUpdatedData] = useState({});

  const data = props.data;
  const headers = data && data.length > 0 ? Object.keys(data[0]) : [];

  const toggleEdit = (rowIndex) => {
    if (editableRow === rowIndex) {
      setEditableRow(null);
    } else {
      setEditableRow(rowIndex);
    }
  };

  const handleInputChange = (event, rowIndex, columnName) => {
    const newValue = event.target.value;
    setUpdatedData({
      ...updatedData,
      [rowIndex]: {
        ...updatedData[rowIndex],
        [columnName]: newValue,
      },
    });
  };

  const handleSave = (rowIndex) => {
    const newData = [...data];
    const updatedRow = { ...newData[rowIndex], ...updatedData[rowIndex] };
    newData[rowIndex] = updatedRow;
    props.onSave(newData);
    setUpdatedData({});
    setEditableRow(null);
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
          const rowValues = updatedData[rowIndex] || item;
          return (
            <tr key={rowIndex}>
              {headers.map((header, columnIndex) => {
                const value = rowValues[header];
                return (
                  <td key={columnIndex}>
                    {isEditable ? <input type="text" value={value} onChange={(event) => handleInputChange(event, rowIndex, header)} /> : value}
                  </td>
                );
              })}
              <td>
                {isEditable ? (
                  <>
                    <button className="btn btn-success" onClick={() => handleSave(rowIndex)}>
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
