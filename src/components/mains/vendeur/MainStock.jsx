import { Link } from "react-router-dom";
import DataTable from "./TableProduits";
const MainStock = () => {
  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Stock</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Stock</li>
            </ol>
          </nav>
        </div>
        <div class="col-12">
          <div class="card recent-sales overflow-auto">
            <div class="filter">
              <Link to="#" class="icon" data-bs-toggle="dropdown">
                <i class="bi bi-three-dots"></i>
              </Link>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>
                <li>
                  <Link to="/categorie" className="dropdown-item">
                    Catégorie
                  </Link>
                </li>
                <li>
                  <Link to="/entree" className="dropdown-item">
                    Entrées
                  </Link>
                </li>
              </ul>
            </div>

            <div class="card-body mt-3">
              <h5 class="card-title">
                Tous les Produits <span>| stock</span>
              </h5>
              <DataTable />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainStock;
