import React from "react";
import ReportsChart from "../../Report-charts";
import { Link } from "react-router-dom";
import TrafficChart from "../../TraficChart";
import BudgetChart from "../../BudgetChart";

const MainSeller = () => {
  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Dashboard</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
      </div>
      <section class="section dashboard">
        <div className="row">
          {/* Left side columns */}
          <div class="col-lg-8">
            <div className="row">
              {/* Sales Card */}
              <div className="col-xxl-4 col-md-6">
                <div className="card info-card sales-card">
                  <div className="filter">
                    <div className="icon" data-bs-toggle="dropdown">
                      <i className="bi bi-three-dots"></i>
                    </div>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filtrer</h6>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item " disabled>
                          Aujourd'hui
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item " disabled>
                          Ce Mois
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item " disabled>
                          Cette Année
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">
                      Ventes <span>| Aujourdui</span>
                    </h5>

                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-cart"></i>
                      </div>
                      <div className="ps-3">
                        <h6>145</h6>
                        <span className="text-success small pt-1 fw-bold">
                          12%
                        </span>
                        <span className="text-muted small pt-2 ps-1">
                          Croissance
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Sales Card */}
              {/* Revenue Card */}

              <div className="col-xxl-4 col-md-6">
                <div className="card info-card revenue-card">
                  <div className="filter">
                    <Link to="#" className="icon" data-bs-toggle="dropdown">
                      <i className="bi bi-three-dots"></i>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filtrer</h6>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item" type="button">
                          Aujourd'hui
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item" type="button">
                          Ce mois
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item" type="button">
                          Cette Année
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">
                      Revenue <span>| Ce Mois</span>
                    </h5>

                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-currency-dollar"></i>
                      </div>
                      <div className="ps-3">
                        <h6>$3,264</h6>
                        <span className="text-success small pt-1 fw-bold">
                          8%
                        </span>
                        <span className="text-muted small pt-2 ps-1">
                          Croissance
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* End Revenue Card

            Customers Card  */}

              <div className="col-xxl-4 col-xl-12">
                <div className="card info-card customers-card">
                  <div className="filter">
                    <Link to="#" className="icon" data-bs-toggle="dropdown">
                      <i className="bi bi-three-dots"></i>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filtrer</h6>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item" type="button">
                          Aujourd'hui
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item" type="button">
                          Ce Mois
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item" type="button">
                          Cette Année
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">
                      Clients <span>| Cette Année</span>
                    </h5>

                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-people"></i>
                      </div>
                      <div className="ps-3">
                        <h6>1244</h6>
                        <span className="text-danger small pt-1 fw-bold">
                          12%
                        </span>
                        <span className="text-muted small pt-2 ps-1">
                          Decroissance
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* End Customers Card

            Reports */}
              <ReportsChart />

              {/* End Reports
            Recent Sales */}

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

                  <div class="card-body">
                    <h5 class="card-title">
                      Commandes Recentes <span>| Aujourd'hui</span>
                    </h5>

                    <table class="table table-borderless datatable">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Entreprises</th>
                          <th scope="col">Product</th>
                          <th scope="col">Price</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">#2457</th>
                          <td>MuMI</td>
                          <td>
                            <Link to="/Cette annéé" className="text-primary">
                              Groupe electrogèe
                            </Link>
                          </td>
                          <td>$64</td>
                          <td>
                            <span class="badge bg-success">approuvé</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#2147</th>
                          <td>KCC</td>
                          <td>
                            <Link to="" className="text-primary">
                              Boots
                            </Link>
                          </td>
                          <td>$47</td>
                          <td>
                            <span class="badge bg-warning">en attente</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#2049</th>
                          <td>TENKE FUNGURUME</td>
                          <td>
                            <Link to="/" className="text-primary">
                              Chou
                            </Link>
                          </td>
                          <td>$147</td>
                          <td>
                            <span class="badge bg-success">Approuvée</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#2644</th>
                          <td>Kadea</td>
                          <td>
                            <Link to="" className="text-primary">
                              Logiciels de gestion de minage
                            </Link>
                          </td>
                          <td>$2000</td>
                          <td>
                            <span class="badge bg-danger">Rejetée</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#2644</th>
                          <td>KAMOA</td>
                          <td>
                            <Link to="/" className="text-primary">
                              Ordinateurs
                            </Link>
                          </td>
                          <td>$165</td>
                          <td>
                            <span class="badge bg-success">approuvé</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* End Recent Sales
           Top Selling  */}

              <div class="col-12">
                <div class="card top-selling overflow-auto">
                  <div class="filter">
                    <Link class="icon" to="#" data-bs-toggle="dropdown">
                      <i class="bi bi-three-dots"></i>
                    </Link>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li class="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="#">
                          Aujourd'hui
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="#">
                          Ce Mois
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="#">
                          Cette Année
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div class="card-body pb-0">
                    <h5 class="card-title">
                      Les produits les plus Commandés <span>| Aujourd'hui</span>
                    </h5>

                    <table class="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">Image</th>
                          <th scope="col">Produit</th>
                          <th scope="col">Prix</th>
                          <th scope="col">Vendu</th>
                          <th scope="col">Revenue</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <Link to="#">
                              <img src="assets/img/product-1.jpg" alt="" />
                            </Link>
                          </th>
                          <td>
                            <Link to="#" class="text-primary fw-bold">
                              shoes
                            </Link>
                          </td>
                          <td>$64</td>
                          <td class="fw-bold">124</td>
                          <td>$5,828</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <Link to="#">
                              <img src="assets/img/product-2.jpg" alt="" />
                            </Link>
                          </th>
                          <td>
                            <Link to="#" class="text-primary fw-bold">
                              Exercitationem similique doloremque
                            </Link>
                          </td>
                          <td>$46</td>
                          <td class="fw-bold">98</td>
                          <td>$4,508</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <Link to="#">
                              <img src="assets/img/product-3.jpg" alt="" />
                            </Link>
                          </th>
                          <td>
                            <Link to="#" class="text-primary fw-bold">
                              Alcool
                            </Link>
                          </td>
                          <td>$59</td>
                          <td class="fw-bold">74</td>
                          <td>$4,366</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <Link to="#">
                              <img src="assets/img/product-4.jpg" alt="" />
                            </Link>
                          </th>
                          <td>
                            <Link to="#" class="text-primary fw-bold">
                              Lunettes
                            </Link>
                          </td>
                          <td>$32</td>
                          <td class="fw-bold">63</td>
                          <td>$2,016</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <Link to="#">
                              <img src="assets/img/product-5.jpg" alt="" />
                            </Link>
                          </th>
                          <td>
                            <Link to="#" class="text-primary fw-bold">
                              Ecouteurs
                            </Link>
                          </td>
                          <td>$79</td>
                          <td class="fw-bold">41</td>
                          <td>$3,239</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* End Top Selling */}
            </div>
          </div>
          {/* End Left side columns 
        Right side columns */}

          <div class="col-lg-4">
            {/* Recent Activity */}
            <div className="card">
              <div class="filter">
                <Link class="icon" to="#" data-bs-toggle="dropdown">
                  <i class="bi bi-three-dots"></i>
                </Link>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li class="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Today
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      This Month
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      This Year
                    </Link>
                  </li>
                </ul>
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  Activités Recentes <span>| Aujourd'hui</span>
                </h5>
                <div className="activity">
                  <div class="activity-item d-flex">
                    <div class="activite-label">32 min</div>
                    <i class="bi bi-circle-fill activity-badge text-success align-self-start"></i>
                    <div class="activity-content">
                      <Link to="#" class="text-dark">
                        Votre Ofre a été Envoyée avec sussès
                      </Link>
                    </div>
                  </div>
                  {/* End activity item */}
                  <div class="activity-item d-flex">
                    <div class="activite-label">56 min</div>
                    <i class="bi bi-circle-fill activity-badge text-danger align-self-start"></i>
                    <div class="activity-content">
                      <Link to="#" class="text-dark">
                        Votre Offre a été Rejetée
                      </Link>
                    </div>
                  </div>
                  {/* End activity item */}

                  <div class="activity-item d-flex">
                    <div class="activite-label">2 hrs</div>
                    <i class="bi bi-circle-fill activity-badge text-primary align-self-start"></i>
                    <div class="activity-content">
                      <Link to="#" class="text-dark">
                        Vous avez ajouté un nouveau client
                      </Link>
                    </div>
                  </div>
                  {/* End activity item */}
                  <div class="activity-item d-flex">
                    <div class="activite-label">1 day</div>
                    <i class="bi bi-circle-fill activity-badge text-info align-self-start"></i>
                    <div class="activity-content">
                      <Link to="#" class="text-dark">
                        Vous avez une nouvelle demande de cotation
                      </Link>
                    </div>
                  </div>
                  {/* End activity item */}

                  <div class="activity-item d-flex">
                    <div class="activite-label">2 days</div>
                    <i class="bi bi-circle-fill activity-badge text-warning align-self-start"></i>
                    <div class="activity-content">
                      <Link to="#" class="text-dark">
                        Votre Offre a été selectionnée
                      </Link>
                    </div>
                  </div>
                  {/* End activity item */}

                  <div class="activity-item d-flex">
                    <div class="activite-label">4 weeks</div>
                    <i class="bi bi-circle-fill activity-badge text-muted align-self-start"></i>
                    <div class="activity-content">
                      <Link to="#" class="text-dark">
                        Un nouveau Produit a été ajouté
                      </Link>
                    </div>
                  </div>
                  {/* End activity item */}
                </div>
              </div>
            </div>

            {/* 
            End Website Traffic
            News & Updates Traffic */}

            <div className="card">
              <div className="filter">
                <Link className="icon" to="#" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots"></i>
                </Link>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Today
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      This Month
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      This Year
                    </Link>
                  </li>
                </ul>
              </div>
              <div class="card-body pb-0">
                <h5 class="card-title">
                  Rapport Budgetaire <span>| Ce Mois</span>
                </h5>
                <BudgetChart />
              </div>
            </div>
            {/* End Recent Activity 
          Budget Report */}

            <div class="card">
              <div class="filter">
                <Link to="#" class="icon" data-bs-toggle="dropdown">
                  <i class="bi bi-three-dots"></i>
                </Link>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li class="dropdown-header text-start">
                    <h6>Filtrer</h6>
                  </li>
                  <li>
                    <Link to="#" class="dropdown-item">
                      Aujourd'hui
                    </Link>
                  </li>
                  <li>
                    <Link to="#" class="dropdown-item">
                      Ce Mois
                    </Link>
                  </li>
                  <li>
                    <Link to="#" class="dropdown-item">
                      Cette Année
                    </Link>
                  </li>
                </ul>
              </div>
              <div class="card-body pb-0">
                <h5 class="card-title">
                  Traffic sur le Site <span>| Aujourd'hui</span>
                </h5>

                <TrafficChart />
              </div>
            </div>

            <div className="card">
              <div className="filter">
                <Link className="icon" to="#" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots"></i>
                </Link>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li className="dropdown-header text-start">
                    <h6>Filtre</h6>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Aujourd'hui
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Ce Mois
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Cette Année
                    </Link>
                  </li>
                </ul>
              </div>
              <div class="card-body pb-0">
                <h5 class="card-title">
                  Nouvelles &amp; Mises à jour <span>| Aujourd'hui</span>
                </h5>
                <div className="news">
                  <div className="post-item clearfix">
                    <img src="assets/img/news-1.jpg" alt="" />
                    <h4>
                      <Link to="#">
                        Kadea a produit plus des logiels pour les Miniers
                      </Link>
                    </h4>
                    <p>
                      Avec plus de 5 logiciels demandés par les miniers, kadea
                      en a conçu et livré en totalité, ce qui fait de lui, le
                      labo le plus productif de lubumbashi.
                    </p>
                  </div>

                  <div className="post-item clearfix">
                    <img src="assets/img/news-2.jpg" alt="" />
                    <h4>
                      <Link to="#">
                        Le fermier Abedy a livré plus de viande boeufs ce mois
                      </Link>
                    </h4>
                    <p>
                      Avec plus de 20 boeufs, abedy a satifait à toutes les
                      commandes des entreprises minières pendant cette periode
                      de festivité...
                    </p>
                  </div>

                  <div className="post-item clearfix">
                    <img src="assets/img/news-3.jpg" alt="" />
                    <h4>
                      <Link to="#">Fonctionnalité de chat</Link>
                    </h4>
                    <p>
                      Desormais, vous pouvez envoyez vos difficultés à
                      l'aidministrateur...
                    </p>
                  </div>

                  <div className="post-item clearfix">
                    <img src="assets/img/news-4.jpg" alt="" />
                    <h4>
                      <Link to="#">Recompenses </Link>
                    </h4>
                    <p>
                      KAMOA récompensera le 20 juillet 2023 les 3 meilleurs
                      vendeurs locaux qui ont généré le plus de revenus au cours
                      des deux dernières années. Cette récompense sera publiée
                      sur notre plateforme small-erp. Nous souhaitons
                      reconnaître et récompenser les efforts exceptionnels de
                      ces vendeurs qui ont contribué de manière significative à
                      la croissance de leur entreprise.
                    </p>
                  </div>
                </div>
                {/* End sidebar recent posts */}
              </div>
            </div>

            {/* End News & Updates */}
          </div>
          {/* End Right side columns */}
        </div>
      </section>
    </main>
  );
};

export default MainSeller;
