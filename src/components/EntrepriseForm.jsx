

const EntrepriseForm = ({ onSubmit }) => {
  return (
    <div className="row">
      <div className="col-12 ">
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
            />
          </div>
        </div>
        <div className="row">
          <div className="col mt-3">
            <label htmlFor="siegeSocial" className="form-label">
              Siège Social
            </label>
            <input type="text" className="form-control" id="siegeSocial" required />
          </div>
        </div>
        <div className="row ">
          <div className="col mt-3">
            <label htmlFor="email" className="form-label">
              e-mail de l'entreprise
            </label>
            <div className="input-group">
              <span className="input-group-text" id="email">
                @
              </span>
              <input type="email" className="form-control" id="email" required />
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col mt-3">
            <label htmlFor="phone" className="form-label">
              Téléphone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              value=""
              required
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
              id="phone"
              value=""
              required
            />
          </div>
        </div>
        <div className="row ">
          <div className="col mt-3">
            <label className="form-label" htmlFor="password">
              Mot de pass
            </label>
            <input
              type="password"
              className="form-control"
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
