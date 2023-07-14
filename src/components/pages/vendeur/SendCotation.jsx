import Header from "../../header/Header";
import SideBarVendeur from "../../sideBars/SideBarVendeur";
import MainSendCotation from "../../mains/vendeur/MainSendCotation";
import useAuth from "../../../hooks/useAuth";

const SendCotation = () => {
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
            <MainSendCotation/>
        </div>
    );
};

export default SendCotation;