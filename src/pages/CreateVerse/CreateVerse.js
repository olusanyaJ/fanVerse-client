import "./CreateVerse.scss";
import cancelIcon from "../../assets/icons/x.svg";
import linkIcon from "../../assets/icons/link.svg";
import videoIcon from "../../assets/icons/video.svg";
import letterIcon from "../../assets/icons/letter.svg";
import photoIcon from "../../assets/icons/photo.svg";
import gifIcon from "../../assets/icons/gif.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const CreateVerse = () => {
  const [inputValue, setInputValue] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("working!");
    console.log(event.target.verse.value);
    // try {
    //   const response = await axios.post("http://localhost:8000/posts", {
    //     user_id : ,
    //     user_name: ,
    //     content: event.target.verse.value,
    //   });
    //   console.log("Post created with ID:", response.data.id);
    // } catch (error) {
    //   console.error(
    //     "Error creating post:",
    //     error.response?.data?.error || error.message
    //   );
    // }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
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
