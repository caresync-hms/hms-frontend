import "./NoticeBoard.css";
import NoticeListItem from "./NoticeListItem";
import { noticeConfig } from "./NoticeConfig";
import { Icons } from "../../assets/Icons";

function NoticeBoard() {
  const noticeList = noticeConfig || [];

  const renderedNoticeList = noticeList.map((item, idx) => {
    return <NoticeListItem key={idx} item={item} />;
  });

  return (
    <div className="container mt-4 notice-board-container">
      <h2 className="notice-board-title d-flex align-items-center gap-2 mb-3">
        <span className="notice-menu-icon gap-4">{Icons.Menu}</span>
        Noticeboard
      </h2>

      <div className="notice-list-group list-group">
        {renderedNoticeList}
      </div>
    </div>
  );
}

export default NoticeBoard;