import { Link } from "react-router-dom";
import "./SignupPage.scss";
import googleIcon from "../../assets/icons/Google.svg";
import appleIcon from "../../assets/icons/Apple.svg";
import Input from "../../components/Input/Input";

const SignupPage = () => {
  return (
    <div className="signup-page">
      <h1 className="signup-page__title">Create an account</h1>
      <p className="signup-page__subtitle">
        Let’s get you up and running with your very own FanVerse account.
      </p>
      <form className="signup">
        <Input type="text" name="Username" label="Username" />
        <Input type="text" name="Email" label="Email" />
        <Input type="password" name="Password" label="Password" />

        <Link to="/" className="signup-page__btn-link">
          <p className="signup-page__btn-signup">Sign Up</p>
        </Link>
      </form>
      <p className="signup-page__condition">
        By signing up, you agree to the{" "}
        <Link to="/" className="signup-page__agree">
          User Agreement
        </Link>{" "}
        and{" "}
        <Link to="/" className="signup-page__agree">
          Privacy Policy
        </Link>
        .
      </p>
      <p className="signup-page__option"> ----- Or sign up with ----- </p>
      <div className="signup-page__flex">
        <Link to="/" className="signup-page__btn-link">
          <p className="signup-page__btn-signin">
            <img
              src={googleIcon}
              alt="google icon"
              className="signup-page__icon"
            />
            Google
          </p>
        </Link>
        <Link to="/" className="signup-page__btn-link">
          <p className="signup-page__btn-signin">
            <img
              src={appleIcon}
              alt="google icon"
              className="signup-page__icon"
            />
            Apple
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;
