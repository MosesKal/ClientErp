import Header from "../../header/Header";
import SideBarMining from "../../sideBars/SideBarMining";
import useAuth from "../../../hooks/useAuth";
import MainQuototation from "../../mains/mining/MainQutotation";

const CotationMining = () => {
  const { auth, dataMining , produits} = useAuth();

  return (
    <div>
      <Header
        imgProfile={auth.profilUser}
        nom={auth.nomUser}
        prenom={auth.prenomUser}
        userRole={auth.roles}
      />
      <SideBarMining />

      <MainQuototation data={dataMining} produits={produits} />
    </div>
  );
};

export default CotationMining;
