// import { useEffect, useState } from "react";
// import "./HomePage.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Verse from "../../components/Verse/Verse";

import { useEffect, useState } from "react";
import "./HomePage.scss";
import auth from "../../utils/auth";

const HomePage = () => {
  const { failedAuth, isLoading, userData } = auth();
  const [sportsType, setSportsType] = useState("");
  const [userLoggedImg, setUserLoggedImg] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
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
  }, [userData]);

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

  const navigate = useNavigate();
  // const [failedAuth, setFailedAuth] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  // const [data, setData] = useState(null);
  // const [sportsType, setsportsType] = useState("");
  // const [userLoggedImg, setUserLoggedImg] = useState("");
  // const [posts, setPosts] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       `http://localhost:8000/posts?sports_type=${sportsType}`
  //     );
  //     setPosts(data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  const logout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  // const login = async () => {
  //   const token = sessionStorage.getItem("token");
  //   try {
  //     const { data } = await axios.get("http://localhost:8000/profile", {
  //       headers: {
  //         Authorization: "Bearer " + token,
  //       },
  //     });
  //     setData(data);
  //   } catch (error) {
  //     setFailedAuth(true);
  //     console.error(error);
  //   }
  //   setIsLoading(false);
  // };

  // // Running this so the login effect renders once when the component mounts
  // useEffect(() => {
  //   login();
  // }, []);

  // useEffect(() => {
  //   if (data) {
  //     let userImg = data.profile_image_url;
  //     // console.log(data.profile_image_url);
  //     let usersportsType = "";
  //     if (data.football) {
  //       usersportsType = "football";
  //     }

  //     if (data.tennis) {
  //       usersportsType = "tennis";
  //     }

  //     setsportsType(usersportsType);
  //     setUserLoggedImg(userImg);
  //     fetchData();
  //   }
  // }, [data, sportsType]);

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
        {/* <div className="post_test">
          <div>
            This is the home feed of {data.username} and i am a {sportsType} Fan
          </div>
          <p>This is the content:</p>
          {posts.map((post) => {
            const postContent = post.content;
            return (
              <>
                <p key={post.id} className="post-test">
                  {postContent}
                </p>
              </>
            );
          })}
          <button onClick={logout}>Log Out</button>
        </div> */}
      </div>
      <Nav />
    </main>
  );
};

export default HomePage;
