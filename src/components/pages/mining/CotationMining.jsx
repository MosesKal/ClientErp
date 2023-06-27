import Header from "../../header/Header";
import SideBarMining from "../../sideBars/SideBarMining";
import useAuth from "../../../hooks/useAuth";
import MainQuototation from "../../mains/mining/MainQutotation";

const CotationMining = () => {
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

      <MainQuototation />
    </div>
  );
};

export default CotationMining;
