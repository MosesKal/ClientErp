import React from "react";

const SideBarVendeur = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link" href="index.html">
            <i className="bi bi-grid-1x2-fill"></i>
            <span>Dashboard Vendeur</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="users-profile.html">
            <i className="bi bi-envelope-open-fill"></i>
            <span>Cotation</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="users-profile.html">
            <i className="bi bi-cart-check-fill"></i>
            <span>Commande</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="users-profile.html">
            <i className="bi bi-archive-fill"></i>
            <span>Stock</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="users-profile.html">
            <i className="bi bi-calendar-check-fill"></i>
            <span>Plan de production</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="users-profile.html">
            <i className="bi bi-check-square-fill"></i>
            <span>Comptabilite</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="users-profile.html">
            <i className="bi bi-wallet-fill"></i>
            <span>Portefueil</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default SideBarVendeur;
