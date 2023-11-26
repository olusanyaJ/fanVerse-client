import { useState, useEffect } from "react";
import axios from "axios";

const useAuth = () => {
  const [failedAuth, setFailedAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  const login = async (token) => {
    try {
      const { data } = await axios.get("http://localhost:8000/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(data);
    } catch (error) {
      setFailedAuth(true);
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      login(token);
    } else {
      setFailedAuth(true);
      setIsLoading(false);
    }
  }, []);

  return { failedAuth, isLoading, userData };
};

export default useAuth;
