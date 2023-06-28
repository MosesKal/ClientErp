import { Link } from "react-router-dom";
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

              <table class="table table-borderless datatable">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Produit</th>
                    <th scope="col">Catégorie</th>
                    <th scope="col">Stock Actuel</th>
                    <th scope="col">Dernière Entrée</th>
                    <th scope="col">Dernière Sortie</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">#1</th>
                    <td>Produit 1</td>
                    <td>Catégorie A</td>
                    <td>10</td>
                    <td>2023-06-25</td>
                    <td>2023-06-24</td>
                  </tr>
                  <tr>
                    <th scope="row">#2</th>
                    <td>Produit 2</td>
                    <td>Catégorie B</td>
                    <td>5</td>
                    <td>2023-06-26</td>
                    <td>2023-06-23</td>
                  </tr>
                  <tr>
                    <th scope="row">#3</th>
                    <td>Produit 3</td>
                    <td>Catégorie A</td>
                    <td>2</td>
                    <td>2023-06-25</td>
                    <td>Aucune sortie</td>
                  </tr>
                  <tr>
                    <th scope="row">#4</th>
                    <td>Produit 4</td>
                    <td>Catégorie C</td>
                    <td>8</td>
                    <td>Aucune entrée</td>
                    <td>2023-06-22</td>
                  </tr>
                  <tr>
                    <th scope="row">#5</th>
                    <td>Produit 5</td>
                    <td>Catégorie d</td>
                    <td>8</td>
                    <td>Aucune entrée</td>
                    <td>2023-06-23</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* <!-- End Page Title --> */}
      </main>
    </div>
  );
};

export default MainStock;
