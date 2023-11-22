import { Link, useNavigate } from "react-router-dom";
import "./SignupPage.scss";
import googleIcon from "../../assets/icons/Google.svg";
import appleIcon from "../../assets/icons/Apple.svg";
import Input from "../../components/Input/Input";
import axios from "axios";
import { useState } from "react";

const SignupPage = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [tennisChecked, setTennisChecked] = useState(false);
  const [footballChecked, setFootballChecked] = useState(false);

  const handleTennisChange = () => {
    setTennisChecked(!tennisChecked);
  };

  const handleFootballChange = () => {
    setFootballChecked(!footballChecked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(event.target.tennis.value);
    console.log(event.target.username.value);
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    console.log(event.target.tennis.value);
    console.log(event.target.football.value);
    // try {
    //   await axios.post("http://localhost:8000/user-auth/signup", {
    //     username: event.target.username.value,
    //     email: event.target.email.value,
    //     password: event.target.password.value,
    //     tennis: event.target.tennis.value,
    //     football: event.football.tennis.value,
    //   });

    //   navigate("/login");
    // } catch (error) {
    //   console.error(error);
    //   setError(error.response.data);
    // }
  };

  return (
    <div className="signup-page">
      <h1 className="signup-page__title">Create an account</h1>
      <p className="signup-page__subtitle">
        Let’s get you up and running with your very own FanVerse account.
      </p>
      <form className="signup" onSubmit={handleSubmit}>
        <Input type="text" name="username" label="Username" />
        <Input type="text" name="email" label="Email" id="email" required />
        <Input type="password" name="password" label="Password" />

        <label>
          <p className="signup-page__choice">
            Tap your favourite sport (or both) and choose your preferred
            leagues. We are curious!
          </p>
          <div className="topping">
            <input
              type="checkbox"
              id="sports_type"
              name="tennis"
              // value="tennis"
              checked={tennisChecked}
              onChange={handleTennisChange}
            />
            Tennis
          </div>
          <div className="topping">
            <input
              type="checkbox"
              id="sports_type"
              name="football"
              // value="football"
              checked={footballChecked}
              onChange={handleFootballChange}
            />
            Football
          </div>
        </label>

        {error && <div className="signup__message">{error}</div>}

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
