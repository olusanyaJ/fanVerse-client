import { Link, useNavigate } from "react-router-dom";
import "./ProfilePage.scss";
import cancelIcon from "../../assets/icons/x.svg";
import editIcon from "../../assets/icons/edit.svg";
import Nav from "../../components/Nav/Nav";
import auth from "../../utils/auth";
import { useEffect, useState } from "react";
import ProfilePost from "../../components/ProfilePost/ProfilePost";
import axios from "axios";
// import NiceToHave from "../NiceToHave/NiceToHave";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { failedAuth, isLoading, userData } = auth();
  const [user_id, setUser_id] = useState("");
  const [userLoggedImg, setUserLoggedImg] = useState("");
  const [posts, setPosts] = useState([]);
  const [toggle, setToggle] = useState(1);

  const updateToggle = (id) => {
    setToggle(id);
  };

  useEffect(() => {
    if (userData) {
      let userImg = userData.profile_image_url;
      let user_id = userData.id;
      setUser_id(user_id);
      setUserLoggedImg(userImg);

      fetchData();
    }
  }, [userData]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/posts/users/${user_id}`
      );
      setPosts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  if (failedAuth) {
    return (
      <main className="dashboard">
        <h1>You must log in to see this page.</h1>
        {logout()}
      </main>
    );
  }

  if (isLoading) {
    return <main className="dashboard">Loading...</main>;
  }

  if (!posts) {
    return <>Loading!!!</>;
  }

  return (
    <main className="profile">
      <nav className="profile__nav">
        <Link to="/home" className="nav__link">
          <img src={cancelIcon} alt="" />
        </Link>
        <h1 className="profile__heading">Profile</h1>
        <Link to="/nice-to-have" className="nav__link">
          <img src={editIcon} alt="" />
        </Link>
      </nav>
      <section className="profile__inner">
        <img src={userLoggedImg} alt="" className="profile__avatar" />
        <div className="profile__cred">
          <p className="profile__name">{userData.full_name}</p>
          <p className="profile__username">@{userData.username}</p>
        </div>
        <div className="profile__cred">
          <p className="profile__following">
            2.2k <span className="profile__following--edit">following</span>
          </p>
          <p className="profile__following">
            2.2k <span className="profile__following--edit">followers</span>
          </p>
        </div>
        <p className="profile__bio">{userData.bio}</p>
        <ul>
          <li className="profile__data">Joined November 2023</li>
        </ul>
      </section>
      <section>
        <ul className="profile__tab">
          <li
            className={toggle === 1 ? "profile__item--active" : "profile__item"}
            onClick={() => updateToggle(1)}
          >
            Your Posts
          </li>
          <li
            className={toggle === 2 ? "profile__item--active" : "profile__item"}
            onClick={() => updateToggle(2)}
          >
            Your Comments
          </li>
          <li
            className={toggle === 3 ? "profile__item--active" : "profile__item"}
            onClick={() => updateToggle(3)}
          >
            Tags
          </li>
        </ul>
      </section>
      <div
        className={
          toggle === 1
            ? "profile__toggle-content-on"
            : "profile__toggle-content-off"
        }
      >
        <ProfilePost userData={userData} posts={posts} />
        {/* <Verse userData={userData} posts={posts} /> */}
      </div>
      <div
        className={
          toggle === 2
            ? "profile__toggle-content-on"
            : "profile__toggle-content-off"
        }
      >
        <p className="profile__nice-to-have">Under construction!</p>
      </div>
      <div
        className={
          toggle === 3
            ? "profile__toggle-content-on"
            : "profile__toggle-content-off"
        }
      >
        <p className="profile__nice-to-have">Under construction!</p>
      </div>
      <Nav />
    </main>
  );
};

export default ProfilePage;
