import React from "react";
import Header from "../../header/Header";
import useAuth from "../../../hooks/useAuth";
import SideBarVendeur from "../../sideBars/SideBarVendeur";
import MainClients from "../../mains/vendeur/MainClients";

function Clients() {
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
      <MainClients />
    </div>
  );
}

export default Clients;
