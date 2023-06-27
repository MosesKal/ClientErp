import Header from "../../header/Header";
import SideBarVendeur from "../../sideBars/SideBarVendeur";
import StockVedeur from "../../mains/vendeur/MainStock";
import useAuth from "../../../hooks/useAuth";

const StockVendeur = () => {
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
      <StockVedeur />
    </div>
  );
};

export default StockVendeur;
