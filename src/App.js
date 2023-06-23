import { Routes, Route } from "react-router-dom";
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
/**---------------------------------------------------------------------------------------
 *                    IMPORTATION PAGE MINING
 *---------------------------------------------------------------------------------------*/
import DashboardMining from "./components/pages/mining/DashboardMining";
import Commande from "./components/pages/mining/Commande";
import CotationMining from "./components/pages/mining/CotationMining";
import OffresMining from "./components/pages/mining/OffresMining";
import RapportMining from "./components/pages/mining/RapportMining";
/**---------------------------------------------------------------------------------------
 *                    IMPORTATION PAGE GENERALE
 *---------------------------------------------------------------------------------------*/
import Login from "./components/Login";
import Register from "./components/Register";

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
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

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
          <Route path="/seller/cotationVendeur" element={<CotationVendeur />} />
        </Route>
      </Route>
    </Routes>
  );
}
export default App;
