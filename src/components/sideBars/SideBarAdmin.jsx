import React from "react";

const SideBarAdmin = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link" href="index.html">
            <i class="bi bi-grid-1x2-fill"></i>
            <span>Dashboard Admin</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link collapsed" href="users-profile.html">
            <i class="bi bi-person-fill-gear"></i>
            <span>Comptes</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default SideBarAdmin;
