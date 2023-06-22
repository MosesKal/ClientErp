import React from "react";

const ParticulierForm = ({ onSubmit }) => {
  return (
    <div className="row">
      <div className="col-12 ">
        <div className="row ">
          <div class="col mt-2 ">
            <label for="nom" class="form-label">
              Nom
            </label>
            <input
              type="text"
              class="form-control"
              id="nom"
              required
            />
          </div>
        </div>
        <div className="row">
          <div class="col mt-2">
            <label for="prenom" class="form-label">
              Prenom
            </label>
            <input
              type="text"
              class="form-control"
              id="prenom"
              required
            />
          </div>
        </div>
        <div className="row">
          <div class="col mt-2">
            <label for="email" class="form-label">
              e-mail
            </label>
            <div class="input-group">
              <span class="input-group-text" id="email">
                @
              </span>
              <input type="email" class="form-control" id="email" required />
            </div>
          </div>
        </div>
        <div className="row ">
          <div class="col mt-2">
            <label for="phone" class="form-label">
              Téléphone
            </label>
            <input
              type="text"
              class="form-control"
              id="phone"
              value=""
              required
            />
          </div>
        </div>
        <div className="row mt-2">
          <div class="col">
            <label for="profil" class="form-label">
              Photo de profil
            </label>
            <input
              type="file"
              class="form-control"
              id="profil"
              required
            />
          </div>
        </div>
        <div className="row mt-2">
          <div class="col ">
            <label class="form-label" for="password">
              Mot de pass
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              value=""
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticulierForm;
