import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Select from "react-select";
import "../../../index.css";

const PRODUIT_URL = "/createProduct";

const MainCatalogueProduit = () => {

  const [produits, setProduits] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [selectedCategorie, setSelectedCategorie] = useState(null);
  const [nomCat, setNom] = useState(null);
  const [image, setImage] = useState(null);

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

  useEffect(() => {
    const updatedOptions = categories.map((categorie) => ({
      value: categorie.nom_categorie,
      label: categorie.nom_categorie,
      id : categorie.id
    }));
    setOptions(updatedOptions);
  }, [categories]);

  const handleButtonClick = () => {
    setPopupOpen(true);
  };
  
  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const handleChangeSelectedCat = (selectedCategorie)=>{
    setSelectedCategorie(selectedCategorie);
  }
  const handleChangeNomProduit = (e)=>{
    setNom(e.target.value);
  }
  const handleImageChange = (e) =>{
    const file = e.target.files[0];
    setImage(file);
  }

  const handleSubimtCategorie = async (e)=>{
    e.preventDefault();
    try{
      const response = await axios.post(PRODUIT_URL, { nom : nomCat, categorieId : selectedCategorie.id, photoProduit : image}, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    }catch (error){
      console.log("Erreur : ", error);
    }
  }

  return (
    <div className={isPopupOpen ? "overlay" : ""}>
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
        <div className="col-12 ">
          <div className="row my-3 justify-content-end">
            <div className="col-2 d-grid gap-2">
              <button className="btn btn-primary {isPopupOpen ? overlay}" onClick={handleButtonClick}>
                <i className="bi bi-plus pe-2"></i>NOUVEAU PRODUIT
              </button>
            </div>
            <div className="col-2 d-grid gap-2">
              <button className="btn btn-secondary">
                <i className="bi bi-list pe-2"></i>NOUVELLE CATEGORIE
              </button>
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
                          <table className="table table-borderless datatable table-hover">
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
        </div>
        {isPopupOpen && (
            <div className="row popup-container2 card shadow-lg" style={{ width: "800px" }}>
              <div className="card-body">
                <div className="d-flex justify-content-between mx-3">
                  <h2 className="card-title mb-5">Ajouter un Produit au catalogue</h2>
                  <button
                    type="button"
                    className="btn-close card-title btn-close-width"
                    style={{ width: "40px" }}
                    aria-label="Close"
                    onClick={handleClosePopup}
                  ></button>
                </div>
                <form
                    className="row g-3 mx-2 needs-validation"
                    encType="multipart/form-data"
                    noValidate
                    onSubmit={handleSubimtCategorie}
                >
                  <div className="row">
                    <div className="mb-3">
                      <label htmlFor="nomProduit" className="form-label">Nom du produit</label>
                      <input
                        type="text"
                        className="form-control"
                        id="nomProduit"
                        placeholder="Entrer le nom du produit"
                        onChange={handleChangeNomProduit}
                      />
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="mb-3">
                      <label htmlFor="categorieProduit" className="form-label">Selectionner la categorie</label>
                      <Select
                        options={options}
                        value={selectedCategorie}
                        id="categorieProduit"
                        onChange={handleChangeSelectedCat}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="mb-3">
                      <label htmlFor="formFile" className="form-label">Charger l'image du produit</label>
                      <input
                          className="form-control"
                          type="file"
                          id="formFile"
                          accept="image/*"
                          onChange={handleImageChange}
                      />
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col d-grid gap-2">
                      <button className="btn btn-primary" type="submit">
                        Créer le produit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
        )}
      </main>
    </div>
  );
};

export default MainCatalogueProduit;
