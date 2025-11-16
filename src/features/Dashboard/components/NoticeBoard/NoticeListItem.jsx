import { Icons } from "../../../../assets/Icons";
import "./NoticeListItem.css";

function NoticeListItem({ item }) {
  return (
    <div className="notice-list-item d-flex justify-content-between align-items-center p-3 border rounded mb-2 bg-light">
      <div className="d-flex align-items-center gap-3">
        <div className="notice-icon fs-5 text-primary">{Icons.Notice}</div>

        <div>
          <div className="fw-semibold fs-10">{item.title}</div>
          <div className="text-muted small">{item.notice}</div>
        </div>
      </div>

      <div className="text-secondary small fw-semibold">{item.date}</div>
    </div>
  );
}
export default NoticeListItem;
