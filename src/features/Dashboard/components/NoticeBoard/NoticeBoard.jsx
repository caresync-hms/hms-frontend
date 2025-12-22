import { Icons } from "../../../../assets/icons";
import "./NoticeBoard.css";
import NoticeListItem from "./NoticeListItem";
import { noticeConfig } from "./noticeConfig";

function NoticeBoard() {
  const noticeList = noticeConfig || [];

  const renderedNoticeList = noticeList.map((item, idx) => {
    return <NoticeListItem key={idx} item={item} />;
  });

  return (
    <div className="container mt-4 notice-board-container">
      <h3 className="notice-board-title d-flex align-items-center gap-2 mb-2">
        <span className="gap-4">{Icons.Menu}</span>
        Noticeboard
      </h3>

      <div className="notice-list-group list-group">{renderedNoticeList}</div>
    </div>
  );
}

export default NoticeBoard;
