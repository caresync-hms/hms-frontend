import React from "react";
import DashboardMenuGrid from "./../components/DashboardMenuGrid/DashboardMenuGrid";
import NoticeBoard from "./../components/NoticeBoard/NoticeBoard";

function Dashboard() {
  return (
    <div>
      <DashboardMenuGrid />
      <NoticeBoard />
    </div>
  );
}

export default Dashboard;
