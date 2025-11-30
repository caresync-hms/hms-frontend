import Tabs from "./../../../components/Tabs/Tabs";
function DoctorsPage() {
  const tabsList = [
    {
      title: "View Patients",
      icon: Icons.Patient,
      component: DashboardMenuGrid,
    },
    {
      title: "Add Appointments",
      icon: Icons.Calendar,
      component: DashboardMenuGrid,
    },
  ];

  return (
    <div>
      <Tabs tabsList={tabsList} />
    </div>
  );
}

export default DoctorsPage;
