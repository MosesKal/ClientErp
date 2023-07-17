import useAuth from "../../../hooks/useAuth";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import { Link, useParams } from "react-router-dom";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

const DetailCotation = () => {
  const {cotationId} = useParams();
  const { cotations } = useAuth();

  console.log(cotationId);
  console.log(cotations)

  const cotation = cotations.find((cotation)=>cotation.id == cotationId);

  if(!cotation){
    return <div>Cotation introuvable</div>
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
                <Link to="/detailCotation">Détail de la cotation</Link>{" "}
              </li>
            </ol>
          </nav>
        </div>
        <div className="col-12 comand ">
          <div className="card recent-sales overflow-auto">
            <div className="card-body mt-3 ">
              <h5 className="card-title">Détail de la cotation</h5>

              <table className="table table-borderless datatable cotation table-hover">
                <thead>
                  <tr>
                    <th scope="col">Logo Entreprise</th>
                    <th scope="col">Description </th>
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
                    <td>{cotation.description.length > 10 ? cotation.description.substr(0, 40) + '...' : cotation.description}</td>
                    <td>{cotation.date_debut}</td>
                    <td>{cotation.date_fin}</td>
                    <td>{cotation.entreprise}</td>
                    <td>
                      <span className="badge rounded-pill text-bg-secondary">
                        En attente
                      </span>
                    </td>
                    <td>
                      <Link to={`/sendOffre/${cotation.id}`}>
                      <IconButton>
                        <SendIcon />
                      </IconButton>
                      </Link>

                      <Link>
                        <IconButton>
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
            <div className="col-xl-2">
              <div className="card">
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
            <div className="col-xl-10">
              <div className="card">
                <div className="card-body pt-3">
                  <ul className="nav nav-tabs nav-tabs-bordered">
                    <li className="nav-item">
                      <button
                        className="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-overview"
                      >
                        Information sur l'entreprise
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-edit"
                      >
                        Description de la démande de cotation
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-settings"
                      >
                        Liste des produits démandées
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content pt-2">
                    <div
                      className="tab-pane fade show active profile-overview"
                      id="profile-overview"
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
                    <div
                      className="tab-pane fade  profile-overview"
                      id="profile-edit"
                    >
                      <h5 className="card-title">
                        Description de la demande de cotation
                      </h5>
                      <p className="small fst-italic">{cotation.description}</p>
                      <h5 className="card-title">
                        Les détails sur la demande de cotation
                      </h5>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">
                          date de lancement
                        </div>
                        <div className="col-lg-9 col-md-8">
                          {cotation.date_debut}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">
                          date limite
                        </div>
                        <div className="col-lg-9 col-md-8">
                          {cotation.date_fin}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">délais</div>
                        <div className="col-lg-9 col-md-8">
                          {cotation.duree_de_validation} Jours
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade pt-3" id="profile-settings">
                      <div class="col-12">
                        <div class="top-selling overflow-auto">
                          <div class="card-body pb-0">
                            <table class="table table-borderless table-hover table-responsive table-striped">
                              <thead>
                                <tr>
                                  <th scope="col">Image categorie</th>
                                  <th scope="col">Nom categorie</th>
                                  <th scope="col">Image du produit</th>
                                  <th scope="col">Nom du produit</th>
                                  <th scope="col">Quantité</th>
                                  <th scope="col">Détail</th>
                                </tr>
                              </thead>
                              <tbody >
                                {cotation.produits.map((produit) => (
                                 
                                    <tr key={produit.id}>
                                      <td>
                                        <Link to="#">
                                          <Avatar
                                            alt={produit.nom_categorie}
                                            sx={{
                                              width: 100,
                                              height: 100,
                                            }}
                                            src={`${produit.illustration_categorie}`}
                                          />
                                        </Link>
                                      </td>
                                      <td>
                                        <Stack
                                          direction="row"
                                          spacing={1}
                                          alignItems="center"
                                        >
                                          <Link>{produit.nom_categorie}</Link>
                                        </Stack>
                                      </td>
                                      <td>
                                        <Link>
                                          <Avatar
                                            alt={produit.nom}
                                            src={produit.photo}
                                            sx={{ width: 100, height: 100 }}
                                          />
                                        </Link>
                                      </td>
                                      <td className="align-item-center">
                                        <Link>{produit.nom}</Link>
                                      </td>
                                      <td>
                                        <Link>
                                          {produit.CotationProduit.quantite}
                                        </Link>
                                      </td>
                                      <td>
                                        <Link>
                                          {produit.CotationProduit.detail}
                                        </Link>
                                      </td>
                                    </tr>
                                  
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade pt-3"
                      id="profile-change-password"
                    >
                      <form>
                        <div className="row mb-3">
                          <label
                            htmlFor="currentPassword"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Current Password
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="password"
                              type="password"
                              className="form-control"
                              id="currentPassword"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="newPassword"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            New Password
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="newpassword"
                              type="password"
                              className="form-control"
                              id="newPassword"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="renewPassword"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Re-enter New Password
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="renewpassword"
                              type="password"
                              className="form-control"
                              id="renewPassword"
                            />
                          </div>
                        </div>
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary">
                            Change Password
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DetailCotation;
