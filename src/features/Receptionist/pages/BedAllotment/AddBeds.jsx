import React, { useState } from "react";
import {
  useGetAllWardsQuery,
  useCreateBedMutation,
} from "../../../../services/receptionistApi";

function AddBeds() {
  const [bedNumber, setBedNumber] = useState("");
  const [wardId, setWardId] = useState("");

  const { data: wards = [] } = useGetAllWardsQuery();
  const [createBed, { isLoading }] = useCreateBedMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createBed({
      bedNumber,
      wardId,
    });

    setBedNumber("");
    setWardId("");
    alert("Bed added successfully");
  };

  return (
    <div className="mt-4">
      <h4>Add Bed</h4>

      <form onSubmit={handleSubmit} className="border p-4 rounded">

        <div className="mb-3">
          <label className="form-label">Ward</label>
          <select
            className="form-select"
            value={wardId}
            onChange={(e) => setWardId(e.target.value)}
            required
          >
            <option value="">Select Ward</option>
            {wards.map((w) => (
              <option key={w.id} value={w.id}>
                {w.wardName}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Bed Number</label>
          <input
            className="form-control"
            value={bedNumber}
            onChange={(e) => setBedNumber(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-primary" disabled={isLoading}>
          {isLoading ? "Saving..." : "Add Bed"}
        </button>
      </form>
    </div>
  );
}

export default AddBeds;
