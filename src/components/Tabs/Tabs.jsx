import { useState } from "react";
import "./Tabs.css";
import { tabsConfig } from "./tabsConfig";
import TabsListItem from "./TabsListItem";
import TabsPanel from "./TabsPanel";

function Tabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const role = "admin"; // fallback for now later add by localstorage
  const tabsList = tabsConfig[role] || [];
  const renderedTabsList = tabsList.map((item, idx) => {
    return (
      <TabsListItem
        key={idx}
        item={item}
        index={idx}
        activeIndex={activeIndex}
        onClick={() => setActiveIndex(idx)}
      />
    );
  });
  return (
    <div className="tabs-container">
      <div className="nav nav-tabs tabs-list">{renderedTabsList}</div>
      <TabsPanel activeIndex={activeIndex} tabsList={tabsList} />
    </div>
  );
}

export default Tabs;
