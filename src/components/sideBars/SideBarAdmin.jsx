import { NavLink } from "react-router-dom";

const SideBarAdmin = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin">
            <i className="bi bi-grid-1x2-fill"></i>
            <span>Dashboard Admin</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link collapsed" to="/admin/comptes">
            <i className="bi bi-person-fill-gear"></i>
            <span>Comptes</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link collapsed" to="/admin/entreprise">
            <i className="bi bi-bag-check-fill"></i>
            <span>Entreprise</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideBarAdmin;
