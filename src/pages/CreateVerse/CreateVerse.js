import "./CreateVerse.scss";
import cancelIcon from "../../assets/icons/x.svg";
import linkIcon from "../../assets/icons/link.svg";
import videoIcon from "../../assets/icons/video.svg";
import letterIcon from "../../assets/icons/letter.svg";
import photoIcon from "../../assets/icons/photo.svg";
import gifIcon from "../../assets/icons/gif.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const CreateVerse = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <main className="create-verse">
      <div className="create-verse__nav">
        <Link to="/nice-to-have" className="nav__link">
          <img src={cancelIcon} alt="" />
        </Link>
      </div>

      <form className="create-verse__form">
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
          <img src={photoIcon} alt="photo upload icon" />
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
