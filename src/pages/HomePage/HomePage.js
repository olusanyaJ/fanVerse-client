import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Verse from "../../components/Verse/Verse";
import { useEffect, useState } from "react";
import "./HomePage.scss";
import auth from "../../utils/auth";

const HomePage = () => {
  const navigate = useNavigate();
  const { failedAuth, isLoading, userData } = auth();
  const [sportsType, setSportsType] = useState("");
  const [userLoggedImg, setUserLoggedImg] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8000/posts?sports_type=${sportsType}`
        );
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (userData) {
      let userImg = userData.profile_image_url;
      let userSportsType = "";

      if (userData.football) {
        userSportsType = "football";
      }

      if (userData.tennis) {
        userSportsType = "tennis";
      }

      setSportsType(userSportsType);
      setUserLoggedImg(userImg);

      fetchData();
    }
  }, [userData, sportsType]);

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
    <main className="main">
      <Header userData={userLoggedImg} />
      <div className="main__container">
        <Verse userData={userData} posts={posts} />
      </div>
      <Nav />
    </main>
  );
};

export default HomePage;
