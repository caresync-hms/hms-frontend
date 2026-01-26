import { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";
import {
  useGetAllDepartmentsQuery,
  useDeleteDepartmentMutation,
} from "../../../../services/departmentsApi";
import EditDepartment from "./EditDepartment";
import Modal from "../../../../components/Modal/Modal";

function DepartmentsList() {
  const [search, setSearch] = useState("");
  const [selectedDept, setSelectedDept] = useState(null);

  const {
    data: departments = [],
    isLoading,
    isError,
    error,
  } = useGetAllDepartmentsQuery();

  const [deleteDepartment, { isLoading: isDeleting }] =
    useDeleteDepartmentMutation();

  const columns = [
    { key: "departmentName", label: "Department Name" },
    { key: "description", label: "Description" },
  ];

  const filtered = departments.filter((d) =>
    d.departmentName.toLowerCase().includes(search.toLowerCase()),
  );

  const handleDelete = async (department) => {
    if (!window.confirm(`Delete ${department.departmentName}?`)) return;

    await deleteDepartment(department.id).unwrap();
  };

  if (isLoading) return <div className="container mt-4">Loading...</div>;

  if (isError)
    return (
      <div className="container mt-4 text-danger">
        {error?.data?.message || "Error"}
      </div>
    );

  return (
    <div className="container mt-4">
      <SearchBar value={search} onChange={setSearch} />

      <Table
        columns={columns}
        data={filtered}
        actions={{
          edit: (row) => setSelectedDept(row),
          delete: handleDelete,
        }}
        disabledActions={isDeleting}
      />

      {/* -------- EDIT MODAL -------- */}
      {selectedDept && (
        <Modal title="Edit Department" onClose={() => setSelectedDept(null)}>
          <EditDepartment
            department={selectedDept}
            onClose={() => setSelectedDept(null)}
          />
        </Modal>
      )}
    </div>
  );
}

export default DepartmentsList;
