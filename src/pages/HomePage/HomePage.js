import { useEffect, useState } from "react";
import "./HomePage.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Verse from "../../components/Verse/Verse";

const HomePage = () => {
  const navigate = useNavigate();
  const [failedAuth, setFailedAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [sportsType, setsportsType] = useState("");
  const [posts, setPosts] = useState([]);

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

  const logout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  const login = async () => {
    const token = sessionStorage.getItem("token");
    try {
      const { data } = await axios.get("http://localhost:8000/profile", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setData(data);
    } catch (error) {
      setFailedAuth(true);
      console.error(error);
    }
    setIsLoading(false);
  };

  // Running this so the login effect renders once when the component mounts
  useEffect(() => {
    login();
  }, []);

  useEffect(() => {
    if (data) {
      let usersportsType = "";
      if (data.football) {
        usersportsType = "football";
      }

      if (data.tennis) {
        usersportsType = "tennis";
      }

      setsportsType(usersportsType);
      fetchData();
    }
  }, [data, sportsType]);

  if (failedAuth) {
    return <main className="dashboard">You must log in to see this page.</main>;
  }

  if (isLoading) {
    return <main className="dashboard">Loading...</main>;
  }

  if (!posts) {
    return <>Loading!!!</>;
  }

  return (
    <main className="main">
      <Header />
      <div className="main__container">
        <Verse userData={data} posts={posts} />
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
