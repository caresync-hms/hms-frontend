import { useState } from "react";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Table from "../../../../components/Table/Table";
import {
  useGetAllNoticesQuery,
  useDeleteNoticeMutation,
} from "../../../../services/noticesApi";
import Modal from "../../../../components/Modal/Modal";
import EditNotice from "./EditNotice";

function NoticeBoardList() {
  const [search, setSearch] = useState("");
  const [selectedNotice, setSelectedNotice] = useState(null);

  const {
    data: notices = [],
    isLoading,
    isError,
    error,
  } = useGetAllNoticesQuery();

  const [deleteNotice, { isLoading: isDeleting }] = useDeleteNoticeMutation();

  const columns = [
    { key: "title", label: "Title" },
    { key: "notice", label: "Notice" },
    { key: "date", label: "Date" },
  ];

  const filteredNotices = notices.filter((notice) =>
    notice.title.toLowerCase().includes(search.toLowerCase()),
  );

  const handleDelete = async (notice) => {
    if (!window.confirm(`Delete notice "${notice.title}"?`)) return;

    try {
      await deleteNotice(notice.id).unwrap();
      alert("Notice deleted successfully");
    } catch (err) {
      alert(err?.data?.message || "Failed to delete notice");
    }
  };

  if (isLoading) {
    return <div className="container mt-4">Loading notices...</div>;
  }

  if (isError) {
    return (
      <div className="container mt-4 text-danger">
        {error?.data?.message || "Failed to load notices"}
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <SearchBar value={search} onChange={setSearch} />

      <Table
        columns={columns}
        data={filteredNotices}
        actions={{
          edit: (row) => setSelectedNotice(row),
          delete: handleDelete,
        }}
        disabledActions={isDeleting}
      />

      {/* -------- EDIT MODAL -------- */}
      {selectedNotice && (
        <Modal title="Edit Notice" onClose={() => setSelectedNotice(null)}>
          <EditNotice
            notice={selectedNotice}
            onClose={() => setSelectedNotice(null)}
          />
        </Modal>
      )}
    </div>
  );
}

export default NoticeBoardList;
