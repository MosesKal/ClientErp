import imgIllustration from "./assets/img/Illustration.png";
const partieIllustration = () => {
  return (
    <div className="col-lg-5 col-sm-12 illustration">
      <div className="row h-40 text-center mt-5">
        <h1>logo</h1>
      </div>
      <div className="row h-50 mt-3">
        <img src={imgIllustration} alt="" className="mt-5" />
      </div>
    </div>
  );
};

export default partieIllustration;
