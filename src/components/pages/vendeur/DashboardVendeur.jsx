
import Header from "../../header/Header";
import SideBarVendeur from "../../sideBars/SideBarVendeur"
import MainSeller from "../../mains/vendeur/MainSeller"

const DashboardVendeur = () => {
  return (
    <div>
      <Header />
      <SideBarVendeur />
      <MainSeller/>
    </div>
  );
};

export default DashboardVendeur;
