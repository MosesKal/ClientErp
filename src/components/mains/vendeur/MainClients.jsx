import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { BsTrash, BsPencil } from "react-icons/bs";
import "../../../index.css";

const columns = [
  { field: "id", headerName: "ID", width: 120 },
  { field: "firstName", headerName: "First Name", width: 160 },
  { field: "lastName", headerName: "Last Name", width: 160 },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  { field: "adresse", headerName: "Adresse", width: 260 },
  { field: "phone", headerName: "Phone", width: 220 },
  { field: "email", headerName: "Email", width: 230 },

  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "action",
    headerName: "Action",
    width: 130,
    renderCell: (params) => (
      <div>
        <DropdownButton id="dropdown-basic-button" title="Actions">
          <Dropdown.Item onClick={() => handleEdit(params)}>
            Edit <BsPencil />
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleDelete(params)}>
            Delete <BsTrash />
          </Dropdown.Item>
        </DropdownButton>
      </div>
    ),
  },
];

const rows = [
  {
    id: 1,
    firstName: "baki",
    lastName: "kyungu",
    adresse: "35 Route kasimba",
    phone: "+243 97 113 5557",
    email: "abbakikyungu@gmail.com",
    action: "",
  },
  {
    id: 2,
    firstName: "moise",
    lastName: "kalunga",
    adresse: "35 savonier",
    phone: "+243 97 113 5587",
    email: "moseskal@gmail.com",
    action: "",
  },
  {
    id: 3,
    firstName: "jael",
    lastName: "bukasa",
    adresse: "35 kasapa",
    phone: "+243 97 113 5887",
    email: "jaelbukasa407@gmail.com",
    action: "",
  },
];
const handleEdit = (params) => {
  // Handle edit action
  console.log("Edit", params);
};

const handleDelete = (params) => {
  // Handle delete action
  console.log("Delete", params);
};

function MainClients() {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
      setEmailError("Adresse e-mail invalide.");
    } else {
      setEmailError("");
    }
  };

  const handleFistNameChange = (event) => {
    const value = event.target.value;
    setFirstName(value);

    if (value.length < 4) {
      setFirstNameError("Le Prenom doit avoir au moins 3 caractères.");
    } else {
      setFirstNameError("");
    }
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setLastName(value);

    if (value.length < 4) {
      setLastNameError("Le nom doit avoir au moins 4 caractères.");
    } else {
      setLastNameError("");
    }
  };

  const handlePhoneChange = (event) => {
    const value = event.target.value;
    setPhone(value);

    const phoneRegex = /^(?:\+?243|0)\s?(?:97|83|81|99|89|90)(?:\s?\d){7}$/;

    if (!phoneRegex.test(value)) {
      setPhoneError("Le numéro entré est invalide.");
    } else {
      setPhoneError("");
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName.length < 3) {
      setFirstNameError("Le Prénom doit avoir au moins 3 caractères.");
      return;
    }

    if (lastName.length < 4) {
      setLastNameError("Le nom doit avoir au moins 4 caractères.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError("Adresse e-mail invalide.");
      return;
    }

    const phoneRegex = /^(?:\+?243|0)\s?(?:97|83|81|99|89|90)(?:\s?\d){7}$/;

    if (!phoneRegex.test(phone)) {
      setPhoneError("Le numéro entré est invalide.");
      return;
    }
  };

  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className={isPopupOpen ? "overlay" : ""}>
      <main id="main" class="main">
        <div class="pagetitle">
          <h1>Dashboard Vendeur</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li class="breadcrumb-item">Clients</li>
            </ol>
          </nav>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between mx-3 mt-5">
            <h5 class="card-title">Liste des Clients</h5>

            <button
              className="btn btn-primary {isPopupOpen ? overlay}"
              style={{ height: "40px" }}
              onClick={handleButtonClick}
            >
              Ajouter
            </button>
          </div>
        </div>

        <section class="section mt-3">
          <div className="row comand" style={{ width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns.map((column) => ({
                ...column,
                headerClassName: "custom-header",
              }))}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />
          </div>

          {isPopupOpen && (
            <div className="row form-wrapper addClient">
              <form className="frofile-form">
                <div class="row mb-3">
                  <label
                    for="firstName"
                    class="col-md-4 col-lg-3 col-form-label"
                  >
                    Fist Name
                  </label>
                  <div class="col-md-8 col-lg-9">
                    <input
                      name="firstName"
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="baki"
                      value={firstName}
                      onChange={handleFistNameChange}
                      required
                    />
                    {firstNameError && (
                      <div className="text-danger">{firstNameError}</div>
                    )}
                  </div>
                </div>
                <div class="row mb-3">
                  <label
                    for="lastName"
                    class="col-md-4 col-lg-3 col-form-label"
                  >
                    Last Name
                  </label>
                  <div class="col-md-8 col-lg-9">
                    <input
                      name="lastName"
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="kyungu"
                      value={lastName}
                      onChange={handleLastNameChange}
                      required
                    />
                    {lastNameError && (
                      <div className="text-danger">{lastNameError}</div>
                    )}
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Country" class="col-md-4 col-lg-3 col-form-label">
                    Province
                  </label>
                  <div class="col-md-8 col-lg-9">
                    <select
                      name="province"
                      id="province"
                      class="form-control"
                      required
                    >
                      <option value="province" selected>
                        Haut-katanga
                      </option>
                      <option value="province">Equateur</option>
                      <option value="province">Nord-Ubangui </option>
                      <option value="province">Mongala</option>
                      <option value="province">Bas-Uele</option>
                      <option value="province">Haut-Uele </option>
                      <option value="province">Kinshasa</option>
                      <option value="province">Lomami</option>
                      <option value="province">Haut-lomami</option>
                      <option value="province">Lualaba</option>
                    </select>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Address" class="col-md-4 col-lg-3 col-form-label">
                    Address
                  </label>
                  <div class="col-md-8 col-lg-9">
                    <input
                      name="address"
                      type="text"
                      class="form-control"
                      id="Address"
                      placeholder="A108 Adam Street, New York, NY 535022"
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Phone" class="col-md-4 col-lg-3 col-form-label">
                    Phone
                  </label>
                  <div class="col-md-8 col-lg-9">
                    <input
                      name="phone"
                      type="text"
                      class="form-control"
                      id="Phone"
                      placeholder="097 11 355 57"
                      value={phone}
                      onChange={handlePhoneChange}
                      required
                    />
                    {phoneError && (
                      <div className="text-danger">{phoneError}</div>
                    )}
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Email" class="col-md-4 col-lg-3 col-form-label">
                    Email
                  </label>
                  <div class="col-md-8 col-lg-9">
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      id="Email"
                      placeholder="abbakikyungu@gmail.com"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                    {emailError && (
                      <div className="text-danger">{emailError}</div>
                    )}
                  </div>
                </div>

                <div class="text-center">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-secondary ms-2"
                    onClick={handleClosePopup}
                  >
                    Quitter
                  </button>
                </div>
              </form>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default MainClients;
