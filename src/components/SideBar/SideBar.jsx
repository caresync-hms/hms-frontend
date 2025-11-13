import { Icons } from "../../assets/Icons";
import "./SideBar.css";
import SideBarListItem from "./SideBarListItem";

function SideBar() {
  const sideBarList = [
    { title: "DashBoard", icon: Icons.Dashboard },
    { title: "Department", icon: Icons.Hospital },
    { title: "Doctor", icon: Icons.Doctor },
    { title: "Patient", icon: Icons.Patient },
    { title: "Nurse", icon: Icons.Nurse },
    { title: "Accountant", icon: Icons.Accountant },
  ];
  const renderedSideBarList = sideBarList.map((item, idx) => {
    return <SideBarListItem key={idx} item={item} />;
  });
  return (
    <div className="container sidebar-container list-group">
      {renderedSideBarList}
    </div>
  );
}

export default SideBar;
