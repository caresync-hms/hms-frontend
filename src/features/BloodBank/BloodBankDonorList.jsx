import bloodDonorConfig from "./bloodDonorConfig.js";


function BloodDonorList() {
  return (
    <table className="table table-bordered table-striped">
      <thead className="table-dark">
        <tr>
          {bloodDonorConfig.columns.map(col => (
            <th key={col.key}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {bloodDonorConfig.data.map(row => (
          <tr key={row.id}>
            {bloodDonorConfig.columns.map(col => (
              <td key={col.key}>{row[col.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default BloodDonorList;
