const SearchBar = ({ value, onChange }) => {
  return (
    <div className="d-flex align-items-center mb-3">
      <label className="me-2 fw-semibold">Search:</label>
      <input
        type="text"
        className="form-control"
        style={{ maxWidth: "250px" }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
