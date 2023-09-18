import Header from "../../header/Header";
import SideBarVendeur from "../../sideBars/SideBarVendeur";
import MainCotation from "../../mains/vendeur/MainCotation";
import useAuth from "../../../hooks/useAuth";

const CotationVendeur = () => {
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
      <MainCotation />
    </div>
  );
};

export default CotationVendeur;
