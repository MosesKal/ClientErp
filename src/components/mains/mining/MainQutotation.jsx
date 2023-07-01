import React, { useState } from "react";
import moment from "moment";
import { UilTimes } from "@iconscout/react-unicons";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineMail } from "react-icons/ai";
import axios from "../../api/axios";
import Swal from "sweetalert2";
import "../../../index.css";

const COTATION_URL = "/createCotation";

function MainQuototation({ data }) {
  const [status, setStatus] = useState("open");

  console.log(data);

  const [rows, setRows] = useState([
    { id: 1, qty: "", description: "", detail: "" },
  ]);

  const addRow = () => {
    const newRow = { id: Date.now(), qty: "", description: "", detail: "" };
    setRows([...rows, newRow]);
    const addRow = () => {
      const newRow = { id: Date.now(), qty: "", description: "", detail: "" };
      setRows([...rows, newRow]);
    };
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

  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const [quotations, setQuotations] = useState([]);

  const handleCreate = (e) => {
    e.preventDefault();

    const startDate = document.getElementById("start").value;
    const endDate = document.getElementById("end").value;
    const description = document.getElementById("description").value;
    if (endDate <= startDate) {
      alert("La date de fin doit être supérieure à la date de début");
      return;
    }

    const newQuotation = {
      startDate,
      endDate,
      userid: data.Entreprise.id,
      dateDebut: moment(startDate),
      dateFin: moment(endDate),
      duree: moment(endDate).diff(moment(startDate), "days"),
      description: description,
      produits: rows,
    };

    setQuotations([...quotations, newQuotation]);
    document.getElementById("name").value = "";
    document.getElementById("start").value = "";
    document.getElementById("end").value = "";
    setPopupOpen(false);
  };

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

    const currentDate = new Date();
    const selectedEndDate = new Date(e.target.value);
    if (selectedEndDate <= currentDate) {
      setStatus("closed");
    } else {
      setStatus("open");
    }
  };

  const validateDates = (start, end) => {
    if (start && end && start > end) {
      setDateError(true);
      // setModalIsOpen(true);
    } else {
      setDateError(false);
    }
  };

  const handleActionChange = (quotationIndex, action) => {
    if (action === "delete") {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Êtes-vous sûr(e) ?",
          text: "Êtes-vous sûr(e) de vouloir supprimer cette cotation ?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Oui, supprimer",
          cancelButtonText: "Non, annuler",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            const updatedQuotations = [...quotations];
            updatedQuotations.splice(quotationIndex, 1);
            setQuotations(updatedQuotations);
            swalWithBootstrapButtons.fire(
              "Supprimé !",
              "La cotation a été supprimée avec succès.",
              "success"
            );
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
              "Annulé",
              "La suppression de la cotation a été annulée.",
              "error"
            );
          }
        });
    } else if (action === "send") {
      const quotationToSend = quotations[quotationIndex];
      axios
        .post(COTATION_URL, JSON.stringify(quotationToSend))
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className={isPopupOpen ? "overlay" : ""}>
      <main id="main" class="main">
        <div className="pagetitle">
          <h1>Cotations</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Cotations</li>
            </ol>
          </nav>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between mx-3 mt-5">
            <h5 class="card-title">Demande de cotation</h5>

            <button
              className="btn btn-primary {isPopupOpen ? overlay}"
              onClick={handleButtonClick}
              style={{ height: "40px" }}
            >
              Nouvelle DC
            </button>
          </div>
        </div>

        <div className="card-body">
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">Description</th>
                <th scope="col">Date de début</th>
                <th scope="col">Date de fin</th>
                <th scope="col">Durée</th>
                <th scope="col">Statut</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {quotations.map((quotation, index) => (
                <tr key={index}>
                  <td>{}</td>
                  <td>{quotation.startDate}</td>
                  <td>{quotation.endDate}</td>
                  <td>{quotation.duree}</td>
                  <td>
                    {status === "open" ? (
                      <span class="badge bg-secondary">Non envoyée</span>
                    ) : (
                      <span class="badge bg-susses">En attente</span>
                    )}
                  </td>
                  <td>
                    <div className="dropdown">
                      <button
                        className="btn btn-link dropdown-toggle"
                        type="button"
                        id={`actionDropdown${index}`}
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <FiChevronDown />
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby={`actionDropdown${index}`}
                      >
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={() => handleActionChange(index, "edit")}
                          >
                            <AiOutlineEdit /> Edit
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={() => handleActionChange(index, "delete")}
                          >
                            <AiOutlineDelete /> Delete
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={() => handleActionChange(index, "send")}
                          >
                            <AiOutlineMail /> Envoyer
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
                    placeholder={`${data.Entreprise.denomination}`}
                    required
                    disabled
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
                  <inputSafety
                    shoes
                    type="text"
                    class="form-control"
                    id="adress"
                    placeholder={`1016, ${data.Entreprise.Adresse.avenue}, ${data.Entreprise.Adresse.ville}, ${data.Entreprise.Adresse.province}`}
                    disabled
                  />
                </div>

                <div class="col-md-6">
                  <label htmlFor="inputState">Vendeur</label>
                  <select id="inputState" class="form-select">
                    <option selected>Tous</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-md-12">
                  <label for="description" htmlFor="inputState">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    placeholder="Entrez la description de la cotation"
                    id="description"
                    style={{ height: 100 }}
                  ></textarea>
                </div>
              </form>

              <div className="card-body" style={{ marginTop: "40px" }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Numéro</th>
                      <th scope="col">Qty</th>
                      <th scope="col">Nom du produit</th>
                      <th scope="col">Detail</th>
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
                            value={row.detail}
                            onChange={(e) =>
                              handleInputChange(e, row.id, "detail")
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
                    class="btn btn-primary"
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
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default MainQuototation;
