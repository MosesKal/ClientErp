import Header from "../../header/Header";
import SideBarMining from "../../sideBars/SideBarMining";
import MainCommande from "../../mains/mining/MainCommandeMining";
import useAuth from "../../../hooks/useAuth";

const Commande = () => {
  const { auth } = useAuth();

  return (
    <div>
      <Header
        imgProfile={auth.profilUser}
        nom={auth.nomUser}
        prenom={auth.prenomUser}
        userRole={auth.roles}
      />
      <SideBarMining />
      <MainCommande />
    </div>
  );
};

export default Commande;
