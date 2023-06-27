import { Link } from "react-router-dom";

const MainCommandeMining = () => {
  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Commandes</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">Commandes</li>
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
                <Link to="/Aujourdhui" className="dropdown-item">
                  Aujourd'hui
                </Link>
              </li>
              <li>
                <Link to="/Ce mois" className="dropdown-item">
                  Ce Mois
                </Link>
              </li>
              <li>
                <Link to="/Cette annéé" className="dropdown-item">
                  Cette Année
                </Link>
              </li>
            </ul>
          </div>

          <div class="card-body mt-3">
            <h5 class="card-title">
              Toutes les commandes <span>| Ce mois</span>
            </h5>

            <table class="table table-borderless datatable">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Date</th>
                  <th scope="col">Vendeur</th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">#2457</th>
                  <td>27-06-2023</td>
                  <td>Brandon Jacob</td>
                  <td>
                    <Link to="/Cette annéé" className="text-primary">
                      At praesentium minu
                    </Link>
                  </td>
                  <td>$64</td>
                  <td>
                    <span class="badge bg-success">Approved</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">#2147</th>
                  <td>22-06-2023</td>
                  <td>Bridie Kessler</td>
                  <td>
                    <Link to="" className="text-primary">
                      Boots
                    </Link>
                  </td>
                  <td>$47</td>
                  <td>
                    <span class="badge bg-warning">Pending</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">#2049</th>
                  <td>27-06-2023</td>
                  <td>Ashleigh Langosh</td>
                  <td>
                    <Link to="/" className="text-primary">
                      Chou
                    </Link>
                  </td>
                  <td>$147</td>
                  <td>
                    <span class="badge bg-success">Approved</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">#2644</th>
                  <td>17-06-2023</td>
                  <td>Kadea</td>
                  <td>
                    <Link to="" className="text-primary">
                      Logiciels de gestion de minage
                    </Link>
                  </td>
                  <td>$2000</td>
                  <td>
                    <span class="badge bg-danger">Rejected</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">#2644</th>
                  <td>22-06-2023</td>
                  <td>Aimé nzolo</td>
                  <td>
                    <Link to="/" className="text-primary">
                      Ordinateurs
                    </Link>
                  </td>
                  <td>$165</td>
                  <td>
                    <span class="badge bg-success">Approved</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <!-- End Page Title --> */}
    </main>
  );
};
export default MainCommandeMining;
