import {useEffect} from "react";
import useAuth from "../../../hooks/useAuth";
import Header from "../../header/Header";
import SideBarVendeur from "../../sideBars/SideBarVendeur";
import MainSeller from "../../mains/vendeur/MainSeller";
import axios from "../../api/axios";

const DashboardVendeur = () => {
  const { auth, cotation, setCotation, setCotations, cotations } = useAuth();

  useEffect(()=>{
      const fetchData = async ()=>{
          try{
              const response = await axios.get('/getCotation/10');
              setCotation(response?.data);
          }catch (e) {
              console.log("Une erreur s'est produite", e);
          }
      };
      const fetchAllCotations = async ()=>{
          try{
              const response = await axios.get('/getAllCotations');
              setCotations(response?.data);
          }catch (e) {
              console.log("Une erreur s'est produite", e);
          }
      }

      fetchData();
      fetchAllCotations();
  }, []);

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
