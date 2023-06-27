import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import "jspdf-autotable";
import jsPDF from "jspdf";
import { UilTimes } from "@iconscout/react-unicons";
import React, { useState } from "react";
import "../../../index.css";

import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { CompaniesSearch } from "../../companies/companies-search";
import { CompanyCard } from "../../companies/company-card";

const companies = [
  {
    id: "2569ce0d517a7f06d3ea1f24",
    createdAt: "27/03/2019",
    description:
      "Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.",
    logo: "/assets/logos/logo-dropbox.png",
    title: "Dropbox",
    downloads: "594",
  },
  {
    id: "ed2b900870ceba72d203ec15",
    createdAt: "31/03/2019",
    description:
      "Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.",
    logo: "/assets/logos/logo-medium.png",
    title: "Medium Corporation",
    downloads: "625",
  },
  {
    id: "a033e38768c82fca90df3db7",
    createdAt: "03/04/2019",
    description:
      "Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.",
    logo: "/assets/logos/logo-slack.png",
    title: "Slack",
    downloads: "857",
  },
  {
    id: "1efecb2bf6a51def9869ab0f",
    createdAt: "04/04/2019",
    description:
      "Lyft is an on-demand transportation company based in San Francisco, California.",
    logo: "/assets/logos/logo-lyft.png",
    title: "Lyft",
    downloads: "406",
  },
  {
    id: "1ed68149f65fbc6089b5fd07",
    createdAt: "04/04/2019",
    description:
      "GitHub is a web-based hosting service for version control of code using Git.",
    logo: "/assets/logos/logo-github.png",
    title: "GitHub",
    downloads: "835",
  },
  {
    id: "5dab321376eff6177407e887",
    createdAt: "04/04/2019",
    description:
      "Squarespace provides software as a service for website building and hosting. Headquartered in NYC.",
    logo: "/assets/logos/logo-squarespace.png",
    title: "Squarespace",
    downloads: "835",
  },
];

const handleExport = () => {
  // Création d'une nouvelle instance de jsPDF
  const doc = new jsPDF();

  doc.text("Liste des entreprises", 10, 10); // Ajustez la position et le style selon vos besoins

  // Définition des colonnes du tableau
  const columns = [
    "ID",
    "Créé le",
    "Description",
    "Logo",
    "Titre",
    "Téléchargements",
  ];

  // Définition des lignes du tableau
  const rows = companies.map((company) => [
    company.id,
    company.createdAt,
    company.description,
    company.logo,
    company.title,
    company.downloads,
  ]);

  // Ajustement de la taille de la page PDF
  const pageSize = doc.internal.pageSize;
  const pageWidth = pageSize.getWidth();
  const pageHeight = pageSize.getHeight();
  const cellWidth = 40; // Largeur de chaque cellule dans le tableau
  const cellPadding = 5; // Marge intérieure des cellules

  const tableWidth = (cellWidth + cellPadding) * columns.length;
  const tableHeight = (cellWidth + cellPadding) * rows.length;
  const scale = Math.min(pageWidth / tableWidth, pageHeight / tableHeight);

  doc.setPage();
  doc.scale(scale, scale);

  // Génération du tableau dans le PDF
  doc.autoTable({
    head: [columns],
    body: rows,
    columnStyles: {
      0: { columnWidth: cellWidth },
      1: { columnWidth: cellWidth },
      2: { columnWidth: cellWidth },
      3: { columnWidth: cellWidth },
      4: { columnWidth: cellWidth },
      5: { columnWidth: cellWidth },
    },
    margin: { top: 30 },
  });

  // Définition du contenu du footer
  const pageCount = doc.internal.getNumberOfPages();
  const footer = function (currentPage, totalPage) {
    return "Page " + currentPage + " de " + totalPage;
  };

  // Ajout du footer à chaque page
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(10);
    doc.text(footer(i, pageCount), 10, pageHeight - 10);
  }

  // Téléchargement du fichier PDF
  doc.save("export_companies.pdf");
};

