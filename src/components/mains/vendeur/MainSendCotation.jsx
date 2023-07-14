import useAuth from "../../../hooks/useAuth";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import { Link, useParams } from "react-router-dom";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import React from "react";
import Stack from "@mui/material/Stack";

const MainSendCotation = () => {
  const { cotationId } = useParams();
  const { cotations, auth } = useAuth();

  const cotation = cotations.find((cotation) => cotation.id == cotationId);

  if (!cotation) {
    return <div>Cotation introuvable</div>;
  }

  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Cotation</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/CotationVendeur">Home</Link>
              </li>
              <li className="breadcrumb-item active">
                <Link to="">Offre</Link>
              </li>
            </ol>
          </nav>
        </div>
        <div className="col-12 comand ">
          <div className="card recent-sales overflow-auto">
            <div className="card-body mt-3 ">
              <h5 className="card-title">Offre</h5>

              <table className="table table-borderless datatable cotation table-hover">
                <thead>
                  <tr>
                    <th scope="col">Logo Entreprise</th>
                    <th scope="col">Description</th>
                    <th scope="col">Date de debut</th>
                    <th scope="col">Date de fin</th>
                    <th scope="col">Mining</th>
                    <th scope="col">Statut</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Avatar
                        src={`${cotation.logoEntreprise}`}
                        alt="logo"
                        className="rounded-circle"
                      />
                    </td>
                    <td>
                      {cotation.description.length > 10
                        ? cotation.description.substr(0, 40) + "..."
                        : cotation.description}
                    </td>
                    <td>{cotation.date_debut}</td>
                    <td>{cotation.date_fin}</td>
                    <td>{cotation.entreprise}</td>
                    <td>
                      <span className="badge rounded-pill text-bg-secondary">
                        En attente
                      </span>
                    </td>
                    <td>
                      <IconButton color="primary">
                        <SendIcon />
                      </IconButton>

                      <Link to={`/detailCotation/${cotation.id}`}>
                        <IconButton color="primary">
                          <ReadMoreIcon />
                        </IconButton>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <section className="section profile">
          <div className="row">
            <div className="col-xl-9">
              <div className="card">
                <div className="card-body pt-3">
                  <ul className="nav nav-tabs nav-tabs-bordered">
                    <li className="nav-item">
                      <button
                        className="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-overview"
                      >
                        Envoyer l'offre
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-edit"
                      >
                        Télecharger l'offre
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content pt-2">
                    <div
                      className="tab-pane fade show active profile-overview"
                      id="profile-overview"
                    >
                      <form>
                        <div className="row">
                          <div className="col-3"></div>
                          <div className="col-9">
                            {" "}
                            <Divider>
                              <Chip label="INFORMATIONS DU PRESTATAIRE" />
                            </Divider>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="fullName"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Nom du prestataire
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="fullName"
                              type="text"
                              className="form-control"
                              id="fullName"
                              value={`${auth.nomUser} ${auth.prenomUser}`}
                              disabled
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="Phone"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Téléphone
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="phone"
                              type="text"
                              className="form-control"
                              id="Phone"
                              value={`${auth.telephone}`}
                              disabled
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="Email"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Email prestataire
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="email"
                              type="email"
                              className="form-control"
                              id="Email"
                              value={`${auth.mail}`}
                              disabled
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-3"></div>
                          <div className="col-9">
                            {" "}
                            <Divider>
                              <Chip label="INFORMATIONS SUR L'OFFRE" />
                            </Divider>
                          </div>
                        </div>

                        <div className="row my-3">
                          <label
                            htmlFor="about"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Description de l'offre
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <textarea
                              name="about"
                              className="form-control"
                              id="about"
                              style={{ height: "100px" }}
                            ></textarea>
                          </div>
                        </div>
                        <div className="row my-3">
                          <label
                            htmlFor="about"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Description de la demande de Cotation
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <textarea
                              name="about"
                              className="form-control"
                              id="about"
                              style={{ height: "100px" }}
                              disabled
                            >
                              {`${cotation.description}`}
                            </textarea>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-3"></div>
                          <div className="col-9">
                            <Divider>
                              <Chip label="PRODUITS" />
                            </Divider>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-3"></div>
                          <div className="col-9">
                            <table className="table table-borderless table-responsive ">
                              <thead>
                                <tr>
                                  <th scope="col">Image</th>
                                  <th scope="col">Nom du produit</th>
                                  <th scope="col">Prix Unitaire</th>
                                  <th scope="col">Prix Total</th>
                                </tr>
                              </thead>
                              <tbody>
                                {cotation.produits.map((produit) => (
                                  <tr key={produit.id}>
                                    <td>
                                      <Link>
                                        <Avatar
                                          alt={produit.nom}
                                          src={produit.photo}
                                          sx={{ width: 50, height: 50 }}
                                        />
                                      </Link>
                                    </td>
                                    <td className="align-item-center">
                                      <Link>{produit.nom}</Link>
                                    </td>
                                    <td>
                                      <div className="row mb-3">
                                        <div className="col">
                                          <input
                                            name="company"
                                            type="number"
                                            className="form-control"
                                            id="company"
                                            value="Lueilwitz, Wisoky and Leuschke"
                                          />
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="row mb-3">
                                        <div className="col">
                                          <input
                                            name="company"
                                            type="number"
                                            className="form-control"
                                            id="company"
                                            value="Lueilwitz, Wisoky and Leuschke"
                                          />
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div className="row mt-4">
                          <div className="col-3"></div>
                          <div className="col-9">
                            <div className="d-grid gap-2">
                              <button type="submit" className="btn btn-primary">
                                Envoyer l'offre
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div
                      className="tab-pane fade  profile-overview"
                      id="profile-edit"
                    >
                      <h5 className="card-title">
                        Description de l'entreprise
                      </h5>
                      <p className="small fst-italic">
                        {cotation.descriptionEntreprise}
                      </p>
                      <h5 className="card-title">
                        Informations Detailées sur l'entreprise
                      </h5>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">
                          Nom de l'entreprise
                        </div>
                        <div className="col-lg-9 col-md-8">
                          {cotation.entreprise}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">
                          Forme Juridique
                        </div>
                        <div className="col-lg-9 col-md-8">
                          {cotation.formeJuridique}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Telephone</div>
                        <div className="col-lg-9 col-md-8">
                          {cotation.telephone}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Email</div>
                        <div className="col-lg-9 col-md-8">
                          {cotation.email}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card">
                <div className="card-header">
                  <h5 className="text-center">Envoi de l'offre de service à l'entreprise</h5>
                </div>
                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                  <img
                    src={`${cotation.logoEntreprise}`}
                    alt="Profile"
                    className="rounded-circle"
                  />
                  <h2>{`${cotation.entreprise} ${cotation.formeJuridique}`}</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainSendCotation;
