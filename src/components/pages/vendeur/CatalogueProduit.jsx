import Header from "../../header/Header";
import SideBarVendeur from "../../sideBars/SideBarVendeur";
import MainCatalogueProduit from "../../mains/vendeur/MainCatalogueProduit";
import useAuth from "../../../hooks/useAuth";

const CatalogueProduit = () => {

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
            <MainCatalogueProduit />
        </div>
    );
};

export default CatalogueProduit;