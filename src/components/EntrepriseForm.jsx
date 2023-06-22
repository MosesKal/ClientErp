import React from "react";

const EntrepriseForm = ({ onSubmit }) => {
  return (
    <div className="row">
      <div className="col-12 ">
        <div className="row mt-2">
          <div class="col ">
            <label for="denomination" class="form-label">
              Dénomination
            </label>
            <input
              type="text"
              class="form-control"
              id="denomination"
              required
            />
          </div>
        </div>
        <div className="row mt-2">
          <div class="col ">
            <label for="formeJuridique" class="form-label">
              Forme juridique
            </label>
            <input
              type="text"
              class="form-control"
              id="formeJuridique"
              required
            />
          </div>
        </div>
        <div className="row mt-2">
          <div class="col ">
            <label for="siegeSocial" class="form-label">
              Siège Social
            </label>
            <input type="text" class="form-control" id="siegeSocial" required />
          </div>
        </div>
        <div className="row mt-2">
          <div class="col">
            <label for="email" class="form-label">
              e-mail de l'entreprise
            </label>
            <div class="input-group">
              <span class="input-group-text" id="email">
                @
              </span>
              <input type="email" class="form-control" id="email" required />
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div class="col">
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
            <label for="logo" class="form-label">
              Logo
            </label>
            <input
              type="file"
              class="form-control"
              id="phone"
              value=""
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

export default EntrepriseForm;
