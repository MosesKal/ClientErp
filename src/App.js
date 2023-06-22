import { Routes, Route } from "react-router-dom";
import DashboardAdmin from "./components/DashboardAdmin";
import DashboardVendeur from "./components/DashboardVendeur";
import DashboardMining from "./components/DashboardMining";
import Login from "./components/Login";
import Register from "./components/Register";
import Companies from "./components/Companies";

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
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
          <Route path="/admin" element={<DashboardAdmin />} />
          <Route path="/companies" element={<Companies />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.SELLER]} />}>
          <Route path="/seller" element={<DashboardVendeur />} />
        </Route>
      </Route>
    </Routes>
  );
}
export default App;
