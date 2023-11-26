import { Link, useNavigate } from "react-router-dom";
import "./SignupPage.scss";
import googleIcon from "../../assets/icons/Google.svg";
import appleIcon from "../../assets/icons/Apple.svg";
import Input from "../../components/Input/Input";
import axios from "axios";
import { useState } from "react";

const SignupPage = () => {
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState(null);
  const navigate = useNavigate();

  const [tennisChecked, setTennisChecked] = useState(false);
  const [footballChecked, setFootballChecked] = useState(false);

  const handleTennisChange = () => {
    setTennisChecked(!tennisChecked);
  };

  const handleFootballChange = () => {
    setFootballChecked(!footballChecked);
  };

  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let isFormValid = true;

    const errors = {};

    if (!event.target.username.value) {
      isFormValid = false;
      errors["username"] = "You must enter your username";
    }
    if (!event.target.email.value) {
      isFormValid = false;
      errors["email"] = "You must enter a valid Email";
    }
    if (!event.target.password.value) {
      isFormValid = false;
      errors["password"] = "You must enter a secure Password";
    }

    if (!tennisChecked && !footballChecked) {
      isFormValid = false;
      errors["sport"] = "You must Choose a Sport";
    }

    if (!isFormValid) {
      return setFormErrors(errors);
    }

    try {
      await axios.post("http://localhost:8000/user-auth/signup", {
        username: event.target.username.value,
        email: event.target.email.value,
        password: event.target.password.value,
        tennis: tennisChecked,
        football: footballChecked,
      });

      navigate("/login");
    } catch (error) {
      console.error(error);
      setFormErrors(error.response);
    }
  };

  return (
    <div className="signup-page">
      <h1 className="signup-page__title">Create an account</h1>
      <p className="signup-page__subtitle">
        Let’s get you up and running with your very own FanVerse account.
      </p>
      <form className="signup" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          label="Username"
          value={formData.username ?? ""}
          onChange={(e) => changeHandler(e)}
          error={formErrors?.username}
        />
        <Input
          type="text"
          name="email"
          label="Email"
          id="email"
          required
          value={formData.email ?? ""}
          onChange={(e) => changeHandler(e)}
          error={formErrors?.email}
        />
        <Input
          type="password"
          name="password"
          label="Password"
          value={formData.password ?? ""}
          onChange={(e) => changeHandler(e)}
          error={formErrors?.password}
        />

        <label>
          <p className="signup-page__choice">
            Tap your favourite sport (or both) and choose your preferred
            leagues. We are curious!
          </p>
          <div className="signup-page__sport">
            <div className="signup-page__inner">
              Tennis
              <input
                className="signup-page__input"
                type="checkbox"
                id="tennis"
                name="tennis"
                value="tennis"
                checked={tennisChecked}
                onChange={handleTennisChange}
              />
            </div>
            <div className="signup-page__inner">
              Football
              <input
                className="signup-page__input"
                type="checkbox"
                id="football"
                name="football"
                value="football"
                checked={footballChecked}
                onChange={handleFootballChange}
              />
            </div>
          </div>
        </label>

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
