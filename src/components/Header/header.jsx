import "./header.css";
import logo from "../../assets/images/logo2.png";
import NavBar from "../NavBar/NavBar";
import WebNav from "../webNav/WebNav";

function Header({setOS}) {
    return (
      <header className="header" id="home">
         <WebNav />
        <div className="header-content py-5 d-flex flex-column justify-content-center align-items-center text-center">
          <div className="logo pt-md-5">
            <img src={logo} alt="logo" width="100%" />
          </div>
          <span className="logo-text"> Complete Offers to Earn Coins! </span>
          <NavBar setOS={setOS} />
        </div>
      </header>
    );
}

export default Header;
