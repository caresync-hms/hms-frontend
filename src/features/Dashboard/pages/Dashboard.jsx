import DashboardMenuGrid from "./../components/DashboardMenuGrid/DashboardMenuGrid";
import NoticeBoard from "./../components/NoticeBoard/NoticeBoard";
import Calendar from "./../components/Calendar/Calendar";

function Dashboard() {
  return (
    <div>
      <DashboardMenuGrid />
      <div className="container">
        <h2 className="h5 mt-5 px-4">Calendar Schedule</h2>

        <div className="row g-1">
          <div className="col-12 col-lg-7">
            <Calendar />
          </div>
          <div className="col-12 col-lg-5">
            <NoticeBoard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
