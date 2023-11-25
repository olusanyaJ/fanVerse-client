import "./CreateVerse.scss";
import cancelIcon from "../../assets/icons/x.svg";
import linkIcon from "../../assets/icons/link.svg";
import videoIcon from "../../assets/icons/video.svg";
import letterIcon from "../../assets/icons/letter.svg";
import photoIcon from "../../assets/icons/photo.svg";
import gifIcon from "../../assets/icons/gif.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import auth from "../../utils/auth";

const CreateVerse = () => {
  const { failedAuth, isLoading, userData } = auth();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    let userSportsType = "";

    if (userData.football) {
      userSportsType = "football";
    }

    if (userData.tennis) {
      userSportsType = "tennis";
    }

    try {
      const response = await axios.post("http://localhost:8000/posts", {
        data: {
          user_id: userData.id,
          user_name: userData.username,
          content: event.target.verse.value,
          sports_type: userSportsType,
        },
      });
      navigate("/home");
      console.log(response);
      console.log("Post created with ID:", response.data.id);
    } catch (error) {
      console.error("Error creating post:", error);
      console.error(
        "Detailed error response:",
        error.response?.data || error.message
      );
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  if (failedAuth) {
    return (
      <main className="dashboard">
        <h1>You must log in to see this page.</h1>
      </main>
    );
  }

  if (isLoading) {
    return <main className="dashboard">Loading...</main>;
  }

  return (
    <main className="create-verse">
      <div className="create-verse__nav">
        <Link to="/home" className="nav__link">
          <img src={cancelIcon} alt="" />
        </Link>
      </div>

      <form className="create-verse__form" onSubmit={handleSubmit}>
        <textarea
          id="verse"
          name="verse"
          rows=""
          cols=""
          className="create-verse__input"
          placeholder="What's happening?"
          value={inputValue}
          onChange={handleInputChange}
        ></textarea>
        <button className={`create-verse__btn ${inputValue && "active"}`}>
          Post
        </button>
      </form>

      <div className="create-verse__upload">
        <Link to="/nice-to-have" className="nav__link">
          <img src={linkIcon} alt="link upload icon" />
        </Link>
        <Link to="/nice-to-have" className="nav__link">
          <img src={photoIcon} alt="upload icon" />
        </Link>
        <Link to="/nice-to-have" className="nav__link">
          <img src={gifIcon} alt="gif upload icon" />
        </Link>
        <Link to="/nice-to-have" className="nav__link">
          <img src={videoIcon} alt="video upload icon" />
        </Link>
        <Link to="/nice-to-have" className="nav__link">
          <img src={letterIcon} alt="letter upload icon" />
        </Link>
      </div>
    </main>
  );
};

export default CreateVerse;
