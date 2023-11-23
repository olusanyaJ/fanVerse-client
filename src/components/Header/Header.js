import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo/Group 3864.svg";
import messageIcon from "../../assets/icons/Frame.svg";
import img from "../../assets/images/free-photo.jpeg";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/nice-to-have" className="nav__link">
              <img src={img} alt="user avatar" className="nav__img" />
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/home" className="nav__link">
              <img src={logo} alt="fanverse logo" className="img-logo" />
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/nice-to-have" className="nav__link">
              <img src={messageIcon} alt="messages icon" className="img-msg" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
