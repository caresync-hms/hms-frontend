// import React, { useState } from "react";
// import SearchBar from "../../../../components/SearchBar/SearchBar";
// import Table from "../../../../components/Table/Table";
// import EditBedModal from "./EditBedModal";

// import {
//   useGetAllWardsQuery,
//   useGetBedsByWardQuery,
// } from "../../../../services/receptionistApi";

// function BedsList() {
//   const [editBed, setEditBed] = useState(null);

//   const [search, setSearch] = useState("");
//   const [wardId, setWardId] = useState("");

//   const { data: wards = [] } = useGetAllWardsQuery();
//   const { data: beds = [] } = useGetBedsByWardQuery(wardId, {
//     skip: !wardId,
//   });


//   const columns = [
//     { key: "bedNumber", label: "Bed Number" },
//     {  key: "status",
//     label: "Status",
//     render: (row) => row.status},
//     {
//       key: "patientName",
//       label: "Patient",
//       render: (row) => row.patient?.name || "—",
//     },
//     {
//     key: "actions",
//     label: "Actions",
//     render: (row) => (
//       <>
//         <button
//           className="btn btn-sm btn-primary me-2"
//           onClick={() => setEditBed(row)}
//         >
//           Edit
//         </button>

//         {row.status === "OCCUPIED" && (
//           <button
//             className="btn btn-sm btn-warning"
//             onClick={() => emptyBed(row.id)}
//           >
//             Empty
//           </button>
//         )}
//       </>
//     ),
//   },
//   ];

//   const filtered = beds.filter((b) =>
//     b.bedNumber.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div>
//       <SearchBar value={search} onChange={setSearch} />

//       <select
//         className="form-select my-2"
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

//       <Table columns={columns} data={filtered} />
//     </div>
//   );
// }

// export default BedsList;


// import React, { useState } from "react";
// import SearchBar from "../../../../components/SearchBar/SearchBar";
// import Table from "../../../../components/Table/Table";
// import EditBedModal from "./EditBedModal";

// import {
//   useGetAllWardsQuery,
//   useGetBedsByWardQuery,
//   useUpdateBedMutation,
//   useEmptyBedMutation,
// } from "../../../../services/receptionistApi";

// function BedsList() {
//   const [editBed, setEditBed] = useState(null);
//   const [search, setSearch] = useState("");
//   const [wardId, setWardId] = useState("");

//   const { data: wards = [] } = useGetAllWardsQuery();
//   const { data: beds = [] } = useGetBedsByWardQuery(wardId, {
//     skip: !wardId,
//   });

//   const [updateBed] = useUpdateBedMutation();
//   const [emptyBed] = useEmptyBedMutation();

//   const columns = [
//     { key: "bedNumber", label: "Bed Number" },

//     {
//       key: "status",
//       label: "Status",
//       render: (row) => (
//         <span
//           className={`badge ${
//             row.status === "AVAILABLE"
//               ? "bg-success"
//               : row.status === "OCCUPIED"
//               ? "bg-danger"
//               : "bg-warning"
//           }`}
//         >
//           {row.status}
//         </span>
//       ),
//     },

//     {
//       key: "patientName",
//       label: "Patient",
//       render: (row) => row.patientName || "—",
//     },

//     {
//       key: "actions",
//       label: "Actions",
//       render: (row) => (
//         <>
//           <button
//             className="btn btn-sm btn-primary me-2"
//             onClick={() => setEditBed(row)}
//           >
//             Edit
//           </button>

//           {row.status === "OCCUPIED" && (
//             <button
//               className="btn btn-sm btn-warning"
//               onClick={() => emptyBed(row.id)}
//             >
//               Empty
//             </button>
//           )}
//         </>
//       ),
//     },
//   ];

//   const filteredBeds = beds.filter((b) =>
//     b.bedNumber.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="container mt-3">
//       <SearchBar value={search} onChange={setSearch} />

//       <select
//         className="form-select my-2"
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

//       <Table columns={columns} data={filteredBeds} />

//       {/* -------- EDIT BED MODAL -------- */}
//       {editBed && (
//         <EditBedModal
//           bed={editBed}
//           onClose={() => setEditBed(null)}
//           onSave={async (updated) => {
//             await updateBed({
//               bedId: editBed.id,
//               ...updated,
//             });
//             setEditBed(null);
//           }}
//         />
//       )}
//     </div>
//   );
// }

// export default BedsList;


import React, { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";
import Modal from "../../../../components/Modal/Modal";
import EditBedModal from "./EditBedModal";

import {
  useGetAllWardsQuery,
  useGetBedsByWardQuery,
  useUpdateBedMutation,
  useEmptyBedMutation,
} from "../../../../services/receptionistApi";

function BedsList() {
  const [search, setSearch] = useState("");
  const [wardId, setWardId] = useState("");
  const [editBed, setEditBed] = useState(null);

  const { data: wards = [] } = useGetAllWardsQuery();
  const { data: beds = [] } = useGetBedsByWardQuery(wardId, {
    skip: !wardId,
  });

  const [updateBed] = useUpdateBedMutation();
  const [emptyBed] = useEmptyBedMutation();

  const columns = [
    { key: "bedNumber", label: "Bed Number" },
    {
      key: "status",
      label: "Status",
      render: (row) => row.status || "AVAILABLE",
    },
    {
      key: "patientName",
      label: "Patient",
      render: (row) => row.patientName || "—",
    },
  ];

  const filteredBeds = beds.filter((b) =>
    b.bedNumber.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-3">
      <SearchBar value={search} onChange={setSearch} />

      <select
        className="form-select my-2"
        value={wardId}
        onChange={(e) => setWardId(e.target.value)}
      >
        <option value="">Select Ward</option>
        {wards.map((w) => (
          <option key={w.id} value={w.id}>
            {w.wardName}
          </option>
        ))}
      </select>

      <Table
        columns={columns}
        data={filteredBeds}
        actions={{
          edit: (row) => setEditBed(row),

          delete: (row) => {
            if (!window.confirm("Empty this bed?")) return;
            emptyBed(row.id);
          },
        }}
      />

      {/* ---------- EDIT BED MODAL ---------- */}
      {editBed && (
        <Modal title="Edit Bed" onClose={() => setEditBed(null)}>
          <EditBedModal
            bed={editBed}
            onClose={() => setEditBed(null)}
            onSave={(updated) => {
              updateBed({
                bedId: editBed.id,
                ...updated,
              });
              setEditBed(null);
            }}
          />
        </Modal>
      )}
    </div>
  );
}

export default BedsList;
