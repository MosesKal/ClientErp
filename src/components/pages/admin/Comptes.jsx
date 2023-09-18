import MainComptes from "../../mains/admin/MainComptes";
import Header from "../../header/Header";
import SideBarAdmin from "../../sideBars/SideBarAdmin";
import useAuth from "../../../hooks/useAuth";

const Comptes = () => {
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
      <MainComptes />
    </div>
  );
};

export default Comptes;
