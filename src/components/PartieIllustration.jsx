import imgIllustration from "./assets/img/Illustration.png";
import "./styles/partieIllustration.css";
import logo from "./assets/img/logo.png";
const partieIllustration = () => {
  return (
    <div className="col-lg-6 col-sm-12 illustration">
      <div className="row h-40 text-center mt-5">
        <div className="col">
          <img src={logo} alt="" />
          <h1 className="text-white">Small ERP</h1>
        </div>
      </div>
      <div className="row h-50 mt-3">
        <img src={imgIllustration} alt="" className="mt-5" />
      </div>
    </div>
  );
};

export default partieIllustration;
