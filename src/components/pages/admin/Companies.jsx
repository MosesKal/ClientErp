import MainCompanies from "../../mains/admin/main-companies";

import Header from "../../header/Header";
import SideBarAdmin from "../../sideBars/SideBarAdmin";
import useAuth from "../../../hooks/useAuth";

const Companies = () => {
  const { auth } = useAuth();

  return (
    <div>
      <Header
        imgProfile={auth.profilUser}
        nom={auth.nomUser}
        prenom={auth.prenomUser}
        userRole={auth.roles}
      />
      <SideBarAdmin />
      <MainCompanies />
    </div>
  );
};

export default Companies;
