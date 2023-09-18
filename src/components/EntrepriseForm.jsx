import { useState } from "react";

const EntrepriseForm = ({ onSubmit, onChange, onImageChange }) => {
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.id]: e.target.value,
    }));

    onChange({ entreprise: { ...values, [e.target.id]: e.target.value } });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setValues({ ...values, Profil: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="row">
          <div className="col mt-3">
            <label htmlFor="denomination" className="form-label">
              Dénomination
            </label>
            <input
              type="text"
              className="form-control"
              id="denomination"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col mt-3">
            <label htmlFor="formeJuridique" className="form-label">
              Forme juridique
            </label>
            <input
              type="text"
              className="form-control"
              id="formeJuridique"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col mt-3">
            <label htmlFor="siegeSocial" className="form-label">
              Siège Social
            </label>
            <input
              type="text"
              className="form-control"
              id="siegeSocial"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col mt-3">
            <label htmlFor="email" className="form-label">
              e-mail de l'entreprise
            </label>
            <div className="input-group">
              <span className="input-group-text" id="email">
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
          <div className="col mt-3">
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
        <div className="row">
          <div className="col mt-3">
            <label htmlFor="logo" className="form-label">
              Logo
            </label>
            <input
              type="file"
              className="form-control"
              id="logo"
              required
              onChange={handleImageChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col mt-3">
            <label className="form-label" htmlFor="password">
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

export default EntrepriseForm;
