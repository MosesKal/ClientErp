import React, { useState } from "react";
import axios from "./../api/axios";
import ParticulierForm from "./ParticulierForm";
import EntrepriseForm from "./EntrepriseForm";
import { Link, useNavigate } from "react-router-dom";
import PartieIllustration from "./PartieIllustration";
import useAuth from "../hooks/useAuth";

const REGISTER_URL = "/register";

const Attent = () => {
  return (
    <div className="container-fluid container-login vh-100">
      <div className="row h-100">
        <PartieIllustration />
        <div className="col-lg-6 col-sm-12">
          <div className="row align-item-center justify-content-center h-100">
            <div className="col-6">
              <h1 className="mb-3 mt-2">Page d'attente</h1>
              <div className="row mt-4">
                <div className="col-8">
                  <p>
                    <Link to="/login" className="link-opacity-100">
                      Connexion
                    </Link>
                  </p>
                </div>
                <div className="col-4">
                  <p>
                    <Link to="/register" className="link-opacity-100">
                      Créer compte
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attent;
