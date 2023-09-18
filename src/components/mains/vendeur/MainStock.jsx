import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MainStock = () => {
  const [produits, setProduits] = useState();

  useEffect(() => {}, []);

  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Stock</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/CotationVendeur">Home</Link>
              </li>
              <li className="breadcrumb-item active">
                <Link to="/detailCotation">Stock</Link>
              </li>
            </ol>
          </nav>
        </div>

        <div className="card-body" style={{ padding: "140px" }}>
          <div className=" col-12 d-flex align-items-center justify-content-center mb-4">
            <div className="card info-card mb-2" style={{ width: "500px" }}>
              <div className="d-flex align-items-center justify-content-center text-center">
                <img
                  src={process.env.PUBLIC_URL + "/appointment.gif"}
                  alt="Shopping Cart"
                  style={{ width: "200px" }}
                />
              </div>
            </div>
          </div>
          <div className="col-12 comand d-flex flex-column align-items-center justify-content-center mb-4">
            <h3>Le stock est vide</h3>
            <span className="text-secondary">Créer et gérer votre stock</span>
          </div>
          <div className="col-12 comand d-flex align-items-center justify-content-center">
            <div className="row">
              <div className="col-6">
                <button
                    type="button"
                    className="btn btn-primary"
                    style={{width : 250}}
                >
                  <i className="bi bi-plus pe-2"></i>NOUVEAU STOCK
                </button>
              </div>
              <div className="col-6">
                <button
                    type="button"
                    className="btn btn-secondary"
                    style={{width : 250}}
                >
                  <i className="bi bi-grid pe-2"></i>PRODUITS
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 comand d-flex align-items-center justify-content-center mt-3">
            <p className="text-primary ">
              <Link>Importer le stock</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainStock;
