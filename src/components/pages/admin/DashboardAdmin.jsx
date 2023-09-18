import Header from "../../header/Header";
import SideBarAdmin from "../../sideBars/SideBarAdmin";
import MainAdmin from "../../mains/admin/MainAdmin";
import useAuth from "../../../hooks/useAuth";

const DashboardAdmin = () => {
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
      <MainAdmin />
    </div>
  );
};

export default DashboardAdmin;
