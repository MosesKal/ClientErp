import React, { useState } from "react";

const ParticulierForm = ({ onSubmit, onChange }) => {
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
    onChange({ particulier: { ...values, [e.target.id]: e.target.value } });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setValues({ ...values, profil: file });
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="row">
          <div className="col mt-2">
            <label htmlFor="nom" className="form-label">
              Nom
            </label>
            <input
              type="text"
              className="form-control"
              id="nom"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col mt-2">
            <label htmlFor="prenom" className="form-label">
              Prenom
            </label>
            <input
              type="text"
              className="form-control"
              id="prenom"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col mt-2">
            <label htmlFor="email" className="form-label">
              e-mail
            </label>
            <div className="input-group">
              <span className="input-group-text" id="email-addon">
                @
              </span>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col mt-2">
            <label htmlFor="phone" className="form-label">
              Téléphone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <label htmlFor="profil" className="form-label">
              Photo de profil
            </label>
            <input
              type="file"
              className="form-control"
              id="profil"
              required
              onChange={handleImageChange}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <label htmlFor="password" className="form-label">
              Mot de passe
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              required
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticulierForm;
