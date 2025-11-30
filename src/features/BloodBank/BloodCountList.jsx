import bloodBankConfig from "./bloodBankConfig.js";

function BloodBankList() {
  return (
    <table className="table table-bordered table-hover">
      <thead className="table-dark">
        <tr>
          {bloodBankConfig.columns.map((col) => (
            <th key={col.key}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {bloodBankConfig.data.map((row) => (
          <tr key={row.id}>
            <td>{row.bloodGroup}</td>
            <td className="fw-bold">{row.units}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default BloodBankList;
