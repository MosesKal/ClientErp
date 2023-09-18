import Header from "../../header/Header";
import SideBarVendeur from "../../sideBars/SideBarVendeur";
import MainPortefeuil from "../../mains/vendeur/MainPortefeuil";
import useAuth from "../../../hooks/useAuth";

const PortefueilVendeur = () => {
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
      <MainPortefeuil />
    </div>
  );
};
export default PortefueilVendeur;
