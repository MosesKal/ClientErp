import Header from "../../header/Header";
import SideBarMining from "../../sideBars/SideBarMining";
import MainMining from "../../mains/mining/MainMining";
import useAuth from "../../../hooks/useAuth";

const DashboardMining = () => {
  const { auth } = useAuth();

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
