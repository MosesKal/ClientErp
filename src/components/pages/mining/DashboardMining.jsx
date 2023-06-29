import { useEffect } from "react";
import axios from "../../api/axios";
import Header from "../../header/Header";
import SideBarMining from "../../sideBars/SideBarMining";
import MainMining from "../../mains/mining/MainMining";
import useAuth from "../../../hooks/useAuth";


const DashboardMining = () => {
  const { auth, dataMining, setDataMining } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/getDataMining/${auth.accessToken}`);
        setDataMining(response?.data?.userData)
      } catch (error) {
        console.log("Une erreur s'est produite");
      }
    };
    fetchData();
  }, []);


  return (
    <div>
      <Header
        imgProfile={auth.profilUser}
        nom={auth.nomUser}
        prenom={auth.prenomUser}
        userRole={auth.roles}
      />
      <SideBarMining />
      <MainMining />
    </div>
  );
};

export default DashboardMining;
