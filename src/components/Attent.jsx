import React from "react";
import { Link } from "react-router-dom";
import imgIllustration from "./assets/img/Illustration.png";

const Attent = () => {
  return (
    <main>
      <div class="container">
        <section class="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
          <h1 className="mt-3">404</h1>
          <h2>Page d'attente</h2>

          <div className="card-body">
            <div className="d-flex justify-content-between mx-3 mt-5">
              <Link to="/login" class="btn card-title">
                Connexion
              </Link>
              <Link to="/register" className="btn ms-2">
                Créer un compte
              </Link>
            </div>
          </div>

          <img src={imgIllustration} alt="" className="mt-5" />
        </section>
      </div>
    </main>
  );
};

export default Attent;
