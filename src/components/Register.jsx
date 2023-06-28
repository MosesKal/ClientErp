import React, { useState } from "react";
import axios from "./../api/axios";
import ParticulierForm from "./ParticulierForm";
import EntrepriseForm from "./EntrepriseForm";
import { Link, useNavigate } from "react-router-dom";
import PartieIllustration from "./PartieIllustration";
import useAuth from "../hooks/useAuth";

const REGISTER_URL = "/register";

const Register = () => {
  const navigate = useNavigate();
  const [type, setType] = useState("1");
  const { dataForm } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type === "1") {
      try {
        const response = await axios.post(REGISTER_URL, dataForm, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        navigate("/attent");
      } catch (error) {
        console.log("Erreur", error);
      }
    } else if (type === "2") {
      console.log(type);
    }
  };

  return (
    <div className="container-fluid container-login vh-100">
      <div className="row h-100">
        <PartieIllustration />
        <div className="col-lg-6 col-sm-12">
          <div className="row align-item-center justify-content-center h-100">
            <div className="col-6">
              <h1 className="mb-3 mt-2">Inscription</h1>
              <form
                onSubmit={handleSubmit}
                className="row"
                encType="multipart/form-data"
              >
                <div className="row">
                  <div className="col-12">
                    <label htmlFor="type" className="form-label">
                      Quel type de prestataire êtes-vous ?
                    </label>
                    <select
                      className="form-select form-select mt-4"
                      aria-label="form-select-lg example"
                      id="type"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                    >
                      <option value="1">Particulier</option>
                      <option value="2">Une entreprise</option>
                    </select>
                  </div>
                </div>
                {type === "1" ? <ParticulierForm /> : <EntrepriseForm />}
                <div className="row mt-4">
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit">
                      S'inscrire sur la plateforme
                    </button>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-8">Avez-vous déjà un compte ?</div>
                  <div className="col-4">
                    <p>
                      <Link to="/login" className="link-opacity-100">
                        Connexion
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
