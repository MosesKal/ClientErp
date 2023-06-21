import React from "react";

const SideBarVendeur = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link" href="index.html">
            <i class="bi bi-grid-1x2-fill"></i>
            <span>Dashboard Vendeur</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link collapsed" href="users-profile.html">
            <i class="bi bi-envelope-open-fill"></i>
            <span>Cotation</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link collapsed" href="users-profile.html">
            <i class="bi bi-cart-check-fill"></i>
            <span>Commande</span>
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link collapsed" href="users-profile.html">
            <i class="bi bi-archive-fill"></i>
            <span>Stock</span>
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link collapsed" href="users-profile.html">
            <i class="bi bi-calendar-check-fill"></i>
            <span>Plan de production</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link collapsed" href="users-profile.html">
            <i class="bi bi-check-square-fill"></i>
            <span>Comptabilite</span>
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link collapsed" href="users-profile.html">
            <i class="bi bi-wallet-fill"></i>
            <span>Portefueil</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default SideBarVendeur;
