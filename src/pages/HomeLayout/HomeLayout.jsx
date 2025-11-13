import "./HomeLayout.css";
import SideBar from "./../../components/SideBar/SideBar";

const HomeLayout = () => {
  return (
    <div className="horizontal-layout">
      <div className="horizontal-left">
        <SideBar />
      </div>
      <div className="horizontal-right">{/* <RightComponent /> */}</div>
    </div>
  );
};

export default HomeLayout;
