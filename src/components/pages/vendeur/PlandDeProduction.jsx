import Header from "../../header/Header";
import SideBarVendeur from "../../sideBars/SideBarVendeur";
import MainPlanDeProduction from "../../mains/vendeur/MainPlanDeProduction";
import useAuth from "../../../hooks/useAuth";

const PlandDeProduction = () => {
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
      <MainPlanDeProduction />
    </div>
  );
};

export default PlandDeProduction;
