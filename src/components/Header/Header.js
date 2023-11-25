import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo/Group 3864.svg";
import messageIcon from "../../assets/icons/Frame.svg";

const Header = ({ userData }) => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/nice-to-have" className="nav__link">
              {/* <img src={userData} alt="user avatar" className="nav__img" /> */}
              <img
                src="https://images.unsplash.com/photo-1613679074971-91fc27180061?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="user avatar"
                className="nav__img"
              />
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
