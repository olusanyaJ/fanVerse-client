import { Link } from "react-router-dom";
import "./GetStarted.scss";
import googleIcon from "../../assets/icons/Google.svg";
import appleIcon from "../../assets/icons/Apple.svg";

const GetStarted = () => {
  return (
    <div className="get-started">
      <div className="get-started__wrapper">
        <div className="get-started__boxes">
          <div className="get-started__box1"></div>
          <div className="get-started__box2"></div>
          <div className="get-started__box3"></div>
        </div>
      </div>
      <div className="get-started__content">
        <div className="get-started__inner">
          <h1 className="get-started__title">Get Started</h1>
          <p className="get-started__subtitle">
            Experience sports like never before.
          </p>
          <div className="get-started__options">
            <Link to="/login" className="get-started__btn-link">
              <p className="get-started__btn">Continue with Username</p>
            </Link>
            <Link to="/login" className="get-started__btn-link">
              <p className="get-started__btn-outline">
                <img
                  src={googleIcon}
                  alt="google icon"
                  className="get-started__icon"
                />
                Continue with Google
              </p>
            </Link>
            <Link to="/login" className="get-started__btn-link">
              <p className="get-started__btn-outline">
                <img
                  src={appleIcon}
                  alt="google icon"
                  className="get-started__icon"
                />
                Continue with Apple
              </p>
            </Link>
          </div>
          <div className="get-started__footer">
            <span className="get-started__footer-text">
              Don’t have an account?{" "}
              <Link to="/sign-up" className="get-started__footer-link">
                <span className="get-started__footer-link-text">Sign Up</span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
