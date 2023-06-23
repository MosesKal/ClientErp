import { NavLink } from "react-router-dom";

const SideBarMining = () => {
  console.log("Sidebar");

  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link" : "nav-link collapsed"
            }
            activeClassName="active"
            to="/mining"
          >
            <i className="bi bi-grid-1x2-fill"></i>
            <span>Dashboard Mining</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link" : "nav-link collapsed"
            }
            activeClassName="active"
            to="/cotationMining"
          >
            <i className="bi bi-megaphone-fill"></i>
            <span>Cotations</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link" : "nav-link collapsed"
            }
            activeClassName="active"
            to="/offresMining"
          >
            <i className="bi bi-briefcase-fill"></i>
            <span>Offres</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link" : "nav-link collapsed"
            }
            activeClassName="active"
            to="/commandeMining"
          >
            <i className="bi bi-archive-fill"></i>
            <span>Commandes</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link" : "nav-link collapsed"
            }
            activeClassName="active"
            to="/rapportMining"
          >
            <i className="bi bi-bar-chart-line-fill"></i>
            <span>Rapports</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideBarMining;
