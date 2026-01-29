import { useEffect, useState } from "react";
import { useUpdatePrescriptionMutation } from "../../../../services/prescriptionApi";

function EditPrescription({ prescription, onClose }) {
  const [form, setForm] = useState({
    medicine: "",
    notes: "",
  });

  const [updatePrescription, { isLoading }] = useUpdatePrescriptionMutation();

  /* ---------- Populate form when prescription changes ---------- */
  useEffect(() => {
    if (prescription) {
      setForm({
        medicine: prescription.medicine || "",
        notes: prescription.notes || "",
      });
    }
  }, [prescription]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updatePrescription({
        prescriptionId: prescription.prescriptionId,
        ...form,
      }).unwrap();

      alert("Prescription updated successfully");

      if (onClose) onClose();
    } catch (err) {
      alert(err?.data?.message || "Failed to update prescription");
    }
  };

  if (!prescription) return null;

  return (
    <div className="mt-4">
      <h4 className="mb-3">Edit Prescription</h4>

      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
        {/* medicine */}
        <div className="mb-3">
          <label className="form-label">medicine</label>
          <textarea
            className="form-control"
            name="medicine"
            rows="2"
            value={form.medicine}
            onChange={handleChange}
            required
          />
        </div>

        {/* Notes */}
        <div className="mb-4">
          <label className="form-label">Notes</label>
          <textarea
            className="form-control"
            name="notes"
            rows="2"
            value={form.notes}
            onChange={handleChange}
          />
        </div>

        {/* Actions */}
        <div className="d-flex gap-2">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoading}
          >
            {isLoading ? "Updating..." : "Update Prescription"}
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => onClose()}
            disabled={isLoading}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditPrescription;
