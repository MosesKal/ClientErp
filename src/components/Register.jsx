import React, { useState } from "react";
import imgIllustration from "../components/assets/img/Illustration.png";

import ParticulierForm from "./ParticulierForm";
import EntrepriseForm from "./EntrepriseForm";

const Register = () => {
  const [type, setType] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type == "1") {
    } else if (type === "2") {
    }
  };

  return (
    <div className="container-fluid container-login vh-100">
      <div className="row h-100 ">
        <div className="col-lg-5 col-sm-12">
          <div className="row h-40 text-center mt-5">
            <h1>logo</h1>
          </div>
          <div className="row h-50 mt-3">
            <img src={imgIllustration} alt="" className="mt-5" />
          </div>
        </div>
        <div className="col-lg-7 col-sm-12 mt-2">
          <div className="row align-item-center justify-content-center h-100 mt-2">
            <div className="col-6">
              <h1 className="mt-5 mb-3">Inscription</h1>
              <form onSubmit={handleSubmit} className="row">
                <div className="row">
                  <div className="col-12">
                    <lable for="type" class="form-label ">
                      Quel type de préstateur êtes-vous ?
                    </lable>
                    <select
                      class="form-select form-select-lg mt-4"
                      aria-label="form-select-lg example"
                      id="type"
                      onChange={(e) => setType(e.target.value)}
                    >
                      <option value="1" selected>
                        Particulier
                      </option>
                      <option value="2">Une entreprise</option>
                    </select>
                  </div>
                </div>
                {type === "1" ? (
                  <ParticulierForm onSubmit={handleSubmit} />
                ) : (
                  <EntrepriseForm onSubmit={handleSubmit} />
                )}
                <div className="row mt-2">
                  <div className="col">
                    <button type="submit" class="btn btn-primary mt-3">
                      Suivant
                    </button>
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
