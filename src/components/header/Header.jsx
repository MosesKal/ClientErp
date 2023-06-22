import Logo from "./Logo";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <Logo />
      <SearchBar />
      <Navigation />
    </header>
  );
};
export default Header;
