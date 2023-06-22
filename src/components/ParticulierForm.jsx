import React from "react";

const ParticulierForm = ({ onSubmit }) => {
  return (
    <div className="row ">
      <div className="col-12">
        <div class="col mt-2">
          <label for="prenom" class="form-label">
            Prenom
          </label>
          <input
            type="text"
            class="form-control is-valid"
            id="prenom"
            value="Mark"
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col mt-2">
          <label for="nom" class="form-label">
            Nom
          </label>
          <input
            type="text"
            class="form-control is-valid"
            id="nom"
            value="Mark"
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col mt-2">
          <label for="validationServerUsername" class="form-label">
            e-mail
          </label>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend3">
              @
            </span>
            <input
              type="email"
              class="form-control is-invalid"
              id="email"
              aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
              required
            />
          </div>
        </div>
        <div class="col mt-2">
          <label for="phone" class="form-label">
            Téléphone
          </label>
          <input
            type="text"
            class="form-control is-valid"
            id="phone"
            value="Mark"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default ParticulierForm;
