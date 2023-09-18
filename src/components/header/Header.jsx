import Logo from "./Logo";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";

const Header = ({ imgProfile, nom, prenom, userRole }) => {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <Logo />
      <SearchBar />
      <Navigation
        imgProfile={imgProfile}
        nom={nom}
        prenom={prenom}
        userRole={userRole}
      />
    </header>
  );
};
export default Header;
