import { Link } from "react-router-dom";
import "./Onboarding.scss";

import imgBg from "../../assets/images/Home - Short 1.svg";

const Onboarding = () => {
  return (
    <main className="welcome">
      <div className="onboarding">
        <Link to="/get-started" className="onboarding__link">
          <p className="onboarding__text">Skip</p>
        </Link>
      </div>
      <img src={imgBg} alt="" className="onboarding__wrapper" />
      {/* <div className="onboarding__wrapper">
        <h1 className="onboarding__image">FanVerse</h1>
      </div> */}
      <div className="onboarding__content">
        <div className="onboarding__inner">
          <h1 className="onboarding__title">Your sports tribe awaits 🚀</h1>
          <p className="onboarding__subtitle">
            Build connections that go beyond the app. Find your sports family,
            share insights, and stay updated on all the latest buzz.
          </p>
          <div>
            <span className="onboarding__slider"></span>
            <span className="onboarding__slider"></span>
            <span className="onboarding__slider onboarding__slider--active"></span>
          </div>
          <Link to="/get-started" className="onboarding__btn-link">
            <p className="onboarding__btn">Get Started</p>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Onboarding;
