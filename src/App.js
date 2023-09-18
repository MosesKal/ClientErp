import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
/**---------------------------------------------------------------------------------------
 *                    IMPORTATION PAGE ADMIN
 *---------------------------------------------------------------------------------------*/
import DashboardAdmin from "./components/pages/admin/DashboardAdmin";
import Companies from "./components/pages/admin/Companies.jsx";
import Comptes from "./components/pages/admin/Comptes";
/**---------------------------------------------------------------------------------------
 *                    IMPORTATION PAGE VENDEUR
 *---------------------------------------------------------------------------------------*/
import DashboardVendeur from "./components/pages/vendeur/DashboardVendeur";
import CotationVendeur from "./components/pages/vendeur/CotationVendeur";
import CommandesVendeur from "./components/pages/vendeur/CommandesVendeur";
import StockVendeur from "./components/pages/vendeur/StockVendeur";
import PlanDeProduction from "./components/pages/vendeur/PlandDeProduction";
import ComptabiliteVendeur from "./components/pages/vendeur/ComptabiliteVendeur";
import PortefueilVendeur from "./components/pages/vendeur/PortefueilVendeur";
import Clients from "./components/pages/vendeur/Clients";
import DetailCotation from "./components/pages/vendeur/DetailCotation";
import SendCotation from "./components/pages/vendeur/SendCotation";

/**---------------------------------------------------------------------------------------
 *                    IMPORTATION PAGE MINING
 *---------------------------------------------------------------------------------------*/

import DashboardMining from "./components/pages/mining/DashboardMining";
import Commande from "./components/pages/mining/Commande";
import CotationMining from "./components/pages/mining/CotationMining";
import OffresMining from "./components/pages/mining/OffresMining";
import RapportMining from "./components/pages/mining/RapportMining";

import Login from "./components/Login";
import Register from "./components/Register";
import Attent from "./components/Attent";


import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";

const ROLES = {
  MINING: "mining",
  SELLER: "seller",
  ADMIN: "admin",
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/attent" element={<Attent />} />

        <Route element={<RequireAuth allowedRoles={[ROLES.MINING]} />}>
          <Route path="/mining" element={<DashboardMining />} />
          <Route path="/commandeMining" element={<Commande />} />
          <Route path="/cotationMining" element={<CotationMining />} />
          <Route path="/offresMining" element={<OffresMining />} />
          <Route path="/rapportMining" element={<RapportMining />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
          <Route path="/admin" element={<DashboardAdmin />} />
          <Route path="/entreprise" element={<Companies />} />
          <Route path="/comptes" element={<Comptes />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.SELLER]} />}>
          <Route path="/seller" element={<DashboardVendeur />} />
          <Route path="/cotationVendeur" element={<CotationVendeur />} />
          <Route path="/commandeVendeur" element={<CommandesVendeur />} />
          <Route path="/stockVendeur" element={<StockVendeur />} />
          <Route path="/Clients" element={<Clients />} />
          <Route
            path="/planDeProductionVendeur"
            element={<PlanDeProduction />}
          />
          <Route
            path="/comptabiliteVendeur"
            element={<ComptabiliteVendeur />}
          />
          <Route path="/portefeuilVendeur" element={<PortefueilVendeur />} />
          <Route path="/detailCotation/:cotationId" element={<DetailCotation/>}/>
          <Route path="/sendOffre/:cotationId" element={<SendCotation/>}/>
        </Route>
      </Route>
    </Routes>
  );
}
export default App;
