// import { useState } from "react";
// import {
//   useGetAllWardsQuery,
//   useGetBedsByWardQuery,
//   useAssignBedMutation,
// } from "../../../../services/receptionistApi";

// function AssignBedModal({ patientId, onClose }) {
//   const [wardId, setWardId] = useState("");
//   const [bedId, setBedId] = useState("");

//   const { data: wards = [] } = useGetAllWardsQuery();
//   const { data: beds = [] } = useGetBedsByWardQuery(wardId, {
//     skip: !wardId,
//   });

//   const [assignBed, { isLoading }] = useAssignBedMutation();

//   const availableBeds = beds.filter((b) => !b.occupied);

//   const handleAssign = async () => {
//     await assignBed({ patientId, wardId, bedId });
//     alert("Bed assigned successfully");
//     onClose();
//   };

//   return (
//     <div className="modal">
//       <h5>Assign Bed</h5>

//       <select
//         className="form-select mb-2"
//         value={wardId}
//         onChange={(e) => setWardId(e.target.value)}
//       >
//         <option value="">Select Ward</option>
//         {wards.map((w) => (
//           <option key={w.id} value={w.id}>
//             {w.wardName}
//           </option>
//         ))}
//       </select>

//       <select
//         className="form-select mb-3"
//         value={bedId}
//         onChange={(e) => setBedId(e.target.value)}
//         disabled={!wardId}
//       >
//         <option value="">Select Bed</option>
//         {availableBeds.map((b) => (
//           <option key={b.id} value={b.id}>
//             Bed {b.bedNumber}
//           </option>
//         ))}
//       </select>

//       <button
//         className="btn btn-success me-2"
//         disabled={!bedId || isLoading}
//         onClick={handleAssign}
//       >
//         Assign
//       </button>

//       <button className="btn btn-secondary" onClick={onClose}>
//         Cancel
//       </button>
//     </div>
//   );
// }

// export default AssignBedModal;
import { useState } from "react";
import {
  useGetAllWardsQuery,
  useGetBedsByWardQuery,
  useAssignBedMutation,
} from "../../../../services/receptionistApi";

function AssignBedModal({ patientId, onClose }) {
  const [selectedWard, setSelectedWard] = useState("");
  const [selectedBed, setSelectedBed] = useState("");

  const { data: wards = [], isLoading: wardsLoading } =
    useGetAllWardsQuery();

  const { data: beds = [], isLoading: bedsLoading } =
    useGetBedsByWardQuery(selectedWard, {
      skip: !selectedWard,
    });

  const [assignBed, { isLoading }] = useAssignBedMutation();

  const handleAssign = async () => {
    if (!selectedWard || !selectedBed) {
      alert("Select ward and bed");
      return;
    }

    await assignBed({
      patientId,
      bedId: selectedBed,
    });

    alert("Bed assigned successfully");
    onClose();
  };

  return (
    <div>
      {/* Ward */}
      <div className="mb-3">
        <label className="form-label">Ward</label>
        <select
          className="form-select"
          value={selectedWard}
          onChange={(e) => setSelectedWard(e.target.value)}
        >
          <option value="">Select Ward</option>
          {wards.map((ward) => (
            <option key={ward.id} value={ward.id}>
              {ward.wardName}
            </option>
          ))}
        </select>
      </div>

      {/* Bed */}
      <div className="mb-3">
        <label className="form-label">Bed</label>
        <select
          className="form-select"
          value={selectedBed}
          onChange={(e) => setSelectedBed(e.target.value)}
          disabled={!selectedWard}
        >
          <option value="">Select Bed</option>
          {beds.map((bed) => (
            <option key={bed.id} value={bed.id}>
              {bed.bedNumber}
            </option>
          ))}
        </select>
      </div>

      <button
        className="btn btn-primary"
        onClick={handleAssign}
        disabled={isLoading}
      >
        Assign Bed
      </button>
    </div>
  );
}

export default AssignBedModal;
