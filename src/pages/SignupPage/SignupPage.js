import { Link, useNavigate } from "react-router-dom";
import "./SignupPage.scss";
import googleIcon from "../../assets/icons/Google.svg";
import appleIcon from "../../assets/icons/Apple.svg";
import Input from "../../components/Input/Input";
import axios from "axios";

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8000/user-auth/signup", {
        username: event.target.username.value,
        email: event.target.email.value,
        password: event.target.password.value,
      });

      navigate("/");
    } catch (error) {
      console.error(error);
      //   setError(error.response.data);
    }
  };

  return (
    <div className="signup-page">
      <h1 className="signup-page__title">Create an account</h1>
      <p className="signup-page__subtitle">
        Let’s get you up and running with your very own FanVerse account.
      </p>
      <form className="signup" onSubmit={handleSubmit}>
        <Input type="text" name="username" label="Username" />
        <Input type="text" name="email" label="Email" />
        <Input type="password" name="password" label="Password" />

        <button className="signup-page__btn-signup">Sign Up</button>
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
