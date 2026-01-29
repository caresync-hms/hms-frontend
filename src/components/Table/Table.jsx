import { useState } from "react";

import { Icons } from "../../assets/icons";
const Table = ({ columns, data, actions }) => {
  const [entries, setEntries] = useState(10);

  const handleEntriesChange = (e) => {
    setEntries(parseInt(e.target.value));
  };

  return (
    <div className="table-responsive">
      {/* Top Bar */}
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div></div>
        <div className="d-flex align-items-center">
          <label className="me-2 fw-semibold">Show</label>
          <select
            className="form-select"
            style={{ width: "80px" }}
            value={entries}
            onChange={handleEntriesChange}
          >
            {[5, 10, 25, 50, 100].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <label className="ms-2 fw-semibold">entries</label>
        </div>
      </div>

      {/* Table */}
      <table className="table table-bordered table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th style={{ width: "50px" }}>#</th>
            {columns.map((col) => (
              <th key={col.key}>{col.label}</th>
            ))}
            {actions && <th style={{ width: "120px" }}>Options</th>}
          </tr>
        </thead>

        <tbody>
          {data.slice(0, entries).map((row, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? "#f8f9fa" : "white",
              }}
            >
              <td>{index + 1}</td>

              {columns.map((col) => (
                <td key={col.key}>{row[col.key]}</td>
              ))}

              {/* Options Column */}
              {actions && (
                <td>
                  <div className="d-flex gap-2">
                    {actions?.edit && (
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => actions.edit(row)}
                      >
                        {Icons.Wrench}
                      </button>
                    )}
                    {actions?.download && (
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => actions.download(row)}
                      >
                        {Icons.DownLoad}
                      </button>
                    )}
                    {actions?.delete && (
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => actions.delete(row)}
                      >
                        {Icons.Trash}
                      </button>
                    )}
                    {actions?.view && (
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => actions.view(row)}
                      >
                        {Icons.Eye} View
                      </button>
                    )}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
