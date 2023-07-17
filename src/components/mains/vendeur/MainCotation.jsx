import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../index.css";
import useAuth  from "../../../hooks/useAuth";
import IconButton from '@mui/material/IconButton';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import SendIcon from '@mui/icons-material/Send';
import Avatar from '@mui/material/Avatar';

const MainCotation = () => {
  const {cotations} = useAuth();
  return (
      <div>
        <main id="main" className="main">
          <div className="pagetitle">
            <h1>Cotation</h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Liste des cotations</li>
              </ol>
            </nav>
          </div>
          <div className="col-12 comand ">
            <div className="card recent-sales overflow-auto">

              <div className="card-body mt-3 ">
                <h5 className="card-title">
                  Toutes les cotations <span>| Cette Année</span>
                </h5>

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
                  {cotations.map((cotation)=>(
                      <tr key={cotation.id}>
                        <td>
                          <Avatar src={`${cotation.logoEntreprise}`} alt="logo" className="rounded-circle"/>
                        </td>
                        <td>{cotation.description.length > 10 ? cotation.description.substr(0, 40) + '...' : cotation.description}</td>
                        <td>{cotation.date_debut}</td>
                        <td>{cotation.date_fin}</td>
                        <td>{cotation.entreprise}</td>
                        <td><span className="badge rounded-pill text-bg-secondary">En attente</span></td>
                        <td>
                          <Link to={`/sendOffre/${cotation.id}`}>
                            <IconButton>
                              <SendIcon />
                            </IconButton>
                          </Link>

                          <Link to={`/detailCotation/${cotation.id}`} >
                            <IconButton >
                              <ReadMoreIcon />
                            </IconButton>
                          </Link>
                        </td>
                      </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
  )
};

export default MainCotation;
