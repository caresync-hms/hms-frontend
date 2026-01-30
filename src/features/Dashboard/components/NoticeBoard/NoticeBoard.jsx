import { Icons } from "@/assets/icons";
import "./NoticeBoard.css";
import NoticeListItem from "./NoticeListItem";
import { useGetAllNoticesQuery } from "../../../../services/noticesApi";

function NoticeBoard() {
  const {
    data: notices = [],
    isLoading,
    isError,
    error,
  } = useGetAllNoticesQuery();

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
    <div className="container mt-4 notice-board-container">
      <h3 className="notice-board-title d-flex align-items-center gap-2 mb-2">
        <span>{Icons.Menu}</span>
        Noticeboard
      </h3>

      <div className="notice-list-group list-group">
        {notices.map((item) => (
          <NoticeListItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default NoticeBoard;
