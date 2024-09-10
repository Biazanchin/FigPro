import logo from "../../assets/logo.svg";
import search from "../../assets/search-2905.svg";
import user from "../../assets/sign-out-3300.svg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <button className="btn-mobile">
          <img src="../../assets/menu.png" alt="hamburguer" />
        </button>
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <a href="#" className="active">
            HOME
          </a>
          <a href="#">ABOUT</a>
          <a href="#">EXAMPLES</a>
          <a href="#">CONTACT</a>
        </nav>
        <div className="right">
          <button type="button">
            <img src={search} alt="search icon" />
          </button>
          <button type="button">
            <img src={user} alt="user icon" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
