import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

const MainStock = () => {
  const [produits, setProduits] = useState();

  useEffect(()=>{

  }, []);

  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Stock</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Stock</li>
            </ol>
          </nav>
        </div>
        <div className="col-12 comand ">
          <div className="card recent-sales overflow-auto">

            <div className="card-body mt-3 ">
              <h5 className="card-title">
                Catalogue Produits
              </h5>

              <table className="table table-borderless datatable cotation table-hover">
                <thead>
                <tr>
                  <th scope="col">Produit</th>
                  <th scope="col">Date entrée</th>
                  <th scope="col">Quantité</th>
                  <th scope="col">Prix</th>
                  <th scope="col">Statut</th>
                  <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainStock;
