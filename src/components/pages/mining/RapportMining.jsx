import Header from "../../header/Header";
import SideBarMining from "../../sideBars/SideBarMining";
import MainRapportMining from "../../mains/mining/MainRapportMining";
import useAuth from "../../../hooks/useAuth";

const RapportMining = () => {
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
      <MainRapportMining />
    </div>
  );
};

export default RapportMining;