export default function MainCompanies() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setPopupOpen(true);
  };
  const handleClosePopup = () => {
    setPopupOpen(false);
  };
  const handleCreate = (e) => {
    e.preventDefault();
    // Add logic for creating the company
    if (name.length < 4) {
      setNameError("Le nom doit avoir au moins 4 caractères");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Veuillez entrer une adresse e-mail valide");
      return;
    }
  };
  const handleReset = (e) => {
    e.preventDefault();
    // Add logic for resetting the form
  };

  return (
    <div className={isPopupOpen ? "overlay" : ""}>
      <main id="main" className="main" style={{ marginTop: "60px" }}>
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Entreprise</li>
            </ol>
          </nav>
        </div>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
          }}
        >
          <Container maxWidth="xl">
            <Stack spacing={3}>
              <Stack direction="row" justifyContent="space-between" spacing={4}>
                <Stack spacing={1}>
                  <Typography variant="h4" style={{ fontWeight: "600" }}>
                    Entreprises
                  </Typography>
                  <Stack alignItems="center" direction="row" spacing={1}>
                    <Button
                      color="inherit"
                      startIcon={
                        <SvgIcon fontSize="small">
                          <ArrowUpOnSquareIcon />
                        </SvgIcon>
                      }
                    >
                      Import
                    </Button>
                    <Button
                      color="inherit"
                      startIcon={
                        <SvgIcon fontSize="small">
                          <ArrowDownOnSquareIcon />
                        </SvgIcon>
                      }
                      onClick={handleExport}
                    >
                      Export
                    </Button>
                  </Stack>
                </Stack>
                <div>
                  <Button
                    onClick={handleButtonClick}
                    startIcon={
                      <SvgIcon fontSize="small">
                        <PlusIcon />
                      </SvgIcon>
                    }
                    variant="contained"
                  >
                    Ajouter
                  </Button>
                </div>
              </Stack>
              <CompaniesSearch />

              <Grid container spacing={3}>
                {companies.map((company) => (
                  <Grid xs={12} md={6} lg={4} key={company.id}>
                    <CompanyCard company={company} />
                  </Grid>
                ))}
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Pagination count={3} size="small" />
              </Box>
            </Stack>
          </Container>
        </Box>

        {isPopupOpen && (
          <div className="row popup-container" style={{ width: "700px" }}>
            <div className="row">
              <div class="card">
                <div class="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 class="card-title">Créer une entreprise</h5>
                    <span className="card-title">
                      {" "}
                      <UilTimes onClick={handleClosePopup} />
                    </span>
                  </div>

                  <form class="row g-3">
                    <div class="col-md-12">
                      <label for="inputName5" class="form-label">
                        Nom
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputName5"
                        value={name}
                        onInput={(e) => {
                          const value = e.target.value;
                          setName(value);
                          if (value.length < 4) {
                            setNameError(
                              "Le nom doit avoir au moins 4 caractères"
                            );
                          } else {
                            setNameError("");
                          }
                        }}
                      />

                      {nameError && <p className="text-danger">{nameError}</p>}
                    </div>
                    <div class="col-md-6">
                      <label for="inputEmail5" class="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail5"
                        value={email}
                        onInput={(e) => {
                          const value = e.target.value;
                          setEmail(value);
                          if (!validateEmail(value)) {
                            setEmailError(
                              "Veuillez entrer une adresse e-mail valide"
                            );
                          } else {
                            setEmailError("");
                          }
                        }}
                      />
                      {emailError && (
                        <p className="text-danger">{emailError}</p>
                      )}
                    </div>
                    <div class="col-md-6">
                      <label for="inputPassword5" class="form-label">
                        Password
                      </label>

                      <input
                        type="password"
                        class="form-control"
                        id="inputPassword5"
                        placeholder="123 kasulu St"
                      />
                    </div>
                    <div class="col-12">
                      <label for="inputAddress5" class="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputAddres5s"
                        placeholder="123 kasulu St"
                      />
                    </div>
                    <div class="col-12">
                      <label for="inputAddress2" class="form-label">
                        Description
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputAddress2"
                        placeholder="kamoa est une entreprise minière basée à kolwezi"
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="inputCity" class="form-label">
                        Ville
                      </label>
                      <input type="text" class="form-control" id="inputCity" />
                    </div>
                    <div class="col-md-4">
                      <label for="inputState" class="form-label">
                        Pays
                      </label>
                      <select id="inputState" class="form-select">
                        <option selected>Choisi...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div class="col-md-2">
                      <label for="inputZip" class="form-label">
                        Document
                      </label>
                      <input type="text" class="form-control" id="inputZip" />
                    </div>
                    <div class="col-md-2 mb-2">
                      <label for="inputZip" class="form-label">
                        Logo
                      </label>
                      <input
                        type="file"
                        class="form-control"
                        id="inputZip"
                        accept=".png, .jpg"
                      />
                    </div>

                    <div class="col-12">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="gridCheck"
                        />
                        <label class="form-check-label" for="gridCheck">
                          Enegistrer
                        </label>
                      </div>
                    </div>
                    <div class="text-center">
                      <button
                        type="submit"
                        class="btn btn-primary me-2"
                        onClick={handleCreate}
                      >
                        Créer
                      </button>
                      <button
                        type="reset"
                        class="btn btn-secondary"
                        onClick={handleReset}
                      >
                        Reinit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
