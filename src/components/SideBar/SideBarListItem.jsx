import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SideBarListItem.css";
import { Icons } from "@/assets/Icons";

/* ---------- helper ---------- */
const normalize = (path) => (path.startsWith("/") ? path : `/${path}`);

function SideBarListItem({ item }) {
  const navigate = useNavigate();
  const location = useLocation();

  const hasChildren = item.children && item.children.length > 0;

  const itemPath = item.navigateTo ? normalize(item.navigateTo) : null;

  /* Parent active ONLY if its own path matches */
  const isParentActive = itemPath && location.pathname === itemPath;

  /* Child active detection */
  const isChildActive =
    hasChildren &&
    item.children.some((child) =>
      location.pathname.startsWith(normalize(child.navigateTo)),
    );

  /* Expand parent when child is active */
  const [open, setOpen] = useState(isChildActive);

  useEffect(() => {
    if (isChildActive) setOpen(true);
  }, [isChildActive]);

  const handleClick = () => {
    if (hasChildren) {
      setOpen((prev) => !prev);
    } else if (item.navigateTo) {
      navigate(normalize(item.navigateTo));
    }
  };

  return (
    <div>
      {/* Parent */}
      <div
        className={`sidebar-list-item ${isParentActive ? "active" : ""}`}
        onClick={handleClick}
      >
        <div>{item.icon}</div>
        <div>{item.title}</div>
        {hasChildren && <div>{open ? Icons.ArrowDown : Icons.ArrowRight}</div>}
      </div>

      {/* Children */}
      {hasChildren && open && (
        <div className="sidebar-nested">
          {item.children.map((child, idx) => {
            const childPath = normalize(child.navigateTo);
            const childActive = location.pathname.startsWith(childPath);

            return (
              <div
                key={idx}
                className={`sidebar-list-item nested ${
                  childActive ? "active" : ""
                }`}
                onClick={() => navigate(childPath)}
              >
                <div>{child.icon}</div>
                <div>{child.title}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SideBarListItem;
