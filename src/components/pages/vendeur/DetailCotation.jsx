import Header from "../../header/Header";
import SideBarVendeur from "../../sideBars/SideBarVendeur";
import DCotation from "../../mains/vendeur/DetailCotation";
import useAuth from "../../../hooks/useAuth";

const DetailCotation = () => {
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
            <DCotation/>
        </div>
    );
};

export default DetailCotation;