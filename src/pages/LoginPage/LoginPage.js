import Input from "../../components/Input/Input";
import "./LoginPage.scss";
import { Link, useNavigate } from "react-router-dom";
import googleIcon from "../../assets/icons/Google.svg";
import appleIcon from "../../assets/icons/Apple.svg";
import axios from "axios";
// import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  // const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(event.target.username.value);
    // console.log(event.target.password.value);
    try {
      const inputData = await axios.post(
        "http://localhost:8000/user-auth/login",
        {
          username: event.target.username.value,
          password: event.target.password.value,
        }
      );
      sessionStorage.setItem("token", inputData.data.token);
      navigate("/home");
    } catch (error) {
      console.error(error);
      // setError(error.response.data);
    }
  };

  return (
    <main className="login-page">
      <h1 className="signup-page__title">Sign back in as</h1>
      <p className="signup-page__subtitle">
        Enter your password and Get back in!
      </p>
      <form className="login" onSubmit={handleSubmit}>
        <Input type="text" name="username" label="Username" />
        <Input type="password" name="password" label="Password" />

        <p className="login-page__condition">
          <Link to="/" className="signup-page__agree">
            Forgot Password?
          </Link>
        </p>
        <button className="login-page__btn-signup">Sign In</button>
      </form>

      <p className="signup-page__option"> ----- Or sign in with ----- </p>
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
    </main>
  );
};

export default LoginPage;
