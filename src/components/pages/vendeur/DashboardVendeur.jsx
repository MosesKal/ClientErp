import { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import Header from "../../header/Header";
import SideBarVendeur from "../../sideBars/SideBarVendeur";
import MainSeller from "../../mains/vendeur/MainSeller";

const DashboardVendeur = () => {
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
      <MainSeller />
    </div>
  );
};

export default DashboardVendeur;
