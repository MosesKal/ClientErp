import Header from "../../header/Header";
import SideBarVendeur from "../../sideBars/SideBarVendeur";
import MainComptabilite from "../../mains/vendeur/MainComptabilite";
import useAuth from "../../../hooks/useAuth";

const ComptabiliteVendeur = () => {
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
      <MainComptabilite />
    </div>
  );
};

export default ComptabiliteVendeur;
