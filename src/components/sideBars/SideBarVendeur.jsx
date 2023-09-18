import { NavLink } from "react-router-dom";

const SideBarVendeur = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link" : "nav-link collapsed"
            }
            activeClassName="active"
            to="/seller"
          >
            <i className="bi bi-grid-1x2-fill"></i>
            <span>Dashboard Vendeur</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link" : "nav-link collapsed"
            }
            activeClassName="active"
            to="/cotationVendeur"
          >
            <i className="bi bi-envelope-open-fill"></i>
            <span>Cotation</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link" : "nav-link collapsed"
            }
            activeClassName="active"
            to="/commandeVendeur"
          >
            <i className="bi bi-cart-check-fill"></i>
            <span>Commande</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link" : "nav-link collapsed"
            }
            activeClassName="active"
            to="/stockVendeur"
          >
            <i className="bi bi-archive-fill"></i>
            <span>Stock</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link" : "nav-link collapsed"
            }
            activeClassName="active"
            to="/planDeProductionVendeur"
          >
            <i className="bi bi-calendar-check-fill"></i>
            <span>Plan de production</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link" : "nav-link collapsed"
            }
            activeClassName="active"
            to="/comptabiliteVendeur"
          >
            <i className="bi bi-check-square-fill"></i>
            <span>Comptabilite</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link" : "nav-link collapsed"
            }
            activeClassName="active"
            to="/Clients"
          >
            <i className="bi bi-wallet-fill"></i>
            <span>Clients</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link" : "nav-link collapsed"
            }
            activeClassName="active"
            to="/portefeuilVendeur"
          >
            <i className="bi bi-wallet-fill"></i>
            <span>Portefeuil</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideBarVendeur;
