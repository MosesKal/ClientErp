import Header from "../../header/Header";
import SideBarMining from "../../sideBars/SideBarMining";
import MainCotation from "../../mains/mining/MainCotation";
import useAuth from "../../../hooks/useAuth";

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
      <MainCotation />
    </div>
  );
};

export default CotationMining;
