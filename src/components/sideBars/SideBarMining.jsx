import React from "react";

const SideBarMining = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link" href="index.html">
            <i class="bi bi-grid-1x2-fill"></i>
            <span>Dashboard Mining</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link collapsed" href="users-profile.html">
            <i class="bi bi-megaphone-fill"></i>
            <span>Cotation</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link collapsed" href="users-profile.html">
            <i class="bi bi-briefcase-fill"></i>
            <span>Offres</span>
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link collapsed" href="users-profile.html">
            <i class="bi bi-archive-fill"></i>
            <span>Commandes</span>
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link collapsed" href="users-profile.html">
            <i class="bi bi-bar-chart-line-fill"></i>
            <span>Rapport</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default SideBarMining;
