import { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineMail } from "react-icons/ai";
import "../../../index.css";
import Swal from "sweetalert2";

const MainCotation = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const [cotations, setCotations] = useState([
    {
      id: 1,
      date: "27-06-2023",
      delai: "28-07-2023",
      mining: "KADEA",
      statut: "Finalisée",
      statutClass: "bg-success",
    },
    {
      id: 2,
      date: "22-07-2023",
      delai: "28-08-2023",
      mining: "MUTANDA",
      statut: "En attente",
      statutClass: "bg-warning",
    },
    {
      id: 3,
      date: "27-08-2023",
      delai: "27-09-2023",
      mining: "TFM",
      statut: "Finalisée",
      statutClass: "bg-success",
    },
    {
      id: 4,
      date: "17-09-2023",
      delai: "T17-14-2023",
      mining: "KCC",
      statut: "Rejetée",
      statutClass: "bg-danger",
    },
  ]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Êtes-vous sûr?",
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: "avertissement",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimez-le!",
    }).then((result) => {
      if (result.isConfirmed) {
        setCotations((prevCotations) =>
          prevCotations.filter((cotation) => cotation.id !== id)
        );

        Swal.fire("Supprimé!", "Votre fichier a été supprimé.", "succès");
      }
    });
  };
  const [isPopupOpen, setPopupOpen] = useState(false);
  const handleButtonClick = () => {
    setPopupOpen(true);
  };
  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  // ============================= Rows =============
  const [rows, setRows] = useState([
    { id: 1, qty: "", description: "", detail: "", prix: "", total: "" },
  ]);

  const addRow = () => {
    const newRow = {
      id: Date.now(),
      qty: "",
      description: "",
      detail: "",
      prix: "",
      total: 0, // Initialisez la colonne "total" avec la valeur 0
    };
    setRows([...rows, newRow]);
  };

  const handleInputChange = (e, rowId, fieldName) => {
    const updatedRows = rows.map((row) =>
      row.id === rowId
        ? {
            ...row,
            [fieldName]: e.target.value,
            total: fieldName === "qty" ? e.target.value * row.prix : row.total,
          }
        : row
    );
    setRows(updatedRows);
  };

  const removeRow = (rowId) => {
    const updatedRows = rows.filter((row) => row.id !== rowId);
    setRows(updatedRows);
  };

  // ============================= Hendlecreate =============

  const [offer, setOffer] = useState([]);
  const handleCreate = (e) => {
    e.preventDefault();

    if (
      document.getElementById("name").value === "" ||
      document.getElementById("date").value === "" ||
      document.getElementById("adress").value === "" ||
      document.getElementById("numero").value === "" ||
      document.getElementById("qty").value === "" ||
      document.getElementById("desc").value === ""
    ) {
      alert("Veuillez remplir tous les champs du requis.");
      return;
    }
    // Add logic for creating the DC

    const name = document.getElementById("name").value;
    if (name.length < 4) {
      alert("Le nom de l'entreprise doit comporter au moins 4 caractères");
      return;
    }

    const address = document.getElementById("adress").value;
    const addressRegex =
      /^[0-9]+, [a-zA-Z\s]+, [a-zA-Z\s]+, [a-zA-Z\s]+, [a-zA-Z\s]+$/;
    if (!addressRegex.test(address)) {
      alert("Le format de l'adresse est incorrect");
      return;
    }

    const dcNumber = document.getElementById("numero").value;
    const dcNumberRegex = /^[a-zA-Z0-9]{5}$/;
    if (!dcNumberRegex.test(dcNumber)) {
      alert("Le numéro de la DC doit comporter 5 caractères alphanumériques");
      return;
    }

    const newOffer = {
      name,
      date: selectedDate,
      address,
      dcNumber,
    };

    setOffer([...offer, newOffer]);
    // Réinitialisez les champs du formulaire après la création de la DC
    document.getElementById("name").value = "";
    document.getElementById("date").value = "";
    document.getElementById("adress").value = "";
    document.getElementById("numero").value = "";

    setPopupOpen(false);
  };

  return (
    <div className={isPopupOpen ? "overlay" : ""}>
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
        <div class="col-12 comand {isPopupOpen ? overlay}">
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

            <div class="card-body mt-3 ">
              <h5 class="card-title">
                Toutes les cotations <span>| Cette Année</span>
              </h5>

              <table className="table table-borderless datatable cotation">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Date de la demande</th>
                    <th scope="col">Delai</th>
                    <th scope="col">Mining</th>
                    <th scope="col">Statut</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cotations.map((cotation) => (
                    <tr key={cotation.id}>
                      <th scope="row">#{cotation.id}</th>
                      <td>{cotation.date}</td>
                      <td>{cotation.delai}</td>
                      <td>
                        <Link to="/mining" className="text-primary">
                          {cotation.mining}
                        </Link>
                      </td>
                      <td>
                        <span className={`badge ${cotation.statutClass}`}>
                          {cotation.statut}
                        </span>
                      </td>
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn btn-link dropdown-toggle"
                            type="button"
                            id={`actionDropdown${cotation.id}`}
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <FiChevronDown />
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby={`actionDropdown${cotation.id}`}
                          >
                            <Link to="#" className="dropdown-item">
                              <AiOutlineEdit /> Détail
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                              onClick={handleButtonClick}
                            >
                              <AiOutlineMail /> Answer
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                              onClick={() => handleDelete(cotation.id)}
                            >
                              <AiOutlineDelete /> Delete
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
        </div>

        {isPopupOpen && (
          <div className="row popup-container2 p-3" style={{ width: "700 px" }}>
            <div className="card-body">
              <div className="d-flex justify-content-between mx-3">
                <h5 class="card-title">Offre </h5>

                <button
                  type="button"
                  class="btn-close card-title btn-close-width"
                  style={{ width: "40px" }}
                  aria-label="Close"
                  onClick={handleClosePopup}
                ></button>
              </div>

              <form class="row g-3 mx-2 needs-validation" noValidate>
                <div class="col-md-6">
                  <label htmlFor="name">Nom Vendeur</label>
                  <input
                    type="text"
                    id="name"
                    class="form-control"
                    placeholder="Nom"
                    required
                  />
                </div>

                <div class="col-md-6">
                  <label htmlFor="date">Date</label>

                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                  />
                </div>
                <div class="col-6">
                  <label htmlFor="adress">Adresse Vendeur</label>
                  <input
                    type="text"
                    class="form-control"
                    id="adress"
                    placeholder="1016 Route Kinsevere l'shi"
                  />
                </div>
                <div class="col-md-6">
                  <label htmlFor="numero">Numéro dc</label>
                  <input
                    id="numero"
                    type="text"
                    class="form-control"
                    placeholder="1001"
                    required
                  />
                </div>
              </form>

              <div className="card-body" style={{ marginTop: "40px" }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Numéro</th>
                      <th scope="col">Qty</th>
                      <th scope="col">Description</th>
                      <th scope="col">Detail</th>
                      <th scope="col">Prix</th>
                      <th scope="col">Total</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => (
                      <tr key={row.id}>
                        <th scope="row">#{row.id}</th>
                        <td>
                          <input
                            type="text"
                            value={row.qty}
                            onChange={(e) =>
                              handleInputChange(e, row.id, "qty")
                            }
                            className="form-control"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control input-tab border border-secondary-subtle"
                            id="desc"
                            value={row.description}
                            onChange={(e) =>
                              handleInputChange(e, row.id, "description")
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control input-tab border border-secondary-subtle"
                            id="detail"
                            placeholder="optionnel"
                            value={row.detail}
                            onChange={(e) =>
                              handleInputChange(e, row.id, "detail")
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            value={row.prix}
                            onChange={(e) =>
                              handleInputChange(e, row.id, "prix")
                            }
                            className="form-control"
                          />
                        </td>
                        <td>{row.qty * row.prix}</td>
                        <td>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => removeRow(row.id)}
                          >
                            Supprimer
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <span className="btn-primary mt-2 add-item" onClick={addRow}>
                  + Add item
                </span>
                <div className="text-end mt-5 mb-3">
                  <button
                    id="inputState"
                    class="btn btn-primary"
                    onClick={handleCreate}
                  >
                    Envoyer l'offre
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary ms-2"
                    onClick={handleClosePopup}
                  >
                    Cancel
                  </button>
                </div>

                {/* End Table default rows */}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default MainCotation;
