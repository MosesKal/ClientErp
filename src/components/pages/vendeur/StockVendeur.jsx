import Header from "../../header/Header";
import SideBarVendeur from "../../sideBars/SideBarVendeur";
import StockVedeur from "../../mains/vendeur/MainStock";

const StockVendeur = () => {
  return (
    <div>
      <Header />
      <SideBarVendeur />
      <StockVedeur />
    </div>
  );
};

export default StockVendeur;
