import { Link } from "react-router-dom";
import "./Nav.scss";
import homeFeedIcon from "../../assets/icons/home.svg";
import liveFeedIcon from "../../assets/icons/live.svg";
import createVerseIcon from "../../assets/icons/create.svg";
import notificationsIcon from "../../assets/icons/noti.svg";
import profileIcon from "../../assets/icons/profile.svg";

const Nav = () => {
  return (
    <header className="footer">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/home" className="nav__link">
              <img src={homeFeedIcon} alt="" className="footer__img" />
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/nice-to-have" className="nav__link">
              <img src={liveFeedIcon} alt="" className="footer__img" />
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/verse" className="nav__link">
              <img src={createVerseIcon} alt="" className="footer__img" />
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/nice-to-have" className="nav__link">
              <img src={notificationsIcon} alt="" className="footer__img" />
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/nice-to-have" className="nav__link">
              <img src={profileIcon} alt="" className="footer__img" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
