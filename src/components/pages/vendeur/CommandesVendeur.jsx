import Header from "../../header/Header";
import SideBarVendeur from "../../sideBars/SideBarVendeur";
import MainCommande from "../../mains/vendeur/MainCommande";
import useAuth from "../../../hooks/useAuth";

const CommandesVendeur = () => {
  const { auth } = useAuth();
  return (
    <div>
      <Header
        imgProfile={auth.profilUser}
        nom={auth.nomUser}
        prenom={auth.prenomUser}
        userRole={auth.roles}
      />
      <SideBarVendeur />
      <MainCommande />
    </div>
  );
};

export default CommandesVendeur;
