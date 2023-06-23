import MainComptes from "../../mains/admin/MainComptes";
import Header from "../../header/Header";
import SideBarAdmin from "../../sideBars/SideBarAdmin";

const Comptes = () => {
  return (
    <div>
      <Header />
      <SideBarAdmin />
      <MainComptes />
    </div>
  );
};

export default Comptes;
