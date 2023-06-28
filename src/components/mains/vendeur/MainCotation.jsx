import { useState } from "react";
import { Link } from "react-router-dom";
import { UilTimes } from "@iconscout/react-unicons";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineMail } from "react-icons/ai";
import "../../../index.css";
import Swal from "sweetalert2";

const MainCotation = () => {
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
    { id: 1, qty: "", description: "", detail: "", prix: "" },
  ]);

  const addRow = () => {
    const newRow = {
      id: Date.now(),
      qty: "",
      description: "",
      detail: "",
      prix: "",
    };
    setRows([...rows, newRow]);
  };

  const handleInputChange = (e, rowId, fieldName) => {
    const updatedRows = rows.map((row) =>
      row.id === rowId ? { ...row, [fieldName]: e.target.value } : row
    );
    setRows(updatedRows);
  };

  const removeRow = (rowId) => {
    const updatedRows = rows.filter((row) => row.id !== rowId);
    setRows(updatedRows);
  };
  // ============================= Date =============
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [dateError, setDateError] = useState(false);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    validateDates(e.target.value, endDate);
  };
  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    validateDates(startDate, e.target.value);
  };
  const validateDates = (start, end) => {
    if (start && end && start > end) {
      setDateError(true);
      // setModalIsOpen(true);
    } else {
      setDateError(false);
    }
  };
  // ============================= Payment =============
  const [paymentOption, setPaymentOption] = useState("indays");
  const handlePaymentOptionChange = (e) => {
    const selectedOption = e.target.value;
    setPaymentOption(selectedOption);
  };

  // ============================= Hendlecreate =============

  const [offer, setOffer] = useState([]);
  const handleCreate = (e) => {
    e.preventDefault();

    if (
      document.getElementById("name").value === "" ||
      document.getElementById("start").value === "" ||
      document.getElementById("end").value === "" ||
      document.getElementById("adress").value === "" ||
      document.getElementById("numero").value === "" ||
      document.getElementById("qty").value === "" ||
      document.getElementById("desc").value === "" ||
      document.getElementById("detail").value === ""
    ) {
      alert("Veuillez remplir tous les champs du formulaire.");
      return;
    }
    // Add logic for creating the DC

    const name = document.getElementById("name").value;
    if (name.length < 4) {
      alert("Le nom de l'entreprise doit comporter au moins 4 caractères");
      return;
    }
    const startDate = document.getElementById("start").value;
    const endDate = document.getElementById("end").value;
    if (endDate <= startDate) {
      alert("La date de fin doit être supérieure à la date de début");
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
    const paymentOption = document.getElementById("inputState").value;
    const period = document.getElementById("period").value;
    const periodRegex = /^[1-9]+$/;
    if (!periodRegex.test(period)) {
      alert("La période doit comporter uniquement des caractères de 1 à 9");
      return;
    }
    const newOffer = {
      name,
      startDate,
      endDate,
      address,
      dcNumber,
      paymentOption,
      period,
    };

    setOffer([...offer, newOffer]);
    // Réinitialisez les champs du formulaire après la création de la DC
    document.getElementById("name").value = "";
    document.getElementById("start").value = "";
    document.getElementById("end").value = "";
    document.getElementById("adress").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("period").value = "";

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
                <h5 class="card-title">Demande de cotation</h5>

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
                  <label htmlFor="name">Nom de l'entreprise</label>
                  <input
                    type="text"
                    id="name"
                    class="form-control"
                    placeholder="Nom"
                    required
                  />
                </div>
                <div class="col-md-3">
                  <label htmlFor="start">Date de début</label>
                  <input
                    type="date"
                    className={`form-control ${dateError ? "is-invalid" : ""}`}
                    id="start"
                    value={startDate}
                    onChange={handleStartDateChange}
                    required
                  />
                </div>
                <div class="col-md-3">
                  <label htmlFor="end">Date de fin</label>

                  <input
                    type="date"
                    className={`form-control ${dateError ? "is-invalid" : ""}`}
                    id="end"
                    value={endDate}
                    onChange={handleEndDateChange}
                    required
                  />
                </div>
                <div class="col-6">
                  <label htmlFor="adress">Adresse Entreprise</label>
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
                <div class="col-md-2">
                  <label htmlFor="logo">Logo entreprise</label>
                  <input
                    type="file"
                    class="form-control"
                    placeholder="Logo"
                    accept=".png, .jpg"
                    required
                    id="logo"
                  />
                </div>
                <div class="col-md-4">
                  <label htmlFor="inputState">Vendeur</label>
                  <select id="inputState" class="form-select">
                    <option selected>Tous</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <label htmlFor="inputState">Moyen de payement</label>
                  <select
                    id="inputState"
                    className="form-select"
                    onChange={handlePaymentOptionChange}
                  >
                    <option value="indays" selected>
                      Pay in days
                    </option>
                    <option value="cod">COD</option>
                  </select>
                </div>
                <div class="col-md-2">
                  <label htmlFor="period">Durée</label>
                  <input
                    id="period"
                    type="text"
                    className={`form-control period-number ${
                      paymentOption !== "indays" ? "disabled" : ""
                    }`}
                    placeholder="0"
                    required
                    disabled={paymentOption !== "indays"}
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
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, index) => (
                      <tr key={row.id}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            type="number"
                            className="form-control input-tab border border-secondary-subtle"
                            id="qty"
                            value={row.qty}
                            onChange={(e) =>
                              handleInputChange(e, row.id, "qty")
                            }
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
                            className="form-control input-tab border border-secondary-subtle"
                            id="prix"
                            value={row.prix}
                            onChange={(e) =>
                              handleInputChange(e, row.id, "prix")
                            }
                          />
                        </td>
                        <td>
                          <UilTimes onClick={() => removeRow(row.id)} />
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
                    class="btn btn-success"
                    onClick={handleCreate}
                  >
                    Créer une DC
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
