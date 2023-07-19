import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const MainCatalogueProduit = () => {
  const [produits, setProduits] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/getProduitsCategories");
        setProduits(response?.data);
      } catch (error) {
        console.log(
          "Une erreur s'est produite lors de la recuperation des produits"
        );
      }
    };

    const fetchCategories = async ()=>{
      try {
        const response = await axios.get("/getAllCategories");
        setCategories(response?.data);
      }catch (error){
        console.log(
            "Une erreur s'est produite lors de la recuperation des produits"
        );
      }
    }
    fetchProducts();
    fetchCategories();
  }, []);

  console.log(produits);
  console.log(categories);

  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Cotalogue Produit</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/stockVendeur">Home</Link>
              </li>
              <li className="breadcrumb-item active">Catalogue Produit</li>
            </ol>
          </nav>
        </div>
        <div className="col-12 comand ">
          <div className="row my-3 justify-content-end">
            <div className="col-2 d-grid gap-2">
              <button className="btn btn-primary">
                <i className="bi bi-plus pe-2"></i>NOUVEAU PRODUIT
              </button>
            </div>
            <div className="col-2 d-grid gap-2">
              <button className="btn btn-secondary">
                <i className="bi bi-list pe-2"></i>NOUVELLE CATEGORIE
              </button>
            </div>
          </div>
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
                        Liste Produits
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
                        <table className="table table-borderless datatable cotation table-hover">
                          <thead>
                            <tr>
                              <th scope="col">Information sur le produit</th>
                              <th scope="col">Categorie</th>
                              <th scope="col">Date enregistrement</th>
                              <th scope="col">Status</th>
                              <th scope="col">Visibilité</th>
                              <th scope="col">Actions</th>
                            </tr>
                          </thead>
                          <tbody>{(produits) && produits.map((produit)=>(
                              <tr key={produit.id}>
                                <td>
                                  <div className="row">
                                    <div className="col">
                                      <Link>
                                        <Avatar
                                            alt={produit.nom}
                                            src={produit.photo}
                                            sx={{ width: 60, height: 60 }}
                                        />
                                      </Link>
                                    </div>
                                    <div className="col align-self-center ">
                                      {produit.nom}
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="row">
                                    <div className="col align-self-center  fs-3 mt-2">
                                      <Chip
                                          avatar={<Avatar alt={produit.categorie_produit.nom_categorie} src={produit.categorie_produit.illustration_categorie} />}
                                          label={produit.categorie_produit.nom_categorie}

                                      />
                                    </div>
                                  </div>
                                </td>

                                <td>
                                  <div className="row">
                                    <div className="col align-self-center mt-3">
                                      {produit.date}
                                    </div>
                                  </div>

                                </td>
                                <td>
                                  <div className="row">
                                    <div className="col align-self-center mt-3">
                                      <span className="badge bg-success"><i className="bi bi-check-circle me-1"></i>Disponible</span>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="row">
                                    <div className="col align-self-center mt-3">
                                      <span className="badge bg-light text-dark"><i className="bi bi-eye me-1"></i> Public</span>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="row">
                                    <div className="col align-self-center mt-2">
                                      <Link to="">
                                        <IconButton color="error" aria-label="delete">
                                          <DeleteIcon />
                                        </IconButton>
                                      </Link>
                                      <Link to="">
                                        <IconButton color="primary" aria-label="edit">
                                          <BorderColorIcon />
                                        </IconButton>
                                      </Link>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                          ))}</tbody>
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
                            <th scope="col">illustration de la categorie du produit</th>
                            <th scope="col">Information Categorie</th>
                            <th scope="col">Actions</th>
                          </tr>
                          </thead>
                          <tbody>{(categories) && categories.map((categorie)=>(
                              <tr key={categorie.id}>
                                <td>
                                  <div className="row justify-content-center">
                                    <div className="col-4">
                                      <Link>
                                        <Avatar
                                            alt={categorie.nom_categorie}
                                            src={categorie.illustration_categorie}
                                            sx={{ width: 100, height: 100 }}
                                        />
                                      </Link>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="row">
                                    <div className="col align-self-center mt-2">
                                        {categorie.nom_categorie}
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="row">
                                    <div className="col align-self-center mt-2">
                                      <Link to="">
                                        <IconButton color="error" aria-label="delete">
                                          <DeleteIcon />
                                        </IconButton>
                                      </Link>
                                      <Link to="">
                                        <IconButton color="primary" aria-label="edit">
                                          <BorderColorIcon />
                                        </IconButton>
                                      </Link>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                          ))}</tbody>
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
      </main>
    </div>
  );
};

export default MainCatalogueProduit;
