import { useEffect, useState } from "react";
import "./HomePage.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  //   const [sportType, setSportType] = useState("tennis");
  //   const [posts, setPosts] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get(
  //           `http://localhost:8000/posts?sport_type=${sportType}`
  //         );
  //         console.log(response);
  //         // const data = await response.json();
  //         // setPosts(data);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     };
  //     fetchData();
  //   }, [sportType]);

  //   if (!posts) {
  //     return <>Loading!!!</>;
  //   }

  const [failedAuth, setFailedAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  //   const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  const login = async () => {
    const token = sessionStorage.getItem("token");
    try {
      const response = await axios.get("http://localhost:8000/profile", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setData(response.data);
    } catch (error) {
      setFailedAuth(true);
      console.error(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    login();
  }, []);

  if (failedAuth) {
    return <main className="dashboard">You must log in to see this page.</main>;
  }

  if (isLoading) {
    return <main className="dashboard">Loading...</main>;
  }

  return (
    <main>
      <div>This is the home feed of {data.username} and i am a Tennis Fan</div>
      <button onClick={logout}>Log Out</button>
    </main>
  );
};

export default HomePage;
