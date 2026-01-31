import { useState } from "react";
import Modal from "../../../../components/Modal/Modal";

function EditBedModal({ bed, onClose, onSave }) {
  const [bedNumber, setBedNumber] = useState(bed.bedNumber);
  const [status, setStatus] = useState(bed.status);

  return (
    <Modal title="Edit Bed" onClose={onClose}>
      <input
        className="form-control mb-2"
        value={bedNumber}
        onChange={(e) => setBedNumber(e.target.value)}
      />

      <select
        className="form-select mb-2"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="AVAILABLE">AVAILABLE</option>
        <option value="BLOCKED">BLOCKED</option>
        <option value="CLEANING">CLEANING</option>
      </select>

      <button
        className="btn btn-success"
        onClick={() => onSave({ bedNumber, status })}
      >
        Save
      </button>
    </Modal>
  );
}

export default EditBedModal;
