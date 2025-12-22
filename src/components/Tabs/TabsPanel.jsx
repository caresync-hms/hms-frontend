function TabsPanel({ activeIndex, tabsList }) {
  if (!tabsList || tabsList.length === 0) return null;

  const ActiveComponent = tabsList[activeIndex].component;
  return (
    <div className="p-4">
      <ActiveComponent />
    </div>
  );
}

export default TabsPanel;
