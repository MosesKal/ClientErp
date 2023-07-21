import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import axios from "../../api/axios";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Select from "react-select";

const MainStock = () => {
  const [stocks, setStocks] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get(`/getAllStocksByUser/${auth.id}`);
        setStocks(response?.data);
      } catch (error) {
        console.log(
          "Une erreur s'est produite lors de la récupération des produits"
        );
      }
    };
    fetchStocks();
  }, []);

  console.log(stocks);

  // Vérifiez si le tableau stocks est vide
  const isStocksEmpty = stocks.length === 0;

  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Stock</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/CotationVendeur">Home</Link>
              </li>
              <li className="breadcrumb-item active">
                <Link to="/detailCotation">Stock</Link>
              </li>
            </ol>
          </nav>
        </div>
        {isStocksEmpty ? (
          <div className="card-body" style={{ padding: "140px" }}>
            <div className="col-12 d-flex align-items-center justify-content-center mb-4">
              <div className="card info-card mb-2" style={{ width: "500px" }}>
                <div className="d-flex align-items-center justify-content-center text-center">
                  <img
                    src={process.env.PUBLIC_URL + "/appointment.gif"}
                    alt="Shopping Cart"
                    style={{ width: "200px" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 comand d-flex flex-column align-items-center justify-content-center mb-4">
              <h3>Le stock est vide</h3>
              <span className="text-secondary">Créer et gérer votre stock</span>
            </div>
            <div className="col-12 comand d-flex align-items-center justify-content-center">
              <div className="row">
                <div className="col-6">
                  <Link
                    to=""
                    className="btn btn-primary"
                    style={{ width: 250 }}
                  >
                    <i className="bi bi-plus pe-2"></i>NOUVEAU STOCK
                  </Link>
                </div>
                <div className="col-6">
                  <Link
                    to="/CatalogueProduit"
                    className="btn btn-secondary"
                    style={{ width: 250 }}
                  >
                    <i className="bi bi-grid pe-2"></i>PRODUITS
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 comand d-flex align-items-center justify-content-center mt-3">
              <p className="text-primary ">
                <Link>Importer le stock</Link>
              </p>
            </div>
          </div>
        ) : (
          // Placez ici le contenu à afficher lorsque stocks existe
          <div className="col-12 ">
            <div className="row my-3 justify-content-end">
              <div className="col-2 d-grid gap-2">
                <button className="btn btn-primary {isPopupOpen ? overlay}">
                  <i className="bi bi-plus pe-2"></i>NOUVELLE ENTREE
                </button>
              </div>
              <div className="col-2 d-grid gap-2">
                <Link to="/CatalogueProduit">
                  <button className="btn btn-secondary">
                    <i className="bi bi-list pe-2"></i>VOIR PRODUITS
                  </button>
                </Link>
              </div>
            </div>
            <div className="card-body">
              <div className=" recent-sales overflow-auto">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-body pt-3">
                      <ul className="nav nav-tabs nav-tabs-bordered">
                        <li className="nav-item">
                          <button
                            className="nav-link active"
                            data-bs-toggle="tab"
                            data-bs-target="#profile-overview"
                          >
                            Produits en stock
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            className="nav-link"
                            data-bs-toggle="tab"
                            data-bs-target="#profile-edit"
                          >
                            Liste Categories
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            className="nav-link"
                            data-bs-toggle="tab"
                            data-bs-target="#profile-settings"
                          >
                            Statistiques Produits et categories
                          </button>
                        </li>
                      </ul>
                      <div className="tab-content pt-2">
                        <div
                          className="tab-pane fade show active profile-overview"
                          id="profile-overview"
                        >
                          <div className="card-body mt-3 ">
                            <table className="table table-borderless datatable table-hover">
                              <thead>
                                <tr>
                                  <th scope="col">
                                    Information sur le produit
                                  </th>
                                  <th scope="col">Description du produit</th>
                                  <th scope="col">Quantité</th>
                                  <th scope="col">Prix</th>
                                  <th scope="col">Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                {stocks.map((stock) => (
                                  <tr key={stock.id}>
                                    <td>
                                      <div className="row">
                                        <div className="col-3">
                                          <Link>
                                            <Avatar
                                              alt={stock.Produit.nom}
                                              src={stock.Produit.photo}
                                              sx={{ width: 60, height: 60 }}
                                            />
                                          </Link>
                                        </div>
                                        <div className="col-9 align-self-center ">
                                          {stock.Produit.nom}
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="row">
                                        <div className="col align-self-center mt-3">
                                          {stock.stockDetail}
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="row">
                                        <div className="col align-self-center mt-3">
                                          {`${stock.stock}`}
                                          <span className="fw-semibold">
                                            {" "}
                                            {`${stock.unite}`}
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="row">
                                        <div className="col align-self-center mt-3">
                                          {`${stock.prix}`}
                                          <span className="fw-semibold">
                                            {" "}
                                            FC
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                    <div className="row">
                                      <div className="col align-self-center mt-2">
                                        <Link to="">
                                          <IconButton color="primary" aria-label="edit">
                                            <BorderColorIcon />
                                          </IconButton>
                                        </Link>
                                      </div>
                                    </div>
                                  </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade  profile-overview"
                          id="profile-edit"
                        >
                          <div className="card-body mt-3 ">
                            <table className="table table-borderless datatable cotation table-hover">
                              <thead>
                                <tr>
                                  <th scope="col">
                                    illustration de la categorie du produit
                                  </th>
                                  <th scope="col">Information Categorie</th>
                                  <th scope="col">Actions</th>
                                </tr>
                              </thead>
                              <tbody></tbody>
                            </table>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade pt-3"
                          id="profile-settings"
                        ></div>
                        <div
                          className="tab-pane fade pt-3"
                          id="profile-change-password"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default MainStock;
